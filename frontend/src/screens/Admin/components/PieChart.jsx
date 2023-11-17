import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

function PieGraph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Shaam", "Naman", "Upaj", "Laabh"],
        datasets: [
          {
            data: [12, 19, 3, 5],
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(75, 192, 192)",
            ],

            borderWidth: 1,
          },
        ],
      },
      options: {
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

  return (
    <div style={{ height: "50%", margin: "60px" }}>
      <canvas ref={chartRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default PieGraph;
