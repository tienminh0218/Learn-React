import React, { FormEventHandler, MouseEvent } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext, ContextType } from "./useContext";
import {} from "./data";

const Navbar = () => {
    const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext() as ContextType;

    const displaySubMenu = (e: MouseEvent): void => {
        const event = e.target as HTMLElement;
        const page = event.textContent;
        const tempBtn = event.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom;
        openSubMenu(page as string, { center, bottom });
    };

    const handleCloseSubMenu = (e: MouseEvent): void => {
        const event = e.target as HTMLElement;
        if (!event.classList.contains("link-btn")) {
            closeSubMenu();
        }
    };

    return (
        <nav className="nav" onMouseOver={handleCloseSubMenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img
                        src="https://raw.githubusercontent.com/john-smilga/react-projects/master/13-stripe-submenus/final/src/images/logo.svg"
                        alt="logo"
                    />
                    <button className="btn toggle-btn" onClick={openSideBar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={displaySubMenu}>
                            Products
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubMenu}>
                            Developers
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubMenu}>
                            ABout
                        </button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
