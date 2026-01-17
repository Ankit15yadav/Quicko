// In this file the main provider will be there that contains all context of the file and we can wrap childrens inside that provider and wrap the main layout in this provider

import { AuthProvider } from "@src/contexts/auth";
import { LocationProvider } from "@src/contexts/location";
import { StorageProvider } from "@src/contexts/storage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";

// This will make the code more structured
interface IProvider extends PropsWithChildren {
}

export default function Provider({ children }: IProvider) {

    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <KeyboardProvider>
                <AuthProvider>
                    <StorageProvider>
                        <LocationProvider>
                            {children}
                        </LocationProvider>
                    </StorageProvider>
                </AuthProvider>
            </KeyboardProvider>
        </QueryClientProvider>
    )
}
