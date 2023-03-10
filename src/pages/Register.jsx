import { useState } from "react";
import { Form } from "../components/Form";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [_, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const response = await axios.post(
              "https://recipe-app-vv5z.onrender.com/auth/register",
              {
                username,
                password,
              }
            );

            if (response.data.msg) {
                navigate("/auth/register");
                alert("Username taken.  Try a different a different one");
                return;
            }
            setCookies("access_token", response.data.token);
            localStorage.setItem("userID", response.data.userID);
            navigate("/");
            alert("user created go login")

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Form 
            username={username} 
            setUserName={setUserName} 
            password={password} 
            setPassword={setPassword} 
            label="Register" 
            onSubmit={onSubmit}    
            />
    )
};