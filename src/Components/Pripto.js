import Navbar from "./Navbar";
import Hero from "./Hero";
import Landing from "./Landing";
import LabTabs from "./Tab/LabTabs";
import PriptoBrands from "./Brand/PriptoBrand";
import HelpUser from "../Help Users/HelpUser";
import HostedNumber from "./Hosted number/HostedNumber";
import Inspector from "./Inspector/Inspector";
import Footer from "./Footer/Footer";
import classes from "../styles/pripto.module.scss";
import { Fragment } from "react";

const Pripto = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Landing />
      <LabTabs />
      <HostedNumber />
      <PriptoBrands />
      <HelpUser />
      <Inspector />
      <Footer />
    </Fragment>
  );
};

export default Pripto;
