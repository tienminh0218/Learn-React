import React, { ReactChild, useContext } from "react";
import { useState } from "react";

type Prop = {
    children: ReactChild;
};

export type ContextType = {
    isSideBarOpen: boolean;
    isModalOpen: boolean;
    openSideBar: () => void;
    closeSideBar: () => void;
    openModal: () => void;
    closeModal: () => void;
};

export const AppContext = React.createContext<ContextType | null>(null);

const AppProvide: React.FC<Prop> = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openSideBar = (): void => {
        setIsSideBarOpen(true);
    };

    const closeSideBar = (): void => {
        setIsSideBarOpen(false);
    };

    const openModal = (): void => {
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSideBarOpen,
                isModalOpen,
                openSideBar,
                closeSideBar,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

/// csustom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default AppProvide;
