import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Container } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStyles } from "./use-style";
import { ContextType, useGlobleContext } from "./context";

const Navbar = () => {
    const classes = useStyles();
    const { state } = useGlobleContext() as ContextType;

    return (
        <>
            <AppBar position="static" className={classes.mrginBottom}>
                <Toolbar className={classes.toolbarNav}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Cart
                    </Typography>
                    <Box position="relative">
                        <ShoppingCartIcon />
                        <p className="cart-quantity">{state.amount}</p>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
