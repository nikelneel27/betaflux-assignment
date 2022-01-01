import React from "react";
import ReactEcharts from "echarts-for-react";
// import echarts from "echarts"
import * as echarts from "echarts";
import { Container } from "./styles";
//
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
      // type: "value",
      // boundaryGap: ["90%", "20%"],
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
      data: [
        ["1", 0],
        ["2", 100],
        ["3", 20],
        ["4", 40],
        ["5", 60],
        ["6", 100],
        ["7", 90],
        ["8", 80],
        ["9", 75],
        ["10", 100],
        ["11", 50],
        ["12", 100],
      ],
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
