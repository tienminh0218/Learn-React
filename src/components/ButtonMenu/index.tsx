import React from "react";
import PropTypes from "prop-types";

export type Prop = {
    category: string;
    handleFilter: (name: string) => void;
};

const ButtonMenu: React.FC<Prop> = ({ category, handleFilter }) => {
    return (
        <div>
            <h3 onClick={() => handleFilter(category)}>{category}</h3>
        </div>
    );
};

export default ButtonMenu;
