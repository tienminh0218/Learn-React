import React from "react";
import "./index.scss";

interface ItemList {
    name: string;
    age: number;
    note?: string;
}

const ItemList: React.FC<ItemList> = ({ name, age, note }) => {
    console.log(note);
    return (
        <>
            <p className="test">name: {name}</p>
            <p>age: {age}</p>
            <p>note: {note || "Nothing"}</p>

            <hr />
        </>
    );
};

export default ItemList;
