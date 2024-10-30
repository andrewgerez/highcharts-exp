import Header from '@/components/header'
import { AnalyticsDataProvider } from '@/shared/contexts/analytics-data-context'
import { Content } from './styles'
import PercentageOfAccessOnPages from './_components/percentage-of-access-on-pages'

function AccessData() {
  return (
    <AnalyticsDataProvider>
      <Header />

      <Content>
        <PercentageOfAccessOnPages />
      </Content>
    </AnalyticsDataProvider>
  )
}

export default AccessData
