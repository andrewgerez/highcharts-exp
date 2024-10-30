import Chart from '@/components/chart'
import { Options } from 'highcharts'
import { TotalOfAccess, Wrapper } from './styles'

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
