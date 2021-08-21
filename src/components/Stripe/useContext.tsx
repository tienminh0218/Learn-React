import React, { ReactChild } from "react";
import { useState } from "react";
import { useContext } from "react";
import sublinks from "./data";

type Prop = {
    children: ReactChild;
};

type LocationType = {
    center: number;
    bottom: number;
};

type SublinkType = {
    page: string;
    links: {
        label: string;
        icon: JSX.Element;
        url: string;
    }[];
};

export type ContextType = {
    isSubMenuOpen: boolean;
    isSideBarOpen: boolean;
    location: LocationType;
    subLinks: SublinkType;
    openSideBar: () => void;
    closeSidebar: () => void;
    openSubMenu: (text: string, location: LocationType) => void;
    closeSubMenu: () => void;
};

const AppContext = React.createContext<ContextType | null>(null);

export const AppProvider: React.FC<Prop> = ({ children }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
    const [location, setLocation] = useState<LocationType>({} as LocationType);
    const [subLinks, setSubLinks] = useState<SublinkType>({} as SublinkType);

    const openSideBar = (): void => {
        setIsSideBarOpen(true);
    };

    const closeSidebar = (): void => {
        setIsSideBarOpen(false);
    };

    const openSubMenu = (text: string, location: LocationType): void => {
        const sublink = sublinks.find((sub) => {
            console.log(sub);
            return sub.page === text;
        });

        setSubLinks(sublink!);
        setLocation(location);
        setIsSubMenuOpen(true);
    };

    const closeSubMenu = (): void => {
        setIsSubMenuOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSubMenuOpen,
                isSideBarOpen,
                location,
                subLinks,
                openSideBar,
                closeSidebar,
                openSubMenu,
                closeSubMenu,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
