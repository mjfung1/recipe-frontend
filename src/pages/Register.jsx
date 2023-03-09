import { useState } from "react";
import { Form } from "../components/Form";
import axios from "axios";

export const Register = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
 
        try {
            await axios.post(
              "https://recipe-app-vv5z.onrender.com/auth/register",
              {
                username,
                password,
              }
            );
            alert("Registration completed. Now login")
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