import Chart from '@/components/chart'
import useAnalyticsData from '@/shared/hooks/use-analytics-data'
import { Options, TooltipFormatterContextObject } from 'highcharts'
import { TotalOfAccess, Wrapper } from './styles'
import { AnalyticsColors } from '@/shared/constants/global'

function PercentageOfAccessOnPages() {
  const { analyticsDataState } = useAnalyticsData()

  const options: Options = {
    title: {
      text: 'Percentage of access on pages',
      useHTML: true,
      style: {
        fontSize: '20px',
        color: AnalyticsColors.black,
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontFamily: 'Inter',
        padding: '20px',
      },
    },
    chart: {
      type: 'pie',
    },
    series: [
      {
        type: 'pie',
        innerSize: '60%',
        data: [
          {
            x: analyticsDataState?.totalAccessOnPages?.alternativePlatform
              ?.value,
            y: analyticsDataState?.totalAccessOnPages?.alternativePlatform
              ?.porcentage,
            color: AnalyticsColors.Wine,
            name: 'Alternative Platform',
          },
          {
            x: analyticsDataState?.totalAccessOnPages?.platform
              ?.value,
            y: analyticsDataState?.totalAccessOnPages?.platform
              ?.porcentage,
            color: AnalyticsColors.purple,
            name: 'Platform',
          },
        ],
      },
    ],
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        cursor: 'pointer',
        allowPointSelect: true,
      },
    },
    tooltip: {
      useHTML: true,
      formatter() {
        const self: TooltipFormatterContextObject = this;
        return `<div style='display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1'>
            <h1 style='font-size: 36px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;'> ${self.point.y}% </h1>
            <span style='font-size: 24px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}'>${self.point.x} Acessos </span>
            </div>`;
      },
      positioner() {
        return { x: 70, y: 80 };
      },
    },
  }

  return (
    <Wrapper>
      <TotalOfAccess>
        <span>
          <b>{analyticsDataState?.totalAccessOnPages?.all}</b> Access
        </span>
      </TotalOfAccess>
      <Chart options={options} />
    </Wrapper>
  )
}

export default PercentageOfAccessOnPages
