import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line as LineChart } from "react-chartjs-2";
import { LineWrapper } from "./style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["t", "w", "th", "f", "s", "su", "m"];

export const getData = (data) => ({
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data,
      borderColor: "#C3FF4D",
      backgroundColor: "#7B66FF",
    },
  ],
});

export default function Line({ data }) {
  console.log({ data });
  return (
    <LineWrapper style={{ position: "relative", width: "100%" }}>
      <LineChart options={options} data={getData(data)} />
    </LineWrapper>
  );
}
