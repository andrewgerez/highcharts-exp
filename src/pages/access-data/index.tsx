import Header from '@/components/header'
import PercentageOfAccessOnPages from './_components/percentage-of-access-on-pages'
import TotalAccessOnPages from './_components/total-access-on-pages'
import TotalAccessPerHour from './_components/total-access-per-hour'
import TotalAccessPerMonth from './_components/total-access-per-month'
import WordCloud from './_components/word-cloud'
import { AnalyticsDataProvider } from '@/shared/contexts/analytics-data-context'
import { Content } from './styles'

function AccessData() {
  return (
    <AnalyticsDataProvider>
      <Header />

      <Content>
        <TotalAccessOnPages />
        <PercentageOfAccessOnPages />
        <TotalAccessPerHour />
        <TotalAccessPerMonth />
        <WordCloud />
      </Content>
    </AnalyticsDataProvider>
  )
}

export default AccessData
