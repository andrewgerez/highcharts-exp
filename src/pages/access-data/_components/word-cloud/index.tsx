import Chart from '@/components/chart'
import useAnalyticsData from '@/shared/hooks/use-analytics-data'
import Highcharts, { Options, TooltipFormatterContextObject } from 'highcharts'
import CustomChartTitle from '@/components/custom-chart-title'
import wordCloud from 'highcharts/modules/wordcloud.js'
import { AnalyticsColors } from '@/shared/constants/global'
import { Wrapper } from './styles'

wordCloud(Highcharts)

function WordCloud() {
  const { analyticsDataState } = useAnalyticsData()

  const options: Options = {
    title: {
      text: '',
    },
    series: [
      {
        type: 'wordcloud',
        data: analyticsDataState.wordCloud,
        style: {
          fontFamily: 'Inter',
        },
        rotation: {
          from: -30,
          to: 60,
          orientations: 5,
        },
        colors: [
          AnalyticsColors.Wine,
          AnalyticsColors.grey,
          AnalyticsColors.purple,
          AnalyticsColors.darkGray,
        ],
      },
    ],
    tooltip: {
      useHTML: true,
      formatter() {
        const self: TooltipFormatterContextObject = this;
        return `<div style='display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1'>
            <h1 style='font-size: 30px; font-family: Inter; color: ${AnalyticsColors.black
          }; margin: 0px;'> ${self.point.options.weight}</h1>
            <span style='font-size: 16px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray
          }'> ${self.point.options.weight === 1 ? 'Mention' : 'Mentions'
          } </span>
            </div>`;
      },
    },
  }

  return (
    <Wrapper>
      <CustomChartTitle
        description='Follow the most commented words on the platforms'
        title='Most commented words'
      />

      <Chart options={options} />
    </Wrapper>
  )
}

export default WordCloud
