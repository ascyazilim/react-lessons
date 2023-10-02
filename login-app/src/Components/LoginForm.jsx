import { useRef, useEffect, useContext } from "react";
import classes from "./LoginForm.module.scss";
import usernameIcon from "../assets/akar-icons_person.svg";
import passwordIcon from "../assets/carbon_password.svg";
import ValidUserContext from "../authCheck";

let isInitial = true;

function LoginForm() {
  const validUserContext = useContext(ValidUserContext);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    if (isInitial) {
      validUserContext.localAuthCheck();
      isInitial = false;
    }
  }, [validUserContext]);

  const submitHandler = (event) => {
    event.preventDefault();
    validUserContext.apiAuthCheck(
      usernameInputRef.current.value,
      passwordInputRef.current.value
    );
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <img
          className={classes.icon}
          src={usernameIcon}
          alt="Username icon"
          htmlFor="username"
        ></img>
        <input
          className={classes.input}
          type="text"
          id="username"
          name="username"
          autoComplete="on"
          placeholder="Username"
          ref={usernameInputRef}
          required={!validUserContext.isLoggedIn}
        ></input>
      </div>

      <div>
        <img
          className={classes.icon}
          src={passwordIcon}
          alt="Password icon"
          htmlFor="password"
        ></img>
        <input
          className={classes.input}
          type="password"
          id="password"
          name="password"
          autoComplete="off"
          placeholder="Password"
          ref={passwordInputRef}
          required={!validUserContext.isLoggedIn}
        ></input>
      </div>
      <button
        className={classes.loginBtn}
        disabled={validUserContext.isLoggedIn}
      >
        {validUserContext.isLoggedIn ? "Already logged in" : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;
