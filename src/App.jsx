import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import react, { useState, useMemo } from "react";
import LineChart from "./LineChart";
import SelectMenu from "./Select"

Chart.register(CategoryScale);

//Get necessary dates
const today = new Date();
const endDate = today.getFullYear() + "-0" + (today.getMonth()+1) + "-" + (today.getDate()-1);
const endDateMilli = Math.floor(today.getTime() / 1000);
const monthAgoMilli = endDateMilli - 30*24*60*60;
const monthAgo = new Date(monthAgoMilli * 1000);
const startDate = monthAgo.getFullYear() + "-0" + (monthAgo.getMonth()+1) + "-" + (monthAgo.getDate()-1) + "/";

//Cut URL into dynamic pieces
const seg1 = "https://api.polygon.io/v2/aggs/ticker/"; //+ticker
const seg2 = "/range/1/day/" //+startDate +endDate
const seg3 = "?adjusted=true&sort=asc&limit=120&apiKey=rp4Ja0pZPFxljt3lJjbetn355tQVpIGc";


function App() {

    const [stockData, setStockData] = useState("");
    const [chartData, setChartData] = useState("");
    const [ticker, setTicker] = useState("");
    const url = seg1 + ticker + seg2 + startDate + endDate + seg3;

    async function fetchData() {
        await fetch(url)
            .then((response) => response.json())
            .then((response) => setStockData(response.results))
    }

    useMemo(() => {
        if (stockData) {
        return setChartData({
            labels: stockData.map((data) => {
                const day = new Date(data['t']);
                return (day.getMonth()+1) + "-" + (day.getDate());
            }),
            datasets: [
                {data: stockData.map((data) => data['c']),
                borderColor: "black",
                borderWidth: 1}
            ]
        });
    }}, [stockData]);

    return (
        <div>
            <SelectMenu handleChoice={(e)=>setTicker(e.value)}/>
            <button className="buttone" onClick={fetchData}>Get Data from Polygon</button>
            {(stockData) &&
                <LineChart
                    data={chartData}
                    ticker={ticker}
                    options={{ maintainAspectRatio: false }}/>}
        </div>
    );}

export default App;
