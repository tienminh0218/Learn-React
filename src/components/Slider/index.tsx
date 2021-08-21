import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import "./index.css";
import data from "./data";

type peopleType = {
    id: number;
    image: string;
    name: string;
    title: string;
    quote: string;
};

const Slider = () => {
    const [people, setPeople] = useState<peopleType[]>(data);
    const [index, setIndex] = useState<number>(0);
    const lengthPeople = people.length;

    useEffect(() => {
        const autoSilde = setInterval(
            () =>
                setIndex((prev) => {
                    if (prev === lengthPeople - 1) {
                        return 0;
                    }
                    return prev + 1;
                }),
            1000
        );

        return () => {
            clearInterval(autoSilde);
        };
    }, [lengthPeople]);

    return (
        <div className="App">
            <section className="section">
                <div className="title">
                    <h2>
                        <span>/</span> Silde
                    </h2>
                </div>
                <div className="section-center">
                    {people.map((person, personIndex, personArr) => {
                        const { id, name, title, image, quote } = person;
                        let position = "nextSlide";

                        if (index === personIndex) {
                            position = "activeSlide";
                        }

                        if (personIndex === index - 1 || (index === 0 && personIndex === personArr.length - 1)) {
                            position = "lastSlide";
                        }
                        return (
                            <article className={position} key={id}>
                                <img src={image} alt={name} className="person-img" />

                                <h4>{name}</h4>
                                <p className="title">{title}</p>
                                <p className="text">{quote}</p>
                                <FaQuoteRight className="icon" />
                            </article>
                        );
                    })}
                    <button
                        className="prev"
                        onClick={() =>
                            setIndex((prev) => {
                                if (prev === 0) {
                                    return lengthPeople - 1;
                                }
                                return prev - 1;
                            })
                        }
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        className="next"
                        onClick={() =>
                            setIndex((prev) => {
                                if (index === lengthPeople - 1) {
                                    return 0;
                                }
                                return prev + 1;
                            })
                        }
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Slider;
