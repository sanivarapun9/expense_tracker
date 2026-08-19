import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../api/authApi";
import {loginSuccess} from "../redux/authSlice";

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] =
        useState({
            email: "",
            password: ""
        });

    const handleSubmit =
        async (e) => {
            e.preventDefault();
            const response = await loginUser(form);
            dispatch(
                loginSuccess(response.data.data.token)
            );
            navigate(
                "/dashboard"
            );

        };

    return (

        <form onSubmit={handleSubmit}>
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
                Login
            </button>

        </form>

    );

}