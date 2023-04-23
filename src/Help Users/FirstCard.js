import classes from "../styles/card.module.scss";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const FirstCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__card}>
        <div className={classes.container__card_back}>
          <div>
            <h1>Pripto Help Center</h1>
          </div>
          <button>View more</button>
        </div>
        <div className={classes.container__card_front}>
          <SupportAgentIcon sx={{ fontSize: "5rem", color: "aqua" }} />
          <h1>Customer Service</h1>
          <p>
            Contact Pripto customer support with your questions at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
