import React, { useReducer, useState } from "react";
import { data } from "./data";
import { Container, TextField, Button } from "@material-ui/core";
import "./index.css";
import Modal from "./Modal";

type PeopleType = { id: number; name: string };

type ReducerType = {
    people: PeopleType[];
    isModelOpen: boolean;
    modalContent: string;
};

const reducer = (state: ReducerType, action: any): ReducerType => {
    if (action.type === "ADD_ITEM") {
        return {
            ...state,
            people: [...state.people, action.payload],
            isModelOpen: true,
            modalContent: "Add item success",
        };
    }
    if (action.type === "EMPTY_VALUE") {
        return {
            ...state,
            isModelOpen: true,
            modalContent: "Empty value",
        };
    }

    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            people: [...state.people.filter((item) => item.id !== action.id)],
            isModelOpen: true,
            modalContent: "Remove success",
        };
    }

    if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            isModelOpen: false,
        };
    }

    throw new Error("No matching action type");
};

const defaultState: ReducerType = {
    people: [],
    isModelOpen: false,
    modalContent: "Modal",
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [name, setName] = useState<string>("");

    const handleOnSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (name) {
            const newItem = { id: new Date().getSeconds().toString(), name };
            dispatch({ type: "ADD_ITEM", payload: newItem });
            setName("");
        } else {
            dispatch({ type: "EMPTY_VALUE" });
        }
    };

    const removeItem = (id: number): void => {
        dispatch({ type: "REMOVE_ITEM", id });
    };

    const closeModal = (): void => {
        dispatch({ type: "CLOSE_MODAL" });
    };

    return (
        <>
            <Container className="reducer-container">
                <div>{state.isModelOpen && <Modal closeModal={closeModal} msg={state.modalContent} />}</div>
                <form onSubmit={handleOnSubmit}>
                    <TextField
                        variant="outlined"
                        label="Add people"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <Button type="submit" variant="outlined">
                        Submit
                    </Button>
                </form>
                <div>
                    <ul>
                        {state.people.map((item) => {
                            return (
                                <li key={item.id} onClick={() => removeItem(item.id)}>
                                    {item.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Container>
        </>
    );
};

export default UseReducer;
