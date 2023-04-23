import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import { notify } from "./toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "../../styles/moblogin.module.scss";
import { log } from "./Firebase";
import CloseIcon from "@mui/icons-material/Close";

const MobLogin = (props) => {
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  async function loginHandler(e) {
    e.preventDefault();
    if (!data.email || !data.password) {
      notify("Fill all fields");
      setTouch({
        email: true,
        password: true,
      });
      return;
    }

    setSubmitButtonDisabled(true);
    await log(emailRef.current.value, passwordRef.current.value)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/profile");
      })
      .catch((err) => {
        notify("user or password not correct!", err);
      });
  }

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touch]);

  return (
    <div className={classes.login} ref={props.menuRef}>
      <form className={classes.login__form}>
        <h1>LogIn to Pripto</h1>
        <div className={classes.login__formbox}>
          <label>email</label>
          <input
            ref={emailRef}
            className={
              errors.email && touch.email
                ? classes.login__uncompleted
                : classes.login__formInput
            }
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>
        <div className={classes.login__formbox}>
          <label>password</label>
          <input
            ref={passwordRef}
            className={
              errors.password && touch.password
                ? classes.login__uncompleted
                : classes.login__formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>
        <div className={classes.login__signbutton}>
          <button
            disabled={submitButtonDisabled}
            onClick={loginHandler}
            type="submit"
          >
            Login
          </button>
        </div>
        <div className={classes.login__login}>
          <Link to="/sign">Sign Up</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default MobLogin;
