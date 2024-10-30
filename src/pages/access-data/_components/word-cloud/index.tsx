import Chart from '@/components/chart'
import Highcharts, { Options } from 'highcharts'
import wordCloud from 'highcharts/modules/wordcloud.js'
import { Wrapper } from './styles'

wordCloud(Highcharts)

function WordCloud() {
  const options: Options = {}

  return (
    <Wrapper>
      <Chart options={options} />
    </Wrapper>
  )
}

export default WordCloud
