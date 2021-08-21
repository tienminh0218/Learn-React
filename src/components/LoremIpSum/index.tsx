import { useState, FormEventHandler } from "react";
import "./index.css";
import data from "./data";

const Lorem = () => {
    const [text, setText] = useState<string[]>([]);
    const [count, setCount] = useState<number>(0);

    const handleChangeCount: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        let amount: number = count;

        if (count <= 1) amount = 1;

        if (count >= data.length) amount = data.length;

        setText(data.slice(0, amount));
    };

    return (
        <section className="section-center">
            <h3>Lorem Ipsum</h3>
            <form className="lorem-form" onSubmit={handleChangeCount}>
                <label htmlFor="amount">Par</label>
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(parseInt(e.target.value))}
                    name="amount"
                    id="amount"
                />
                <button
                    style={{
                        margin: "0",
                    }}
                    type="submit"
                    className="btn"
                >
                    Generate
                </button>
            </form>

            <article className="lorem-text">
                {text && text.map((element, index) => <p key={index}> {element}</p>)}
            </article>
        </section>
    );
};

export default Lorem;
