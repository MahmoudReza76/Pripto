import { useEffect, useRef, useState } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import { notify } from "./toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "../../styles/signup.module.scss";
import { sign } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";

const SignUpInfo = () => {
  let navigate = useNavigate();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    referalCode: "",
    isAccepted: false,
  });
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handlerSign(e) {
    e.preventDefault();
    if ((!data.email || !data.password) && Object.keys(errors).length) {
      notify("Fill all fields");
      setTouch({
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      return;
    } else {
      notify("Your register successfull", "success");
    }
    setSubmitButtonDisabled(true);
    await sign(emailRef.current.value, passwordRef.current.value)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/profile");
      })
      .catch((err) => {
        notify("user or password already taken !", err);
      });
  }

  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touch]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  return (
    <div className={classes.signup}>
      <form className={classes.signup__form}>
        <h1>Sign Up</h1>
        <div className={classes.signup__formbox}>
          <label>email</label>
          <input
            ref={emailRef}
            className={
              errors.email && touch.email
                ? classes.signup__uncompleted
                : classes.signup__formInput
            }
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>
        <div className={classes.signup__formbox}>
          <label>password</label>
          <input
            ref={passwordRef}
            className={
              errors.password && touch.password
                ? classes.signup__uncompleted
                : classes.signup__formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>
        <div className={classes.signup__formbox}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmPassword && touch.confirmPassword
                ? classes.signup__uncompleted
                : classes.signup__formInput
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touch.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={classes.signup__formbox}>
          <label>Referal Code</label>
          <input
            className={classes.signup__formInput}
            type="text"
            name="referalCode"
            value={data.referalCode}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
        </div>
        <div className={classes.signup__checkbox}>
          <div className={classes.signup__checkboxmain}>
            <label>I accepted terms of privacy policy</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && touch.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={classes.signup__signbutton}>
          <button
            disabled={submitButtonDisabled}
            onClick={handlerSign}
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className={classes.signup__login}>
          <Link to="/mlogin">Login</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUpInfo;
