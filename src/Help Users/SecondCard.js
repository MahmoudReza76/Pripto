import classes from "../styles/card.module.scss";
import ForumIcon from "@mui/icons-material/Forum";
const FirstCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__card}>
        <div className={classes.container__card_back}>
          <div>
            <h1>Pripto Global Community</h1>
          </div>
          <button>View more</button>
        </div>
        <div className={classes.container__card_front}>
          <ForumIcon sx={{ fontSize: "5rem", color: "aqua" }} />
          <h1>Community</h1>
          <p>
            The Pripto Global Community is home to millions of users from 200+
            countries, with support for 20+ languages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
