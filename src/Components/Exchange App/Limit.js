import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import classes from "../Profile/styles/tradeexchange.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Limit = (props) => {
  const BuySlider = styled(Slider)({
    color: "green",
    marginTop: "-8rem",
    width: "30rem",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "green",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  const SellSlider = styled(Slider)({
    color: "red",
    marginTop: "-8rem",
    width: "30rem",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "red",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  return (
    <div className={classes.tradeexchange}>
      <div className={classes.tradeexchange__limit}>
        <div>
          <FormControl sx={{ m: 1, width: "30rem" }} variant="outlined">
            <OutlinedInput
              sx={{ background: "#444", fontSize: "1.3rem" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontSize: "1.4rem",
                      fontWeight: "500",
                      borderRight: "1px solid #666",
                    }}
                  >
                    Price
                  </span>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontWeight: "500",
                      fontSize: "1.4rem",
                    }}
                  >
                    USDT
                  </span>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                style: { color: "white" },
              }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "30rem" }} variant="outlined">
            <OutlinedInput
              sx={{ background: "#444", fontSize: "1.3rem" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontSize: "1.4rem",
                      fontWeight: "500",
                      borderRight: "1px solid #666",
                    }}
                  >
                    Amount
                  </span>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontWeight: "500",
                      fontSize: "1.4rem",
                    }}
                  >
                    Coin
                  </span>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                style: { color: "white" },
              }}
            />
          </FormControl>
        </div>

        <div>
          <Box sx={{ m: 3 }} />
          <Typography gutterBottom>pretto.fr</Typography>
          <BuySlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "30rem" }} variant="outlined">
            <OutlinedInput
              sx={{ background: "#444", fontSize: "1.3rem" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontSize: "1.4rem",
                      fontWeight: "500",
                      borderRight: "1px solid #666",
                    }}
                  >
                    Value
                  </span>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontWeight: "500",
                      fontSize: "1.4rem",
                    }}
                  >
                    USDT
                  </span>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                style: { color: "white" },
              }}
            />
          </FormControl>
        </div>
        <Stack sx={{ marginTop: "2rem" }} spacing={2} direction="row">
          <Button
            sx={{
              width: "25rem",
              height: "4rem",
              background: "green",
              fontSize: "1.5rem",
              color: "white",
              fontWeight: "500",
              textTransform: "capitalize",

              "&:hover": {
                border: "1px solid green",
                color: "green",
              },
            }}
            variant="outlined"
            type="submit"
          >
            Buy Coin
          </Button>
        </Stack>
      </div>
      <div className={classes.tradeexchange__limit}>
        <div>
          <FormControl sx={{ m: 1, width: "30rem" }} variant="outlined">
            <OutlinedInput
              sx={{ background: "#444", fontSize: "1.3rem" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontSize: "1.4rem",
                      fontWeight: "500",
                      borderRight: "1px solid #666",
                    }}
                  >
                    Price
                  </span>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontWeight: "500",
                      fontSize: "1.4rem",
                    }}
                  >
                    USDT
                  </span>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                style: { color: "white" },
              }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "30rem" }} variant="outlined">
            <OutlinedInput
              sx={{ background: "#444", fontSize: "1.3rem" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontSize: "1.4rem",
                      fontWeight: "500",
                      borderRight: "1px solid #666",
                    }}
                  >
                    Amount
                  </span>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontWeight: "500",
                      fontSize: "1.4rem",
                    }}
                  >
                    Coin
                  </span>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                style: { color: "white" },
              }}
            />
          </FormControl>
        </div>
        <div>
          <Box sx={{ m: 3 }} />
          <Typography gutterBottom>pretto.fr</Typography>
          <SellSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "30rem" }} variant="outlined">
            <OutlinedInput
              sx={{ background: "#444", fontSize: "1.3rem" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontSize: "1.4rem",
                      fontWeight: "500",
                      borderRight: "1px solid #666",
                    }}
                  >
                    Value
                  </span>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <span
                    style={{
                      padding: "0 5px ",
                      color: "#999",
                      fontWeight: "500",
                      fontSize: "1.4rem",
                    }}
                  >
                    USDT
                  </span>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                style: { color: "white" },
              }}
            />
          </FormControl>
        </div>
        <Stack sx={{ marginTop: "2rem" }} spacing={2} direction="row">
          <Button
            sx={{
              width: "25rem",
              height: "4rem",
              background: "red",
              fontSize: "1.5rem",
              color: "white",
              fontWeight: "500",
              textTransform: "capitalize",
              "&:hover": {
                border: "1px solid red",
                color: "red",
              },
            }}
            variant="outlined"
            type="submit"
          >
            Sell Coin
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Limit;
