// In this file the main provider will be there that contains all context of the file and we can wrap childrens inside that provider and wrap the main layout in this provider

import { LocationProvider } from "@src/contexts/location";
import { PropsWithChildren } from "react";

// This will make the code more structured
interface IProvider extends PropsWithChildren {

}

export default function Provider({ children }: IProvider) {
    return (
        <LocationProvider>
            {children}
        </LocationProvider>
    )
}
