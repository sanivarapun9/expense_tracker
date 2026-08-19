import { Link } from "react-router-dom";

export default function Navbar() {
    const logout = () => {
        localStorage.removeItem("token");
        window.location = "/";
    };

    return (
        <nav>
            <Link to="/dashboard">
                Dashboard
            </Link>

            <Link to="/expenses">
                Expenses
            </Link>

            <Link to="/budgets">
                Budgets
            </Link>

            <button onClick={logout}>
                Logout
            </button>

        </nav>

    );

}