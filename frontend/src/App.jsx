import {
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ExpensePage from "./pages/ExpensePage";
import BudgetPage from "./pages/BudgetPage";

import PrivateRoute
  from "./routes/PrivateRoute";

import MainLayout
  from "../src/components/layout/MainLayout";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/expenses"
        element={
          <PrivateRoute>
            <MainLayout>
              <ExpensePage />
            </MainLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/budgets"
        element={
          <PrivateRoute>
            <MainLayout>
              <BudgetPage />
            </MainLayout>
          </PrivateRoute>
        }
      />

    </Routes>

  );

}

export default App;