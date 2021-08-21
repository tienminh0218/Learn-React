import { Box, Typography } from "@material-ui/core";
import React from "react";
import "./index.css";

const About = () => {
    return (
        <>
            <Box marginY={10} textAlign="center">
                <Typography className="about" variant="h3">
                    About
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque vero laudantium enim!
                    Architecto facilis rerum sequi! Architecto cum repellendus consectetur amet neque magni animi
                    debitis ullam, atque hic officiis, impedit consequatur, magnam iure quod quisquam reprehenderit
                    adipisci eligendi ea? Cupiditate facilis ducimus optio, ab a cum doloribus earum aliquid.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil ex, adipisci est
                    molestias reiciendis. Quo quaerat ipsa quidem nam, maxime soluta cumque neque in esse
                    quibusdam? Molestiae adipisci incidunt corporis excepturi, quam illum tempora est expedita
                    aperiam, non in maxime hic sequi placeat libero eaque facere quis optio vel?
                </Typography>
            </Box>
        </>
    );
};

export default About;
