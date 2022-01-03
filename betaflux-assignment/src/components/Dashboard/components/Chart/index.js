import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { Container } from "./styles";

const randomData = Array.from({ length: 12 }, () =>
  Math.floor(Math.random() * 100)
);

const option = {
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLine: {
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
      grid: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      grid: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      type: "line",
      smooth: 0.6,
      symbol: "none",
      lineStyle: {
        color: "#1563FF",
        width: 3,
      },

      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: "#fff",
          },
          {
            offset: 0.8,
            color: "#E9E3FF",
          },
        ]),
      },
      data: randomData,
    },
  ],
};

class Chart extends React.Component {
  render() {
    return (
      <Container>
        <ReactEcharts
          option={option}
          style={{
            height: "200px",
            width: "100%",
            maxWidth: "100%",
          }}
          className={"react_for_echarts"}
        />
      </Container>
    );
  }
}

export default Chart;
