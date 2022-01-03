import React from "react";
import ReactEcharts from "echarts-for-react";
import { Container } from "./styles";

const randomData = Array.from({ length: 7 }, () =>
  Math.floor(Math.random() * 200)
);

const option = {
  xAxis: {
    type: "category",
    axisLine: {
      show: false,
    },
    grid: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    axisLine: {
      show: false,
    },
    grid: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  layout: {
    padding: {
      left: 50,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  series: [
    {
      data: randomData,
      type: "bar",
      barWidth: 12,
      showBackground: true,
      itemStyle: {
        barBorderRadius: [20, 20, 20, 20],
        color: "#1563FF",
      },
      backgroundStyle: {
        color: "#E9EDF7",
        borderRadius: [20, 20, 20, 20],
      },
    },
  ],
};

class StackedChart extends React.Component {
  render() {
    return (
      <Container>
        <ReactEcharts
          option={option}
          style={{ height: "230px", width: "100%" }}
          className={"react_for_echarts"}
        />
      </Container>
    );
  }
}

export default StackedChart;
