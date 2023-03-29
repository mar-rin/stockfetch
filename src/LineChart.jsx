import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ data, ticker }) {
    return (
        <div className="chart">
            <div className="chart-container">
                <h2 style={{ textAlign: "center" }}>Closing Price of Stock for {ticker}</h2>
                <Line
                    data={data}
                    options={{
                        plugins: {
                            title: {
                                display: false,
                                text: "Closing Price of Stock"
                            },
                            legend: {
                                display: false
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}
export default LineChart;