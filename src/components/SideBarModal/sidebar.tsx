import React from "react";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext, ContextType } from "./appContext";

const SideBar = () => {
    const { isSideBarOpen, closeSideBar } = useGlobalContext() as ContextType;

    return (
        <aside className={isSideBarOpen ? `sidebar show-sidebar` : `sidebar `}>
            <div className="sidebar-header">
                <img
                    src="https://raw.githubusercontent.com/john-smilga/react-projects/181d6adf89c8c61c72a0b8c5c1a8ad6af15e6d19/11-navbar/final/src/logo.svg"
                    alt=""
                    className="logo"
                />
                <button className="close-btn" onClick={closeSideBar}>
                    <FaTimes />
                </button>
            </div>

            <ul className="links">
                {links.map((item) => {
                    const { id, url, text, icon } = item;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>

            <ul className="social-icons">
                {social.map((link) => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default SideBar;
