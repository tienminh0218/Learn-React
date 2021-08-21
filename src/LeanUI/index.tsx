import React from "react";
import {
    Box,
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    Container,
    Button,
    Grid,
    makeStyles,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";

const useStyle = makeStyles({
    colorStye: {
        color: red[500],
    },
});

const LearnUI = () => {
    const classes = useStyle();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6" className={classes.colorStye}>
                        Photo camera
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo App
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit totam
                            deleniti ratione vero consequatur quibusdam corrupti possimus, libero delectus.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See My photo
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="secondary">
                                        secondary acion
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    );
};

export default LearnUI;
