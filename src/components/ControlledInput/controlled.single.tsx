import { useState, FormEvent } from "react";

type people = {
    firstName: string;
    email: string;
};

const ControlledInput = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [people, setPeople] = useState<people[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email && firstName) {
            const newPeople = [...people, { firstName, email }];
            setPeople(newPeople);
            setEmail("");
            setFirstName("");
        }
    };

    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </article>

            {people.map((person, index) => {
                const { firstName, email } = person;
                return (
                    <div className="item" key={index}>
                        <h4>First Name: {firstName}</h4>
                        <p>Email: {email}</p>
                    </div>
                );
            })}
        </>
    );
};

export default ControlledInput;
