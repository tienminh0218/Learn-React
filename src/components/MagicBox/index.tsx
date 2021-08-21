import useMagicColor from "../../utils/useMagicColor";

const MaginBox: React.FC = () => {
    const color = useMagicColor();
    return (
        <div>
            <p
                className="magic-box"
                style={{
                    backgroundColor: color,
                    display: "inline-block",
                    width: "200px",
                    height: "200px",
                    transition: "all 0.3s ease 0s",
                }}
            ></p>
        </div>
    );
};

export default MaginBox;
