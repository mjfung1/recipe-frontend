import { useState } from "react";
import { Form } from "../components/Form";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://recipe-app-vv5z.onrender.com/auth/login",
        {
          username,
          password,
        }
      );

      setCookies("access_token", response.data.token);
      localStorage.setItem("userID", response.data.userID);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <Form
      username={username}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}
    />
  );
};
