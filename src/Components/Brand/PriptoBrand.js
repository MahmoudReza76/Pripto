import classes from "../../styles/PriptoBrands.module.scss";
import FirstBrand from "./FirstBrand";
import SecondBrand from "./SecondBrand";
import ThirdBrand from "./ThirdBrand";
const PriptoBrands = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__brands}>
        <FirstBrand />
        <SecondBrand />
        <ThirdBrand />
      </div>
    </div>
  );
};

export default PriptoBrands;
