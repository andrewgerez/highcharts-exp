import Header from '@/components/header'
import { AnalyticsDataProvider } from '@/shared/contexts/analytics-data-context'
import { Content } from './styles'

function AccessData() {
  return (
    <AnalyticsDataProvider>
      <Header />

      <Content>

      </Content>
    </AnalyticsDataProvider>
  )
}

export default AccessData
