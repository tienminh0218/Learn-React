import { useState, FormEventHandler } from "react";
import Alert from "./Alert";
import List from "./List";
import "./index.css";
import { useEffect } from "react";

export type AlertType = {
    show: boolean;
    message: string;
    type: string;
};

export type ListType = {
    id: string;
    title: string;
};

const getListLocalStg = (): ListType[] | [] => {
    const list = localStorage.getItem("list");
    if (list) {
        return JSON.parse(list);
    }

    return [];
};

const Grocery = () => {
    const [name, setName] = useState<string>("");
    const [list, setList] = useState<ListType[]>(getListLocalStg());
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editID, setEditID] = useState<string>("");
    const [alert, setAlert] = useState<AlertType>({
        show: true,
        message: "",
        type: "",
    });

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    const handleEditList = (id: string): void => {
        const itemEditting = list.find((item) => item.id === id);

        setName(itemEditting!.title);
        setIsEditing(true);
        setEditID(id);
    };

    const removeAlert = (): void => {
        showAlert();
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (!name) {
            showAlert(true, "Name is not empty", "danger");
        } else if (name && isEditing) {
            const itemUpdate = {
                id: editID,
                title: name,
            };

            const newList = [...list.filter((item) => item.id !== editID), itemUpdate];

            setEditID("");
            setIsEditing(false);
            setList(newList);
            setName("");
            showAlert(true, "Update success", "success");
        } else {
            const newItem = { id: new Date().getSeconds().toString(), title: name };
            setList([...list, newItem]);
            setName("");
        }
    };

    const removeItem = (id: string): void => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
        showAlert(true, "Deleted", "danger");
    };

    const showAlert = (show = false, message = "", type = ""): void => {
        setAlert({ show, message, type });
    };

    const clearList = (): void => {
        showAlert(true, "Deleted Success", "success");
        setList([]);
    };

    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert.show && <Alert alert={alert} removeAlert={removeAlert} list={list} />}
                <h3>Grocery bub</h3>
                <div className="form-control">
                    <input
                        type="text"
                        className="grocery"
                        placeholder="name item"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditing ? "Edit" : "Submit"}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className="grocery-container">
                    <List items={list} handleEditList={handleEditList} removeItem={removeItem} />
                    <button onClick={clearList} className="clear-btn">
                        Clear Item
                    </button>
                </div>
            )}
        </section>
    );
};

export default Grocery;
