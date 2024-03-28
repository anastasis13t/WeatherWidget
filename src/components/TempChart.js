import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import "./TempChart.css";

const labels = ["10/11", "11/11", "12/11", "13/11", "14/11", "15/11", "16/11"];
Chart.register(CategoryScale);
const data = {
  labels: labels,
  datasets: [
    {
      data: [18.68, 22, 22.52, 22.02, 22.62, 23.37, 23.04],
    },
  ],
};

const LineChart = () => {
  return (
    <div style={{ position: "relative", margin: "auto", width: "60vh" }}>
      <hr></hr>
      <h3>Weekly Variation</h3>
      <Line
        data={data}
        options={{
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              align: "start",
              text: "Temperature",
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
