import { social } from "./data";
import { LinkType } from "./index";

const SideBar: React.FC<LinkType> = ({ url, text }) => {
    return (
        <>
            <li>
                <a href={url}>{text}</a>
            </li>
        </>
    );
};

export default SideBar;
