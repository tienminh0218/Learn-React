import React from "react";
import { useGlobalContext, ContextType } from "./useContext";

const Hero = () => {
    const { closeSubMenu } = useGlobalContext() as ContextType;

    return (
        <section className="hero" onMouseOver={closeSubMenu}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, placeat.</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eaque similique eveniet
                        sit quo repellat aliquid minima alias, quos enim.
                    </p>
                    <button className="btn">Start now</button>
                </article>
                <article className="hero-images">
                    <img
                        src="https://raw.githubusercontent.com/john-smilga/react-projects/master/13-stripe-submenus/final/src/images/phone.svg"
                        alt=""
                    />
                </article>
            </div>
        </section>
    );
};

export default Hero;
