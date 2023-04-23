import classes from "../styles/card.module.scss";
import NewspaperIcon from "@mui/icons-material/Newspaper";
const FirstCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__card}>
        <div className={classes.container__card_back}>
          <div>
            <h1>News</h1>
          </div>
          <button>View more</button>
        </div>
        <div className={classes.container__card_front}>
          <NewspaperIcon sx={{ fontSize: "5rem", color: "aqua" }} />
          <h1>Pripto News</h1>
          <p>Keeping you up to date with the latest news in crypto.</p>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
