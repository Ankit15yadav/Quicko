import { isTokenExpired } from '@src/utils';
import { useRouter } from 'expo-router';
import * as secureStorage from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { IUser } from './interface';

interface AuthState {
    user: IUser | null;
    isLoading: boolean;
}

type AuthAction =
    | { type: 'SET_USER'; payload: IUser | null }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'LOGOUT' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        case 'LOGOUT':
            return { user: null, isLoading: false };
        default:
            return state;
    }
};

interface AuthContextType {
    user: IUser | null;
    isLoading: boolean;
    logout: () => Promise<void>;
    dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { dismissAll, push, replace } = useRouter();
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isLoading: true
    });

    const initializeAuth = async () => {
        try {
            dispatch({ type: 'SET_LOADING', payload: true });

            const accessToken = await secureStorage.getItemAsync('accessToken');
            const refreshToken = await secureStorage.getItemAsync('refreshToken');

            if (!accessToken && !refreshToken) {
                console.log('access token is not present')
                dispatch({ type: 'SET_USER', payload: null });
                replace('/(onboarding)/send-otp');
                return;
            }

            const isAccessTokenExpired = isTokenExpired(accessToken);
            if (accessToken && !isAccessTokenExpired) {
                const userData = jwtDecode<IUser>(accessToken);
                dispatch({
                    type: 'SET_USER',
                    payload: {
                        accessToken: userData.accessToken,
                        firstName: userData.firstName,
                        lastName: userData.lastName
                    }
                });
                replace('/(tabs)');
                return;
            }

            const isRefreshTokenExpired = isTokenExpired(refreshToken);
            if (refreshToken && !isRefreshTokenExpired) {
                const tokens = {
                    accessToken: '',
                    refreshToken: ''
                };
                await secureStorage.setItemAsync('accessToken', tokens.accessToken);
                await secureStorage.setItemAsync('refreshToken', tokens.refreshToken);

                const userData = jwtDecode<IUser>(tokens.accessToken);
                dispatch({
                    type: 'SET_USER',
                    payload: {
                        accessToken: userData.accessToken,
                        firstName: userData.firstName,
                        lastName: userData.lastName
                    }
                });
                replace('/(tabs)');
                return;
            }

            await logout();
        } catch (error) {
            console.error('Auth initialization error:', error);
            await logout();
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    };

    const logout = async () => {
        await secureStorage.deleteItemAsync('accessToken');
        await secureStorage.deleteItemAsync('refreshToken');
        dispatch({ type: 'LOGOUT' });
        dismissAll();
        push('/(onboarding)/send-otp');
    };

    useEffect(() => {
        initializeAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user: state.user, isLoading: state.isLoading, logout, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};