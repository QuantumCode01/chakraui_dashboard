// SalesChart.js
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "2021 Sales",
        data: [200, 180, 220, 350, 400, 470, 380, 300, 350, 220, 400, 420],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)", // light teal fill
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4, // smooth curve
        pointRadius: 0
      },
      {
        label: "2020 Sales",
        data: [500, 150, 250, 270, 230, 240, 210, 200, 110, 180, 150, 120],
        fill: true,
        backgroundColor: "rgba(0,0,0,0.1)", // gray fill
        borderColor: "rgba(0,0,0,0.7)",
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: { stepSize: 100 }
      },
      x: {
        grid: { display: false }
      }
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesChart;


