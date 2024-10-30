import HighchartsReact from 'highcharts-react-official'
import * as Highcharts from "highcharts";
import { ChartProps } from './types'

function Chart({ options }: Readonly<ChartProps>) {
  Highcharts.setOptions({
    rangeSelector: {
      enabled: false
    },
    navigator: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    lang: {
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      decimalPoint: '.',
      thousandsSep: ',',
    }
  })

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Chart
