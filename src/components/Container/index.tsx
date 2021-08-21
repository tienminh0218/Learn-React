import React from "react";

interface IList {
    people: {
        name: string;
        age: number;
        note?: string;
    }[];
}

const List: React.FC<IList> = (props) => {
    return (
        <div>
            {props.people.map((p) => (
                <h1>hello {p.name}</h1>
            ))}
        </div>
    );
};

export default List;
