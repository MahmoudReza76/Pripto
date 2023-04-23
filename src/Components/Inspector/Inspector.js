import classes from "../../styles/Inspector.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../Forms/Firebase";
const Inspector = () => {
  const currentLogin = useAuth();
  return (
    <div data-aos="zoom-in-up" data-aos-delay="200">
      {currentLogin ? (
        <div className={classes.container}>
          <h1>Start Your Crypto Journey Now!</h1>
          <p>With the Pripto app and website, trading has never been easier.</p>
          <button>
            <Link to="/exchange">Trade Now</Link>
          </button>
        </div>
      ) : (
        <div className={classes.container}>
          <h1>Start Your Crypto Journey Now!</h1>
          <p>With the Pripto app and website, trading has never been easier.</p>
          <button>
            <Link to="sign">Register Now</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Inspector;
