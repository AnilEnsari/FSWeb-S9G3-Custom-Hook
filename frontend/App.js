import React, { useState, useEffect } from "react";
import axios from "axios";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { useTheme } from "./hooks/geceModuAc";
const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkTheme, modeChanger] = useTheme(false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={darkTheme ? "dark-mode App" : "App"}>
      <Navbar darkTheme={darkTheme} modeChanger={modeChanger} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
