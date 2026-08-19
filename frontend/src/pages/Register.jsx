import { useState } from "react";

import {registerUser} from "../api/authApi";

export default function Register() {
    const [form, setForm] =
        useState({
            fullName: "",
            email: "",
            password: ""

        });

    const submit = async (e) => {
            e.preventDefault();
            await registerUser(form);
            alert("Registered");
        };

    return (
        <form onSubmit={submit}>
            <input
                placeholder="Name"
                onChange={(e) => setForm({
                    ...form,
                    fullName: e.target.value
                })}
            />

            <input
                placeholder="Email"
                onChange={(e) => setForm({
                    ...form,
                    email: e.target.value
                })}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setForm({
                    ...form,
                    password: e.target.value
                })}
            />

            <button>
                Register
            </button>

        </form>

    );

}