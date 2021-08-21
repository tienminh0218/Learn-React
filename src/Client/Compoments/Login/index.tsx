import React, { FC, FormEventHandler, useState } from "react";
import { TextField, FormControl, Typography, Button, makeStyles } from "@material-ui/core";
import "./index.css";

const Login: FC = () => {
    const [username, setUsername] = useState<string>("test123");
    const [password, setPassword] = useState<string>("TienMinh123");

    const loginForm: FormEventHandler = (e) => {
        e.preventDefault();
        console.log({ username, password });
        fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ username, password }),
        })
            // fetch("http://localhost:3001/api/users")
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            });
    };

    const getAuth = () => {
        fetch("http://localhost:3001/api/broker/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                district: "district ",
                city: "district ",
            }),
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            });
    };

    const logOut = () => {
        fetch("http://localhost:3001/api/auth/logout", { method: "POST", credentials: "include" })
            .then((response) => response.json())
            .then((data) => {
                console.log("data:", data);
            });
    };

    return (
        <div className="login-modal">
            <form onSubmit={loginForm}>
                <FormControl>
                    <Typography variant="h4">Login</Typography>
                    <TextField label="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <TextField label="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit" variant="outlined">
                        Login
                    </Button>
                </FormControl>
            </form>

            <Button variant="outlined" onClick={getAuth}>
                Get user
            </Button>
            <Button variant="outlined" onClick={logOut}>
                Logout
            </Button>
        </div>
    );
};

export default Login;
