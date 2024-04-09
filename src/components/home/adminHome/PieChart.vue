<template>
    <v-chart class="chart" :option="option" autoresize />
  </template>
  
  <script lang="ts" setup>
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import VChart from 'vue-echarts';
  import { ref } from 'vue';
  import {getMarketingApi} from "@/apis/chats";
import { Interface } from 'readline';
  
  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);

  interface DataItem {
    typeName: String;
    num: Number;
    percentage: Number;
  }

  const data=ref<DataItem[]>([])


  const getMarketing = async () => {
    const res = await getMarketingApi();
    data.value=res.data
    option.value.legend.data=data.value.map((item)=>item.typeName);
    option.value.series[0].data=data.value.map((item) => ({
      value: item.num,
      name: item.typeName,
    }))
  } 
  getMarketing();
  const option = ref({
    title: {
      text: '营销报表',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
    },
    series: [
      {
        name: 'Traffic Sources',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 234, name: 'Ad Networks' },
          { value: 135, name: 'Video Ads' },
          { value: 1548, name: 'Search Engines' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  });
  </script>
  
  <style scoped>
  .chart {
    height: 100vh;
  }
  </style>
  