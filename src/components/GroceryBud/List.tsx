import { FaEdit, FaTrash } from "react-icons/fa";
import { ListType } from "./index";

type ListPropType = {
    items: ListType[];
    handleEditList: (id: string) => void;
    removeItem: (id: string) => void;
};

const List: React.FC<ListPropType> = ({ items, handleEditList, removeItem }) => {
    return (
        <div className="grocery-list">
            {items.map((item) => {
                const { id, title } = item;

                return (
                    <article key={id} className="grocery-item">
                        <p className="title">{title}</p>
                        <div className="btn-container">
                            <button onClick={() => handleEditList(id)} className="edit-btn" type="button">
                                <FaEdit />
                            </button>
                            <button onClick={() => removeItem(id)} className="delete-btn" type="button">
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default List;
