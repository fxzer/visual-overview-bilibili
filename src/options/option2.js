
var points = [
  { value: [118.8062, 31.9208], itemStyle: { color: "#4ab2e5" } },
  { value: [127.9688, 45.368], itemStyle: { color: "#4fb6d2" } },
  { value: [110.3467, 41.4899], itemStyle: { color: "#52b9c7" } },
  { value: [125.8154, 44.2584], itemStyle: { color: "#5abead" } },
  { value: [116.4551, 40.2539], itemStyle: { color: "#f34e2b" } },
  { value: [123.1238, 42.1216], itemStyle: { color: "#f56321" } },
  { value: [114.4995, 38.1006], itemStyle: { color: "#f56f1c" } },
  { value: [117.4219, 39.4189], itemStyle: { color: "#f58414" } },
  { value: [112.3352, 37.9413], itemStyle: { color: "#f58f0e" } },
  { value: [109.1162, 34.2004], itemStyle: { color: "#f5a305" } },
  { value: [103.5901, 36.3043], itemStyle: { color: "#e7ab0b" } },
  { value: [106.3586, 38.1775], itemStyle: { color: "#dfae10" } },
  { value: [101.4038, 36.8207], itemStyle: { color: "#d5b314" } },
  { value: [103.9526, 30.7617], itemStyle: { color: "#c1bb1f" } },
  { value: [108.384366, 30.439702], itemStyle: { color: "#b9be23" } },
  { value: [113.0823, 28.2568], itemStyle: { color: "#a6c62c" } },
  { value: [102.9199, 25.46639], itemStyle: { color: "#96cc34" } },
  { value: [119.4543, 25.9222] },
];

export default {
  title: {
    text: "今日B站各地前往福建的UP",
    left: "center",
    textStyle: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "normal",
      textAlign: "center",
    },
  },
  backgroundColor: "#040D21",
  geo: {
    map: "china",
    aspectScale: 0.75, //长宽比
    zoom: 1.1,
    roam: false,
    itemStyle: {
      normal: {
        areaColor: {
          type: "radial",
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: "#09132c", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#274d68", // 100% 处的颜色
            },
          ],
          globalCoord: true, // 缺省为 false
        },
        shadowColor: "rgb(58,115,192)",
        shadowOffsetX: 10,
        shadowOffsetY: 11,
      },
      emphasis: {
        areaColor: "#2AB8FF",
        borderWidth: 0,
        color: "green",
        label: {
          show: false,
        },
      },
    },
    regions: [
      {
        name: "南海诸岛",
        itemStyle: {
          areaColor: "rgba(0, 10, 52, 1)",

          borderColor: "rgba(0, 10, 52, 1)",
          normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
          },
        },
      },
    ],
  },
  series: [
    {
      type: "map",
      roam: false,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
        emphasis: {
          textStyle: {
            color: "#6197F6",
          },
        },
      },

      itemStyle: {
        normal: {
          borderColor: "rgb(147, 235, 248)",
          borderWidth: 1,
          areaColor: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "#09132c", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#274d68", // 100% 处的颜色
              },
            ],
            globalCoord: true, // 缺省为 false
          },
        },
        emphasis: {
          areaColor: "rgb(46,229,206)",
          borderWidth: 0.1,
        },
      },
      zoom: 1.1,
      map: "china", //使用
    },
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      showEffectOn: "render",
      zlevel: 1,
      rippleEffect: {
        period: 15,
        scale: 4,
        brushType: "fill",
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: "{b}",
          position: "right",
          offset: [15, 0],
          color: "#1DE9B6",
          show: true,
        },
      },
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: "#333",
        },
      },
      symbolSize: 12,
      data: points,
    }, //地图线的动画效果
    {
      type: "lines",
      zlevel: 2,
      effect: {
        show: true,
        period: 4, //箭头指向速度，值越小速度越快
        trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbol: "arrow", //箭头图标
        symbolSize: 7, //图标大小
      },
      lineStyle: {
        normal: {
          color: "#1DE9B6",
          width: 1, //线条宽度
          opacity: 0.1, //尾迹线条透明度
          curveness: 0.3, //尾迹线条曲直度
        },
      },
      data: [
        {
          coords: [
            [118.8062, 31.9208],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#4ab2e5" },
        },
        {
          coords: [
            [127.9688, 45.368],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#4fb6d2" },
        },
        {
          coords: [
            [110.3467, 41.4899],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#52b9c7" },
        },
        {
          coords: [
            [125.8154, 44.2584],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#5abead" },
        },
        {
          coords: [
            [116.4551, 40.2539],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#f34e2b" },
        },
        {
          coords: [
            [123.1238, 42.1216],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#f56321" },
        },
        {
          coords: [
            [114.4995, 38.1006],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#f56f1c" },
        },
        {
          coords: [
            [117.4219, 39.4189],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#f58414" },
        },
        {
          coords: [
            [112.3352, 37.9413],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#f58f0e" },
        },
        {
          coords: [
            [109.1162, 34.2004],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#f5a305" },
        },
        {
          coords: [
            [103.5901, 36.3043],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#e7ab0b" },
        },
        {
          coords: [
            [106.3586, 38.1775],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#dfae10" },
        },
        {
          coords: [
            [101.4038, 36.8207],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#d5b314" },
        },
        {
          coords: [
            [103.9526, 30.7617],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#c1bb1f" },
        },
        {
          coords: [
            [108.384366, 30.439702],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#b9be23" },
        },
        {
          coords: [
            [113.0823, 28.2568],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#a6c62c" },
        },
        {
          coords: [
            [102.9199, 25.46639],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: "#96cc34" },
        },
      ],
    },
  ],
};
