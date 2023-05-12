import dynamic from 'next/dynamic';
import React from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

interface Chart {
  heading: string;
  height?: number;
  series: any;
  options: any;
  type:
    | 'line'
    | 'area'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar';
}
const Chart = ({ series, options, type, heading, height = 350 }: Chart) => {
  return (
    <div className="p-4  bg-white rounded-xl">
      <h5 className="font-bold text-lg">{heading}</h5>
      <ReactApexChart
        series={series}
        type={type}
        width={'100%'}
        height={height}
        options={options}
      />
    </div>
  );
};

export default Chart;
