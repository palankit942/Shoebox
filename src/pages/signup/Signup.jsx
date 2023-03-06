import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext/auth-context.js";
import { useAuthFunctions } from "../../context/authContext/useAuthFunctions.js";
import { Loading } from "../../components/Components";
import "../../stylesheets/login-signup.css";

function Signup() {
  const confirm_password = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const { authState, authDispatch } = useAuth();
  const { signup } = useAuthFunctions();

  const signupHandler = (e) => {
    e.preventDefault();
    if (confirm_password.current.value !== authState.password) {
      setErrorMsg(true);
    } else {
      signup(setLoading);
    }
  };

  return (
    <div className="pattern-bg p-4">
      <div className="login-signup-form my-4 p-4 w-80p border-5">
        <h3 className="text-md font-semibold login-signup-heading">Sign Up</h3>
        <form onSubmit={signupHandler} className="mx-auto my-8">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              className="input-field"
              type="text"
              id="name"
              name="name"
              placeholder="Jhon Doe"
              required
              minLength="3"
              value={authState.name}
              onFocus={() => authDispatch({ type: "ERROR", payload: "" })}
              onChange={(e) =>
                authDispatch({ type: "NAME", payload: e.target.value })
              }
            />
          </div>
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
          <div className="input-container">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              className="input-field"
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="********"
              ref={confirm_password}
              onFocus={() => setErrorMsg(false)}
            />
            {errorMsg && (
              <p className="error-text text-md">
                Confirm Password doesn't match with the Password.
              </p>
            )}
          </div>
          <button className="btn btn-primary">Sign Up</button>
        </form>
        <p>
          Already have an account ?{" "}
          <Link className="move-text" to="/login">
            Login
          </Link>
        </p>
      </div>
      {loading && <Loading />}
    </div>
  );
}

export { Signup };
