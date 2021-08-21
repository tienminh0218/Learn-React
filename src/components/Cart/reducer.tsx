import { ReducerStateType } from "./context";

const reducer = (state: ReducerStateType, action: any): ReducerStateType => {
    switch (action.type) {
        case "CLEAR_ITEMS":
            return {
                ...state,
                cart: [],
            };

        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.id),
            };

        case "INCREASE_ITEM":
            const tempCart = state.cart.map((item) => {
                if (item.id === action.id) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
            return {
                ...state,
                cart: tempCart,
            };

        case "DECREASE_ITEM":
            return {
                ...state,
                cart: state.cart
                    .map((item) => {
                        if (item.id === action.id) {
                            return { ...item, amount: item.amount - 1 };
                        }
                        return item;
                    })
                    .filter((item) => item.amount > 0),
            };

        case "GET_TOTALS":
            const { amount, total } = state.cart.reduce(
                (initCart, itemCart) => {
                    initCart.amount += itemCart.amount;
                    initCart.total += itemCart.amount * itemCart.price;
                    return initCart;
                },
                {
                    amount: 0,
                    total: 0,
                }
            );
            return {
                ...state,
                amount,
                total,
            };

        case "LOADING_DATA":
            return { ...state, loading: true };
        case "DONE_LOADING":
            return { ...state, cart: action.payload, loading: false };
        default:
            return state;
    }
};

export default reducer;
