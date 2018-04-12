import React from 'react';
import { Sparklines ,SparklinesLine ,SparklinesReferenceLine  } from 'react-sparklines';
const Chart=(props)=>{
  return (
  <Sparklines data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
  </Sparklines>
  )
}
export default Chart;
