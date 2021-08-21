import { useEffect } from "react";
import { AlertType, ListType } from "./index";

type AlertPropType = {
    alert: AlertType;
    list: ListType[];
    removeAlert: () => void;
};

const Alert: React.FC<AlertPropType> = ({ alert, removeAlert, list }) => {
    const { type, message } = alert;

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [list]);

    return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
