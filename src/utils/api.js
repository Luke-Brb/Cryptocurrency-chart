import axios from "axios";

const startDate = "2024-07-01";
const endDate = "2024-07-08";
const coinId = "bitcoin";
const vsCurrency = "eur";

const options = {
  method: "GET",
  url: "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range",
  params: {
    vs_currency: vsCurrency,
    from: Math.floor(new Date(startDate).getTime() / 1000),
    to: Math.floor(new Date(endDate).getTime() / 1000),
  },
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-WmMgwDjkmjDWLrKhCfSduwuc",
  },
};

export async function fetchData() {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}
