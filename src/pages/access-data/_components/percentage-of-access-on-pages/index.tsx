import Chart from '@/components/chart'
import { TotalOfAccess, Wrapper } from './styles'
import { Options } from 'highcharts'

function PercentageOfAccessOnPages() {
  const options: Options = {}

  return (
    <Wrapper>
      <TotalOfAccess>
        <span>
          {/* 6. <b>{analyticsDataState?.totalAccessOnPages?.all}</b> Acessos */}
        </span>
      </TotalOfAccess>
      <Chart options={options} />
    </Wrapper>
  )
}

export default PercentageOfAccessOnPages
