import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

function BarGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Shaam", "Naman", "Upaj", "Laabh", "Aakriti", "Anubhav"],
        datasets: [
          {
            label: "Types of trees",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(75, 192, 192)",
              "rgba(153, 102, 255)",
              "rgba(255, 159, 64)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        indexAxis: "y", // Display labels along the y-axis
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    });

    // Cleanup
    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} style={{ width: "100%" }} />;
}

export default BarGraph;
