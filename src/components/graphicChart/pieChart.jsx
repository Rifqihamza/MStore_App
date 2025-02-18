import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "./Data";

Chart.register(CategoryScale);

export default function PieCharts() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Hancurkan chart sebelum membuat yang baru
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: Data.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "#06b6d4",
              "#4338ca",
              "#e11d48",
              "#f59e0b",
              "#10b981",
            ],
            borderColor: "#155e75",
            borderWidth: 2,
            width: 100,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allow custom width and height
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="App w-full h-full mx-auto">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
