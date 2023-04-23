import axios from "axios";

//Slider
const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false";

const getCoin = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export { getCoin };

//trendng

const TRENDING_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=fantom%2Cdogecoin%2Ccosmos%2Capecoin%2Cbitcoin&order=market_cap_desc&per_page=5&page=1&sparkline=true";
const trendingCoin = async () => {
  const response = await axios.get(TRENDING_URL);
  return response.data;
};
export { trendingCoin };

//New Coins
const NEWCOINS_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=coti%2charmony%2Ckadena%2Castar%2Caragon&order=market_cap_desc&per_page=5&page=1&sparkline=true";
const newCoins = async () => {
  const response = await axios.get(NEWCOINS_URL);
  return response.data;
};
export { newCoins };

//Top Volume
const TOPVOLUME_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=5&page=1&sparkline=true";
const topVolume = async () => {
  const response = await axios.get(TOPVOLUME_URL);
  return response.data;
};
export { topVolume };

//Main Profile
const MAINPROFILE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";
const mainProfile = async () => {
  const response = await axios.get(MAINPROFILE_URL);
  return response.data;
};
export { mainProfile };
