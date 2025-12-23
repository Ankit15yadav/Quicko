import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LocationBottomDrawerContextValue {
    openDrawer: boolean;
    open: () => void;
    close: () => void;
}
interface ILocationBottomDrawerProvider {
    children: ReactNode;
}

const LocationBottomDrawerContext =
    createContext<LocationBottomDrawerContextValue | undefined>(undefined);

export const useLocationBottomDrawer = () => {
    const context = useContext(LocationBottomDrawerContext);
    if (!context) {
        throw new Error(
            "useLocationBottomDrawer must be used within LocationBottomDrawerProvider"
        );
    }
    return context;
};

export const LocationBottomDrawerProvider = ({
    children,
}: ILocationBottomDrawerProvider) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        console.log("[LocationBottomDrawerProvider] mounted");

        return () => {
            console.log("[LocationBottomDrawerProvider] unmounted");
        };
    }, []);

    useEffect(() => {
        console.log(
            "[LocationBottomDrawerProvider] openDrawer changed:",
            openDrawer
        );
    }, [openDrawer]);

    const open = () => {
        console.log("[LocationBottomDrawer] OPEN triggered");
        setOpenDrawer(true);
    };

    const close = () => {
        console.log("[LocationBottomDrawer] CLOSE triggered");
        setOpenDrawer(false);
    };

    return (
        <LocationBottomDrawerContext.Provider
            value={{
                openDrawer,
                open,
                close,
            }}
        >
            {children}
        </LocationBottomDrawerContext.Provider>
    );
};
