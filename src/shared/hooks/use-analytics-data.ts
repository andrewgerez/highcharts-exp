import { useContext } from 'react'
import AnalyticsDataContext from '@/shared/contexts/analytics-data-context'

function useAnalyticsData() {
  const context = useContext(AnalyticsDataContext)
  return context
}

export default useAnalyticsData
