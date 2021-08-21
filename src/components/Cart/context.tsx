import { useReducer } from "react";
import { createContext, ReactChild, useContext } from "react";
import reducer from "./reducer";
import { useEffect } from "react";

const url = "https://course-api.com/react-useReducer-cart-project";

type Prop = {
    children: ReactChild;
};

type CartType = {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number;
};

export type ReducerStateType = {
    loading: boolean;
    cart: CartType[];
    total: number;
    amount: number;
};

export type ContextType = {
    state: ReducerStateType;
    clearItem: () => void;
    removeItemCart: (id: number) => void;
    increaseItemCart: (id: number) => void;
    decreaseItemCart: (id: number) => void;
};

const AppContext = createContext<ContextType | null>(null);

const initState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
};

export const AppProvider: React.FC<Prop> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        dispatch({ type: "GET_TOTALS" });
    }, [state.cart]);

    useEffect(() => {
        fetchingData();
    }, []);

    const fetchingData = async (): Promise<void> => {
        dispatch({ type: "LOADING_DATA" });
        const data = await (await fetch(url)).json();
        dispatch({ type: "DONE_LOADING", payload: data });
    };
    const clearItem = (): void => {
        dispatch({ type: "CLEAR_ITEMS" });
    };

    const removeItemCart = (id: number): void => {
        dispatch({ type: "REMOVE_ITEM", id });
    };

    const increaseItemCart = (id: number): void => {
        dispatch({ type: "INCREASE_ITEM", id });
    };

    const decreaseItemCart = (id: number): void => {
        dispatch({ type: "DECREASE_ITEM", id });
    };

    return (
        <AppContext.Provider value={{ state, clearItem, removeItemCart, increaseItemCart, decreaseItemCart }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobleContext = () => {
    return useContext(AppContext);
};
