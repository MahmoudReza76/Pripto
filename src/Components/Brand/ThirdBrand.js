import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import image from "../../asset/design.png";
import classes from "../../styles/Brands.module.scss";
const ThirdBrand = () => {
  return (
    <div data-aos="fade-left" data-aos-delay="150" className={classes.brand}>
      <div className={classes.brand__title}>
        <h1 className={classes.brand__title_h1}>
          Trusted Choice for Millions of Users
        </h1>
        <p className={classes.brand__title_p}>
          Dedicated local service centers in numerous regions and countries
          around the world, creating a unified blockchain ecosystem for a
          variety of business lines
        </p>
        <div className={classes.brand__trustUser}>
          <div>
            <span>
              <PersonIcon sx={{ fontSize: "5rem", color: "#444" }} />
            </span>
            <h4 className={classes.brand__trustUser_h4}>10+ million</h4>
            <p className={classes.brand__trustUser_p1}>Users' first choice</p>
          </div>
          <div>
            <span>
              <PublicIcon sx={{ fontSize: "5rem", color: "#444" }} />
              <h4 className={classes.brand__trustUser_h4}>200+</h4>
              <p className={classes.brand__trustUser_p1}>
                Regional service centers
              </p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <img src={image} alt="brand_image" className={classes.brand__image} />
      </div>
    </div>
  );
};

export default ThirdBrand;
