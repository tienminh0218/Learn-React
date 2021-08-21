import React from "react";
import Hero from "./hero";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import SubMenu from "./submenu";
import "./style.css";

const Stripe = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Hero />
            <SubMenu />
        </>
    );
};

export default Stripe;
