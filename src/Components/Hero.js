import classes from "../styles/Hero.module.scss";
import image from "../asset/bitcoindown03_generated.png";
import { useAuth } from "./Forms/Firebase";
import { Link } from "react-router-dom";
const Hero = () => {
  const currentLogin = useAuth();
  return (
    <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
      {currentLogin ? (
        <div className={classes.hero}>
          <div className={classes.hero__text}>
            <h1>Buy,Trade and Hold 300+ cryptocurencis on Pripto</h1>
            <form action="#" className={classes.hero__form}>
              <button type="submit">
                <Link
                  className="text-2xl text-gray-100 font-medium "
                  to="/exchange"
                >
                  Trade Now
                </Link>
              </button>
            </form>
          </div>
          <div className={classes.hero__img}>
            <img src={image} alt="hero_image" />
          </div>
        </div>
      ) : (
        <div className={classes.hero}>
          <div className={classes.hero__text}>
            <h1>Buy,Trade and Hold 300+ cryptocurencis on Pripto</h1>
            <form action="#" className={classes.hero__form}>
              <label for="email"></label>
              <input type="email" placeholder="Email account" />
              <button type="submit">
                <p>Register Now</p>
              </button>
            </form>
          </div>
          <div className={classes.hero__img}>
            <img src={image} alt="hero_image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
