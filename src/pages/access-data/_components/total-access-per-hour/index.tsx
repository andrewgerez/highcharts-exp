import Chart from '@/components/chart'
import useAnalyticsData from '@/shared/hooks/use-analytics-data';
import CustomChartTitle from '@/components/custom-chart-title';
import { AnalyticsColors } from '@/shared/constants/global';
import { Options, TooltipFormatterContextObject } from 'highcharts'
import { Wrapper } from './styles'

function TotalAccessPerHour() {
  const { analyticsDataState } = useAnalyticsData()

  const options: Options = {
    title: {
      text: '',
    },
    series: [
      {
        type: 'column',
        name: 'Alternative Platform',
        color: AnalyticsColors.Wine,
        data: analyticsDataState.totalAccessOnPagesByHour?.alternativePlatform,
      },
      {
        type: 'spline',
        name: 'Platform',
        color: AnalyticsColors.purple,
        data: analyticsDataState.totalAccessOnPagesByHour?.platform,
      },
    ],
    xAxis: {
      min: 0,
      max: 23,
      tickInterval: 1,
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    legend: {
      align: 'left',
      verticalAlign: 'top',
      margin: 40,
    },
    tooltip: {
      useHTML: true,
      formatter() {
        const self: TooltipFormatterContextObject = this;
        return `<div style='display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1'>
            <h1 style='font-size: 30px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;'> ${self.point.y}</h1>
            <span style='font-size: 16px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}'> Acessos </span>
            </div>`;
      },
    },
  }

  return (
    <Wrapper>
      <CustomChartTitle
        description='Track the amount of access per hour on the platforms pages'
        title='Total page access per hour'
      />
      <Chart options={options} />
    </Wrapper>
  )
}

export default TotalAccessPerHour
