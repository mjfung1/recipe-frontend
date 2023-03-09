import { Login } from "./Login";
import { Register } from "./Register";

export const Auth = () => {
    return (
        <div className="auth">
            <Login />
            <Register />
        </div>
    )
};