import Chart from '@/components/chart'
import { Options } from 'highcharts'
import { Wrapper } from './styles'
import { AnalyticsColors } from '@/shared/constants/global'
import useAnalyticsData from '@/shared/hooks/use-analytics-data'

function TotalAccessOnPages() {
  const { analyticsDataState } = useAnalyticsData()

  const options: Options = {
    title: {
      text: 'Total access on pages',
      useHTML: true,
      align: 'left',
      style: {
        padding: '30px',
        fontSize: '20px',
        color: AnalyticsColors.black,
        fontWeight: 'bold',
        fontStyle: 'Normal',
        fontFamily: 'Inter',
      },
    },
    chart: {
      type: 'column',
    },
    series: [
      {
        name: 'Platform',
        type: 'column',
        data: [analyticsDataState?.totalAccessOnPages?.platform?.value],
        color: AnalyticsColors.purple,
      },
      {
        name: 'Alternative Platform',
        type: 'column',
        data: [
          analyticsDataState?.totalAccessOnPages?.alternativePlatform?.value,
        ],
        color: AnalyticsColors.Wine,
      },
    ],
    tooltip: {
      enabled: false,
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
    },
    plotOptions: {
      column: {
        dataLabels: {
          useHTML: true,
          enabled: true,
          color: AnalyticsColors.black,
          inside: true,
          verticalAlign: 'bottom',
          borderWidth: 3,
          shadow: false,
          style: {
            fontSize: '36px',
            fontWeight: 'bold',
            fontStyle: 'Normal',
            lineHeight: '44px',
            fontFamily: 'Inter',
            textOutline: '0',
            padding: '14px',
          },
        },
      },
    },
  }

  return (
    <Wrapper>
      <Chart options={options} />
    </Wrapper>
  )
}

export default TotalAccessOnPages
