import { useEffect, useRef, useState } from 'react';

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}
// Custom hook for fetching user data
// This is shared across ALL platforms - no duplication needed
export const useUserData = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const fetchUserRef = useRef<boolean>(false)

    useEffect(() => {
        if (fetchUserRef.current === false) {
            fetchUser();
            fetchUserRef.current = true;
        }
    }, [fetchUserRef]);

    const fetchUser = async () => {
        try {
            setLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock user data
            setUser({
                id: '1',
                name: 'John Doe',
                email: 'john@example.com',
                avatar: '👤',
            });
            setError(null);
        } catch (err) {
            setError('Failed to load user data');
        } finally {
            setLoading(false);
        }
    };

    const refreshUser = () => {
        fetchUser();
    };

    return { user, loading, error, refreshUser };
};