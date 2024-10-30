import Chart from '@/components/chart'
import useAnalyticsData from '@/shared/hooks/use-analytics-data';
import CustomChartTitle from '@/components/custom-chart-title';
import { AnalyticsColors } from '@/shared/constants/global';
import { Options, TooltipFormatterContextObject } from 'highcharts'
import { Wrapper } from './styles'

function TotalAccessPerMonth() {
  const { analyticsDataState } = useAnalyticsData()

  const options: Options = {
    title: {
      text: '',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: '',
      },
      labels: {
        format: '{value: %b}',
      },
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        type: 'column',
        name: 'Total average access',
        color: AnalyticsColors.purple,
        data: analyticsDataState.totalAccessOnPagesByMonth?.months,
      },
    ],
    legend: {
      enabled: false,
    },
    tooltip: {
      useHTML: true,
      formatter() {
        const self: TooltipFormatterContextObject = this;
        return `<div style='display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1'>
            <h1 style='font-size: 30px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;'> ${self.point.y}</h1>
            <span style='font-size: 16px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}'> Acessos no mês</span>
            </div>`;
      },
    },
  }

  return (
    <Wrapper>
      <CustomChartTitle
        description="Monitor the average amount of access per month and day on the platforms"
        title="Average total page access per month"
      />
      <Chart options={options} />
    </Wrapper>
  )
}

export default TotalAccessPerMonth
