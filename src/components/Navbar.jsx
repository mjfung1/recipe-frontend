import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    localStorage.removeItem("userID");
    navigate("/auth");
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
            Grandma's Recipe
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
              <Link className="nav-link" to="/create-recipe">
                Create Recipe
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
                  <Link className="nav-link" to="/saved-recipes">
                    Saved Recipes
                  </Link>
                  <Link className="nav-link" onClick={logout}>
                    Logout
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
