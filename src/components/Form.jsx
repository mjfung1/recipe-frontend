import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Form = ({
  username,
  setUserName,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();
  const loginDemoUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://recipe-app-vv5z.onrender.com/auth/login",
        {
          username: "demoUser",
          password: "demoUser123",
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
    <div className="registration-form w-100">
      <h2 className="text-center">{label}</h2>
      <form onSubmit={onSubmit} autoComplete="none">
        <div className="form-icon">
          <span>
            <img
              src="/favicon/grandma-512x512.png"
              alt="Logo"
              className="d-inline-block align-text-top"
            ></img>
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="username" className="text-white">
            Username:{" "}
          </label>
          <input
            type="text"
            className="form-control item"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-white">
            Password:{" "}
          </label>
          <input
            type="password"
            className="form-control item"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-block create-account">
            {label}
          </button>
          {label === "Login" && (
            <button
              type="button"
              className="btn btn-block create-account"
              onClick={loginDemoUser}
            >
              Demo User
            </button>
          )}
        </div>
      </form>
      <div className="social-media">
        <h5>Sign up with social media</h5>
        <div className="social-icons">
          <a href="#" className="disabled-link">
            <i className="icon-social-facebook" title="Facebook"></i>
          </a>
          <a href="#" className="disabled-link">
            <i className="icon-social-google" title="Google"></i>
          </a>
          <a href="#" className="disabled-link">
            <i className="icon-social-twitter" title="Twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
