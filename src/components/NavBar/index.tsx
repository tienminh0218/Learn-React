import { useState, useEffect, MutableRefObject } from "react";
import { FaBars } from "react-icons/fa";
import "./index.css";
import { links, social } from "./data";
import SideBar from "./SideBar";
import { useRef } from "react";

export type LinkType = {
    id?: number;
    url: string;
    text: string;
};

export type SocialType = {
    id: number;
    url: string;
    icon: JSX.Element;
};

const NavBar = () => {
    const [link, setLink] = useState<LinkType[]>(links);
    const [socials, setSocials] = useState<SocialType[]>(social);
    const [showNav, setShowNav] = useState<boolean>(true);
    const containerLinks = useRef(null) as MutableRefObject<HTMLDivElement | null>;
    const linkRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const getLinkHTML = linkRef.current?.getBoundingClientRect().height;

        if (showNav) {
            containerLinks.current!.style.height = `${getLinkHTML}px`;
        } else {
            containerLinks.current!.style.height = `0px`;
        }
    }, [showNav]);

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img
                        src="https://raw.githubusercontent.com/john-smilga/react-projects/181d6adf89c8c61c72a0b8c5c1a8ad6af15e6d19/11-navbar/final/src/logo.svg"
                        alt="logo"
                    />
                    <button className="nav-toggle" onClick={() => setShowNav(!showNav)}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-container show-container" ref={containerLinks}>
                    <ul className="links" ref={linkRef}>
                        {link.map((item) => (
                            <SideBar key={item.id} url={item.url} text={item.text} />
                        ))}
                    </ul>
                </div>
                <ul className="social-icons">
                    {socials.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={item.url}>{item.icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
