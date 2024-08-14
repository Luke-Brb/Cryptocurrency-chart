import axios from "axios";

export async function fetchData(coinId, startDate, endDate) {
  console.log("API coinId:", coinId);
  console.log("API startDate:", startDate);
  console.log("API endDate:", endDate);
  const dayStart = startDate.getTime() / 1000;
  const dayEnd = endDate.getTime() / 1000;
  if (Math.floor(dayStart) == Math.floor(dayEnd)) {
    startDate = endDate.getTime() - 300000;
  }

  console.log(" *** startDate :", " ", startDate);
  console.log(" *** endDate :", endDate.getTime(), " ", endDate);
  try {
    const options = {
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart/range`,
      params: {
        vs_currency: "eur",
        from: Math.floor(new Date(startDate).getTime() / 1000),
        to: Math.floor(new Date(endDate).getTime() / 1000),
        precision: "2",
      },
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-WmMgwDjkmjDWLrKhCfSduwuc",
      },
    };
    const response = await axios.request(options);
    console.log("API - return response:", response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}
