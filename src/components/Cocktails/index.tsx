import React from "react";
import RouterComp from "./router";
import { AppProvider } from "./context";

const Cocktails = () => {
    return (
        <AppProvider>
            <RouterComp />;
        </AppProvider>
    );
};

export default Cocktails;
