import { Link, redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand mr-auto" href="#">
            <img
              src="/favicon/grandma-512x512.png"
              alt="Logo"
              className="d-inline-block align-text-top"
            ></img>
            Gee-mas
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              {!cookies.access_token ? (
                <>
                  <Link className="nav-link" to="/auth/login">
                    Login
                  </Link>
                  <Link className="nav-link" to="/auth/register">
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-link text-nowrap" to="/create-recipe">
                    Create Recipe
                  </Link>
                  <Link className="nav-link text-nowrap" to="/saved-recipes">
                    Saved Recipes
                  </Link>
                  <button
                    className="btn logout-btn"
                    
                    onClick={logout}
                  >
                    Logout
                  </button>
                </>
              )}
              <div className="personal-links ml-auto position-absolute end-0">
                <Link to="https://github.com/mjfung1" target="_blank">
                  <i className="devicon-github-original"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/miguel-fung-5084691b5/"
                  target="_blank"
                >
                  <i className="devicon-linkedin-plain"></i>
                </Link>
                <Link
                  to="https://github.com/mjfung1/recipe-frontend"
                  target="_blank"
                >
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
