const options = {
  chart: {
    styledMode: false,
    showAxes: true,
    backgroundColor: "#1f2c45",
    alignTicks: true,
    height: "500px",
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  title: {},
  legend: {
    enabled: true,
    align: "center",
    verticalAlign: "bottom",
    x: 0,
    y: 0,
    itemStyle: {
      color: "#FFF",
      fontWeight: "normal",
    },
    itemHoverStyle: {
      color: "#FFF",
    },
  },
  tooltip: {
    shared: true,
    pointFormat:
      '<span style="color:{point.color}">● {series.name}: {point.formattedValue}</span><br/>',
    backgroundColor: "#000",
  },
  xAxis: [
    {
      tickWidth: 1,
      categories: [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "Q1 2021",
      ],
      labels: {
        style: {
          color: "#fff",
        },
      },
    },
  ],
  yAxis: [
    {
      title: {
        text: "",
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
      gridLineColor: "#565656",
      index: 0,
    },
    {
      title: {
        text: "",
      },
      labels: {
        format: "{value} %",
        style: {
          color: "#fff",
        },
      },
      opposite: true,
      gridLineColor: "#565656",
      index: 1,
    },
    {
      title: {
        text: "",
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
      gridLineColor: "#565656",
      index: 2,
    },
    {
      title: {
        text: "",
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
      gridLineColor: "#565656",
      index: 3,
    },
    {
      title: {
        text: "",
      },
      labels: {
        format: "{value} %",
        style: {
          color: "#fff",
        },
      },
      opposite: true,
      gridLineColor: "#565656",
      index: 4,
    },
    {
      title: {
        text: "",
      },
      labels: {
        format: "{value} %",
        style: {
          color: "#fff",
        },
      },
      opposite: true,
      gridLineColor: "#565656",
      index: 5,
    },
  ],
  series: [
    {
      id: 53,
      name: "Revenue",
      type: "column",
      data: [
        {
          y: 256864.08,
          formattedValue: "256 864",
          colorIndex: 0,
        },
        {
          y: 272848.97,
          formattedValue: "272 849",
          colorIndex: 0,
        },
        {
          y: 275550.12,
          formattedValue: "275 550",
          colorIndex: 0,
        },
        {
          y: 252323.12,
          formattedValue: "252 323",
          colorIndex: 0,
        },
        {
          y: 247284.23,
          formattedValue: "247 284",
          colorIndex: 0,
        },
        {
          y: 233503.91,
          formattedValue: "233 504",
          colorIndex: 0,
        },
        {
          y: 201294,
          formattedValue: "201 294",
          colorIndex: 0,
        },
        {
          y: 202986,
          formattedValue: "202 986",
          colorIndex: 0,
        },
        {
          y: 178197.59,
          formattedValue: "178 198",
          colorIndex: 0,
        },
        {
          y: 181199.41,
          formattedValue: "181 199",
          colorIndex: 0,
        },
      ],
      yAxis: 0,
      visible: true,
      dataLabels: {
        enabled: true,
        color: "#fff",
        fontWeight: "normal",
      },
      zIndex: 0,
      showInSeperateYAxis: true,
      index: 0,
      colorIndex: 0,
      color: "#028ba8",
      borderWidth: 0,
    },
    {
      id: 56,
      name: "Earnings",
      type: "column",
      data: [
        {
          y: 17657.12,
          formattedValue: "17 657",
          colorIndex: 1,
        },
        {
          y: 18171.24,
          formattedValue: "18 171",
          colorIndex: 1,
        },
        {
          y: 21478.32,
          formattedValue: "21 478",
          colorIndex: 1,
        },
        {
          y: 16520.8,
          formattedValue: "16 521",
          colorIndex: 1,
        },
        {
          y: 17308.83,
          formattedValue: "17 309",
          colorIndex: 1,
        },
        {
          y: 18367.9,
          formattedValue: "18 368",
          colorIndex: 1,
        },
        {
          y: 19557,
          formattedValue: "19 557",
          colorIndex: 1,
        },
        {
          y: 12951,
          formattedValue: "12 951",
          colorIndex: 1,
        },
        {
          y: 2469.6,
          formattedValue: "2 470",
          colorIndex: 1,
        },
        {
          y: 3996.6,
          formattedValue: "3 997",
          colorIndex: 1,
        },
      ],
      yAxis: 0,
      visible: true,
      dataLabels: {
        enabled: true,
        color: "#fff",
        fontWeight: "normal",
      },
      zIndex: 0,
      showInSeperateYAxis: true,
      index: 1,
      colorIndex: 1,
      color: "#ff8134",
      borderWidth: 0,
    },
    {
      id: 30,
      name: "Profit margin",
      type: "spline",
      data: [
        {
          y: 6.87,
          formattedValue: "6,9 %",
          colorIndex: 2,
        },
        {
          y: 6.66,
          formattedValue: "6,7 %",
          colorIndex: 2,
        },
        {
          y: 7.8,
          formattedValue: "7,8 %",
          colorIndex: 2,
        },
        {
          y: 6.55,
          formattedValue: "6,6 %",
          colorIndex: 2,
        },
        {
          y: 7,
          formattedValue: "7,0 %",
          colorIndex: 2,
        },
        {
          y: 7.87,
          formattedValue: "7,9 %",
          colorIndex: 2,
        },
        {
          y: 9.72,
          formattedValue: "9,7 %",
          colorIndex: 2,
        },
        {
          y: 6.38,
          formattedValue: "6,4 %",
          colorIndex: 2,
        },
        {
          y: 1.39,
          formattedValue: "1,4 %",
          colorIndex: 2,
        },
        {
          y: 2.21,
          formattedValue: "2,2 %",
          colorIndex: 2,
        },
      ],
      yAxis: 1,
      visible: true,
      dataLabels: {
        enabled: false,
        color: "#fff",
        fontWeight: "normal",
      },
      zIndex: 1,
      showInSeperateYAxis: true,
      index: 2,
      colorIndex: 2,
      color: "#8ce352",
      borderWidth: 0,
    },
    {
      id: 39,
      name: "Equity ratio",
      type: "spline",
      data: [
        {
          y: 35.55,
          formattedValue: "35,6 %",
          colorIndex: 3,
        },
        {
          y: 39.96,
          formattedValue: "40,0 %",
          colorIndex: 3,
        },
        {
          y: 37.47,
          formattedValue: "37,5 %",
          colorIndex: 3,
        },
        {
          y: 36.24,
          formattedValue: "36,2 %",
          colorIndex: 3,
        },
        {
          y: 35.31,
          formattedValue: "35,3 %",
          colorIndex: 3,
        },
        {
          y: 35.48,
          formattedValue: "35,5 %",
          colorIndex: 3,
        },
        {
          y: 32.7,
          formattedValue: "32,7 %",
          colorIndex: 3,
        },
        {
          y: 30.32,
          formattedValue: "30,3 %",
          colorIndex: 3,
        },
        {
          y: 38.94,
          formattedValue: "38,9 %",
          colorIndex: 3,
        },
        {
          y: 34.64,
          formattedValue: "34,6 %",
          colorIndex: 3,
        },
      ],
      yAxis: 1,
      visible: true,
      dataLabels: {
        enabled: false,
        color: "#fff",
        fontWeight: "normal",
      },
      zIndex: 1,
      showInSeperateYAxis: true,
      index: 3,
      colorIndex: 3,
      color: "#ff5b4c",
      borderWidth: 0,
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxHeight: "500px",
        },
      },
    ],
  },
  plotOptions: {
    column: {
      dataLabels: {
        crop: false,
        overflow: "none",
        borderWidth: 0,
        color: "#fff",
        fill: "#fff",
        stroke: "none",
        fontWeight: "normal",
      },
    },
    spline: {
      marker: {
        symbol: "circle",
      },
    },
    series: {
      label: {
        style: {
          fontWeight: "normal",
          textOutline: 0,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 0,
          fontWeight: "normal",
          fontFamily: "Montserrat, sans-serif",
        },
      },
    },
  },
  colorAxis: {
    labels: {
      style: {
        color: "#000",
      },
    },
  },
  colors: ["#028ba8", "#ff8134", "green", "red"],
};

export default options;