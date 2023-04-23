import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import classes from "../../styles/hostednumber.module.scss";
const HostedNumber = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        className={classes.hostednumber}
      >
        <div className={classes.hostednumber__items}>
          <h1>
            {counterOn && (
              <CountUp start={0} end={324} duration={2} delay={1} />
            )}
          </h1>
          <span className={classes.hostednumber__explanation}>Coins</span>
        </div>
        <div className={classes.hostednumber__items}>
          <h1>
            {counterOn && (
              <CountUp start={0} end={1040} duration={2} delay={1} />
            )}
          </h1>
          <span className={classes.hostednumber__explanation}>Markets</span>
        </div>
        <div className={classes.hostednumber__items}>
          <h1>
            {counterOn && (
              <CountUp start={0} end={521489} duration={2} delay={1} />
            )}
          </h1>
          <span className={classes.hostednumber__explanation}>
            24H Value(USD)
          </span>
        </div>
        <div className={classes.hostednumber__items}>
          <h1>
            {counterOn && (
              <CountUp start={0} end={15324232} duration={2} delay={1} />
            )}
          </h1>
          <span className={classes.hostednumber__explanation}>
            30-Day Value(USD)
          </span>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default HostedNumber;
