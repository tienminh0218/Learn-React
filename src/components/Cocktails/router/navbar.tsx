import { AppBar, Box, Toolbar, Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
        <>
            <AppBar position="static" color="default">
                <Container>
                    <Toolbar>
                        <Box display="flex" justifyContent="space-between" width="100%">
                            <Box>
                                <Link to="/">
                                    <img
                                        style={{ width: "60%" }}
                                        src="https://raw.githubusercontent.com/john-smilga/react-projects/master/15-cocktails/final/src/logo.svg"
                                        alt=""
                                    />
                                </Link>
                            </Box>
                            <Box width="15%" display="flex" justifyContent="space-around">
                                <Link to="/">
                                    <Typography>Home</Typography>
                                </Link>
                                <Link to="/about">
                                    <Typography>ABout</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default NavBar;
