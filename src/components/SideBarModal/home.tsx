import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext, ContextType } from "./appContext";

const Home = () => {
    const { openSideBar, openModal } = useGlobalContext() as ContextType;

    return (
        <main>
            <button className="sidebar-toggle" onClick={openSideBar}>
                <FaBars />
            </button>
            <button className="btn" onClick={openModal}>
                Show modal
            </button>
        </main>
    );
};

export default Home;
