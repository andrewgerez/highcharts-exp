import Chart from '@/components/chart'
import { Options } from 'highcharts'
import { Wrapper } from './styles'

function TotalAccessPerMonth() {
  const options: Options = {}

  return (
    <Wrapper>
      <Chart options={options} />
    </Wrapper>
  )
}

export default TotalAccessPerMonth
