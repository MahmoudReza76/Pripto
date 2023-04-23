import classes from "../styles/HelpUser.module.scss";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
const HelpUser = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="200" className={classes.container}>
      <h1 className={classes.container__h1}>Pripto by your side</h1>
      <div className={classes.container__cards}>
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
    </div>
  );
};

export default HelpUser;
