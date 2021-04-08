import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

function Chart(props) {
  return (
    <div className="chart">
      <Bar
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Largest Cities in Massachusetts",
            fontSize: 25
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: "#000"
            }
          }
        }}
      />
      <Line
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Largest Cities in Massachusetts",
            fontSize: 25
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: "#000"
            }
          }
        }}
      />
      <Pie
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Largest Cities in Massachusetts",
            fontSize: 25
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: "#000"
            }
          }
        }}
      />
    </div>
  );
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: "bottom"
};

export default Chart;
