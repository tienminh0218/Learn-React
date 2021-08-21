import React, { useRef, useState } from "react";
import people from "./data";
import "./index.scss";
import { FcUpLeft, FcUpRight, FcBiotech } from "react-icons/fc";
import { getRandomNumber } from "../../utils/random";

type PeopleType = {
    name: string;
    image: string;
    job: string;
    text: string;
};

const Review = () => {
    const [index, setIndex] = useState<number>(0);
    const { name, image, job, text }: PeopleType = people[index];
    const lastIndex = useRef<number>(index);

    const checkIndex = (number: number): number => {
        if (number > people.length - 1) {
            return 0;
        }

        if (number < 0) {
            return people.length - 1;
        }

        return number;
    };

    const nextBtn = (): void => {
        setIndex((index) => {
            let newIndex = index + 1;

            lastIndex.current = checkIndex(newIndex);
            return lastIndex.current;
        });
    };

    const prevBtn = (): void => {
        setIndex((index) => {
            let newIndex = index - 1;
            lastIndex.current = checkIndex(newIndex);
            return lastIndex.current;
        });
    };

    const randomPeople = (): void => {
        let newIndex = getRandomNumber(people.length - 1, lastIndex.current);
        lastIndex.current = newIndex;
        setIndex(newIndex);
    };

    return (
        <div className="review">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{job}</p>
            <p>{text}</p>
            <button onClick={prevBtn}>
                <FcUpLeft />
            </button>
            <button onClick={nextBtn}>
                <FcUpRight />
            </button>
            <div>
                <button onClick={randomPeople}>
                    <FcBiotech />
                </button>
            </div>
        </div>
    );
};

export default Review;
