import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = (props) => {
    console.log('Rerendering Header...');
  const brandStyle = {
    borderRadius: "25px",
    background: "#0fe35a",
    color: "#dc3545",
    fontWeight: 700,
    fontFamily: "cursive",
    padding: "5px 20px",
  };
  const [searchText, setSearchText] = useState("");

  const submit = (e) => {
      e.preventDefault();
      props.handelSearch(searchText);
  }
  let location = useLocation();
  useEffect(() => {
    // console.log(location);
  }, [location])

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={brandStyle}>
            News~Parrot
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname ==='/'?'active' : '' }`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link {`nav-link ${location.pathname ==='/business'?'active' : '' }`}"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link {`nav-link ${location.pathname ==='/entertainment'?'active' : '' }`}"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link {`nav-link ${location.pathname ==='/general'?'active' : '' }`}"
                  aria-current="page"
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link {`nav-link ${location.pathname ==='/health'?'active' : '' }`}"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link {`nav-link ${location.pathname ==='/science'?'active' : '' }`}"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link {`nav-link ${location.pathname ==='/sports'?'active' : '' }`}"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link {`nav-link ${location.pathname ==='/technology'?'active' : '' }`}"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={submit}>
              <input
                className="form-control me-2"
                value={searchText}
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-light"
                type="submit" onClick={submit}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
