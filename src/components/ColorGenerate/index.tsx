import { useState, FormEventHandler } from "react";
import "./index.css";

const ColorGenerate = () => {
    const [color, setColor] = useState<string>("");
    const [list, setList] = useState<string[]>([]);
    const [err, setErr] = useState<boolean>(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        try {
        } catch (error) {}
    };

    return (
        <>
            <section className="container">
                <h3>Color Generate</h3>
                <form onSubmit={handleSubmit}></form>
                <input
                    type="text"
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                />
                <button style={{ margin: "0 10px" }} type="submit" className="btn">
                    Generate
                </button>
            </section>
            <section className="colors">
                <h4>Color Generated here</h4>
            </section>
        </>
    );
};

export default ColorGenerate;
