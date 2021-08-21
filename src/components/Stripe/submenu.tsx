import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { ContextType, useGlobalContext } from "./useContext";

const SubMenu = () => {
    const { isSubMenuOpen, location, subLinks } = useGlobalContext() as ContextType;
    const containerRef = useRef<HTMLElement>(null);
    const { links, page } = subLinks;

    useEffect(() => {
        const element = containerRef.current;
        element!.style.left = `${location.center}px`;
        element!.style.top = `${location.bottom}px`;
    }, [location]);

    return (
        <aside className={`${isSubMenuOpen ? "submenu show" : "submenu"}`} ref={containerRef}>
            <h4>{page}</h4>
            <div className={`${"submenu-center col-2"}`}>
                {links &&
                    links.map((link, index) => {
                        const { label, icon, url } = link;
                        return (
                            <a href={url}>
                                {icon}
                                {label}
                            </a>
                        );
                    })}
            </div>
        </aside>
    );
};

export default SubMenu;
