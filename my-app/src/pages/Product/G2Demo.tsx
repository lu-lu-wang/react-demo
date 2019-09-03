import React from 'react'
import { LineChart } from '../../components/LineChart'
import * as DataSet from '@antv/data-set'
// const DataSet = require('@antv/data-set')
import { Chart, Tooltip, Axis, Legend, Coord, Pie } from 'viser-react';
const sourceData = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 }
]
export default () => {
  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.2%'
  }]
  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'percent',
    filed: 'count',
    dimension: 'item',
    as: 'percent'
  })
  const data = dv.rows;
  return (
    <div>
      <div>
        <h3>折线图demo</h3>
        <LineChart/>
        <h3>基础环图</h3>
        <Chart forceFit height={400} data={data} scale={scale}>
        <Tooltip showTitle={false} />
        <Axis />
        <Legend dataKey="item" />
        <Coord type="theta" radius={0.75} innerRadius={0.6} />
        <Pie position="percent" color="item" style={{ stroke: '#fff', lineWidth: 1 }}
          label={['percent', {
            formatter: (val: any, item: any) => {
              return item.point.item + ': ' + val;
            }
          }]}
        />
      </Chart>
      </div>
    </div>
  );
}