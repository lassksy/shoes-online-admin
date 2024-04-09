<template>
    <v-chart class="chart" :option="option" autoresize />
  </template>
  
  <script lang="ts" setup>
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { BarChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    GridComponent
  } from 'echarts/components';
  import VChart from 'vue-echarts';
  import { ref } from 'vue';
  import {getMarketingApi} from "@/apis/chats";
  import { Interface } from 'readline';
  
  use([
    CanvasRenderer,
    BarChart,
    TitleComponent,
    TooltipComponent,
    GridComponent
  ]);

//   interface DataItem {
//     typeName: String;
//     num: Number;
//     percentage: Number;
//   }

//   const data=ref<DataItem[]>([])


//   const getMarketing = async () => {
//     const res = await getMarketingApi();
//     data.value=res.data
//     option.value.legend.data=data.value.map((item)=>item.typeName);
//     option.value.series[0].data=data.value.map((item) => ({
//       value: item.num,
//       name: item.typeName,
//     }))
//   } 
//   getMarketing();
  const option = ref({
    title: {
      text: '业绩报表',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ],
}
  );
  </script>
  
  <style scoped>
  </style>
  