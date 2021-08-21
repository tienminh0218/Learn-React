import { useState, FormEventHandler, ChangeEventHandler } from "react";

type person = {
    firstName: string;
    email: string;
    age: string;
};

const MultipleInput = () => {
    const [person, setPerson] = useState<person>({ firstName: "", email: "", age: "" });
    const [people, setPeople] = useState<person[]>([]);

    const handlePersonChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const newInput = { ...person, [name]: value };
        setPerson(newInput);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (person.firstName && person.email && person.age) {
            console.log(person);
            const newPerson = [...people, person];
            setPeople(newPerson);
        }
    };

    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" onChange={handlePersonChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" onChange={handlePersonChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" name="age" onChange={handlePersonChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </article>

            {people.map((person, index) => {
                const { firstName, email, age } = person;
                return (
                    <div className="item" key={index}>
                        <h4>First Name: {firstName}</h4>
                        <p>Email: {email}</p>
                        <p>Age: {age}</p>
                    </div>
                );
            })}
        </>
    );
};

export default MultipleInput;
