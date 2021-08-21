import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext, ContextType } from "./appContext";

const Modal = () => {
    const { closeModal, isModalOpen } = useGlobalContext() as ContextType;

    return (
        <div className={isModalOpen ? `modal-overlay show-modal` : `modal-overlay`}>
            <div className="modal-container">
                <h3>Modal Container</h3>
                <button className="close-modal-btn" onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
};

export default Modal;
