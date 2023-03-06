import { React, useState } from "react";
import { Loading } from "../../components/Components";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext/auth-context.js";
import { useAuthFunctions } from "../../context/authContext/useAuthFunctions.js";
import "../../stylesheets/login-signup.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { authState, authDispatch } = useAuth();
  const { login } = useAuthFunctions();

  const loginHandler = (e) => {
    e.preventDefault();
    login(setLoading);
  };

  return (
    <div className="pattern-bg p-4">
      <div className="login-signup-form my-8 p-4 w-80p">
        <h3 className="text-md font-semibold login-signup-heading">Login</h3>
        <p>Enter your credentials to access your account.</p>
        <form className="mx-auto my-8" onSubmit={loginHandler}>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              className="input-field"
              type="email"
              id="email"
              name="email"
              placeholder="Jhondoe@gmail.com"
              required
              value={authState.email}
              onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
              onChange={(e) =>
                authDispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label className="password-label" htmlFor="password">
              Password
              <button
                className="eye-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((val) => !val);
                }}
              >
                {showPassword ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
            </label>
            <input
              className="input-field"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="********"
              required
              minLength="8"
              value={authState.password}
              onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
              onChange={(e) =>
                authDispatch({ type: "PASSWORD", payload: e.target.value })
              }
            />
          </div>
          <button className="btn btn-primary">Log In</button>
          <button
            className="btn btn-info"
            onClick={() => authDispatch({ type: "TEST-CREDENTIALS" })}
          >
            Test Login
          </button>
        </form>
        <p>
          Don't have an account ?{" "}
          <Link className="move-text" to="/signup">
            Sign-up
          </Link>
        </p>
      </div>
      {loading && <Loading />}
    </div>
  );
}

export { Login };
