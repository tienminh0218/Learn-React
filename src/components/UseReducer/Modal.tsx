import { useEffect } from "react";

type Prop = {
    msg: string;
    closeModal: () => void;
};
const Modal: React.FC<Prop> = ({ msg, closeModal }) => {
    useEffect(() => {
        setTimeout(() => closeModal(), 3000);
    });

    return (
        <div
            style={{
                margin: "8px 2px",
            }}
        >
            {msg}
        </div>
    );
};

export default Modal;
