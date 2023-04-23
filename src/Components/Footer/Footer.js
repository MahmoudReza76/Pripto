import { Link } from "react-router-dom";
import FooterMobile from "./FooterMobile";
import image from "../../asset/Logo/Pripto-sel_1_.png";
import classes from "../../styles/footer.module.scss";
import { useState, useEffect } from "react";

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 650;
  return (
    <div className={classes.container}>
      {isMobile ? (
        <FooterMobile />
      ) : (
        <div>
          <div>
            <img src={image} alt="logo_footer" />
          </div>
          <div className={classes.container__footer}>
            <div className={classes.container__link}>
              <h1>Corporate</h1>
              <ul>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/join">Join us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/security">Security</Link>
                </li>
                <li>
                  <Link to="/referal">Referal</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1>Products</h1>
              <ul>
                <li>
                  <Link to="/spot">Spot Trading</Link>
                </li>
                <li>
                  <Link to="/margin">Margin Trading</Link>
                </li>
                <li>
                  <Link to="/convert">Convert</Link>
                </li>
                <li>
                  <Link to="/bot">Trading Bot</Link>
                </li>
                <li>
                  <Link to="/wallet">Pripto Wallet</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1>Service</h1>
              <ul>
                <li>
                  <Link to="/support">Support</Link>
                </li>
                <li>
                  <Link to="/fees">Fees</Link>
                </li>
                <li>
                  <Link to="/bug">Bug Bounty</Link>
                </li>
                <li>
                  <Link to="/subTicket">Submit Ticket</Link>
                </li>
                <li>
                  <Link to="/verfication">Identity Verfication</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1>Business</h1>
              <ul>
                <li>
                  <Link to="/labs">Pripto Labs</Link>
                </li>
                <li>
                  <Link to="/listing">Token Listing</Link>
                </li>
                <li>
                  <Link to="/spotLight">SpotLight Application</Link>
                </li>
                <li>
                  <Link to="/marketmaker">Market Maker</Link>
                </li>
                <li>
                  <Link to="/safeguard">Safeguard program</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1>Legal</h1>
              <ul>
                <li>
                  <Link to="/termsuse">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/priptoplus">Pripto Plus</Link>
                </li>
                <li>
                  <Link to="/treatment">Special Treatment</Link>
                </li>
                <li>
                  <Link to="/amlcft">AML & CFT</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.container__copyright}>
            <p>CopyRight © 2022 pripto.com. All Rights Reserved.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
