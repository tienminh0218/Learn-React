import Typography from "@material-ui/core/Typography";
import { Box, Container, Button } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useGlobleContext, ContextType } from "./context";
import { useStyles } from "./use-style";

const Content = () => {
    const { state, clearItem, removeItemCart, increaseItemCart, decreaseItemCart } =
        useGlobleContext() as ContextType;
    const classes = useStyles();

    if (state.loading) {
        return (
            <>
                <Typography align="center" variant="h3">
                    Loading....
                </Typography>
            </>
        );
    }

    return (
        <>
            <Container>
                <Typography variant="h1" align="center">
                    Trả tiền cc
                </Typography>
            </Container>
            <br />
            <Container className={classes.gapGrid}>
                {state.cart.length > 0 &&
                    state.cart.map((item) => {
                        const { id, title, price, img, amount } = item;
                        return (
                            <div key={id} className="item-cart">
                                <div className="img-cart">
                                    <img src={img} alt="" />
                                </div>
                                <div className="infor-cart">
                                    <p>{title}</p>
                                    <p>{price}</p>
                                    <Button onClick={() => removeItemCart(id)} variant="outlined">
                                        Remove
                                    </Button>
                                </div>
                                <div className="func-cart">
                                    <KeyboardArrowUp
                                        onClick={() => increaseItemCart(id)}
                                        className={classes.iconBack}
                                    />
                                    {amount}
                                    <KeyboardArrowDown
                                        onClick={() => decreaseItemCart(id)}
                                        className={classes.iconBack}
                                    />
                                </div>
                            </div>
                        );
                    })}

                {state.cart.length === 0 && (
                    <>
                        <Typography variant="h6">No item</Typography>
                    </>
                )}

                <hr />

                <Box display="flex" justifyContent="space-between">
                    <Typography>Total Quantity: </Typography>
                    <Typography>$ {state.amount}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography>Total Price: </Typography>
                    <Typography>$ {state.total}</Typography>
                </Box>

                <Box textAlign="center">
                    <Button onClick={clearItem} variant="outlined" color="secondary">
                        Clear Item
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default Content;
