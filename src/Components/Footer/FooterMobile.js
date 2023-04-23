import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import classes from "../../styles/footer.module.scss";
import image from "../../asset/Logo/Pripto-sel_1_.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1.5rem", color: "#43dfdf" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FooterMobile() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.container}>
      <div>
        <div>
          <img src={image} alt="logo_footer" />
        </div>
        <Accordion
          sx={{
            background: "rgb(0,0,0)",
            background:
              " radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(18,115,112,1) 100%)",
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              sx={{ color: "aqua", fontWeight: "500", fontSize: "1.8rem" }}
            >
              Corporate
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: "white",
                      fontWeight: "500",
                      fontSize: "3rem",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      About us
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      Join Us
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      Blog
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      Security
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      Referal
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            background: "rgb(0,0,0)",
            background:
              " radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(18,115,112,1) 100%)",
          }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              sx={{ color: "aqua", fontWeight: "500", fontSize: "1.8rem" }}
            >
              Products
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: "white",
                      fontWeight: "500",
                      fontSize: "3rem",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      Spot Trading
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      Margin Trading
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      Convert
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      Trading Bot
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "1.5rem",
                      }}
                    >
                      Pripto Wallet
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            background: "rgb(0,0,0)",
            background:
              " radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(18,115,112,1) 100%)",
          }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              sx={{ color: "aqua", fontWeight: "500", fontSize: "1.8rem" }}
            >
              Service
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionDetails>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: "3rem",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Support
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Fees
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Bug Bounty
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Submit Ticket
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Identity Verfication
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </AccordionDetails>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            background: "rgb(0,0,0)",
            background:
              " radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(18,115,112,1) 100%)",
          }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              sx={{ color: "aqua", fontWeight: "500", fontSize: "1.8rem" }}
            >
              Business
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionDetails>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: "3rem",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Pripto Labs
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Token Listing
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        SpotLight Application
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Market Maker
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Safeguard program
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </AccordionDetails>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            background: "rgb(0,0,0)",
            background:
              " radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(18,115,112,1) 100%)",
          }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              sx={{ color: "aqua", fontWeight: "500", fontSize: "1.8rem" }}
            >
              Legal
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionDetails>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: "3rem",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Terms of Use
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Privacy Policy
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Pripto Plus
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        Special Treatment
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: "400",
                          fontSize: "1.5rem",
                        }}
                      >
                        AML & CFT
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </AccordionDetails>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={classes.container__copyright}>
        <p>CopyRight © 2022 pripto.com. All Rights Reserved.</p>
      </div>
    </div>
  );
}
