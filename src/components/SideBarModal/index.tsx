import React from "react";
import Home from "./home";
import Modal from "./modal";
import SideBar from "./sidebar";
import "./index.css";

const SideBarModel = () => {
    return (
        <>
            <Home />
            <Modal />
            <SideBar />
        </>
    );
};

export default SideBarModel;
