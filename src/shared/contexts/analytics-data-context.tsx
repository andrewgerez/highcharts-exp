import { createContext, useMemo, useState } from 'react'
import { AnalyticsData } from '@/shared/model/analytics-data-model'

type ProviderProps = {
  children: React.ReactNode
}

type ContextProps = {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  analyticsDataState: AnalyticsData
  setAnalyticsDataState: React.Dispatch<React.SetStateAction<AnalyticsData>>
}

const AnalyticsDataContext = createContext<ContextProps>({
  isLoading: false,
  setIsLoading: () => { },
  analyticsDataState: {} as AnalyticsData,
  setAnalyticsDataState: () => { },
})

const AnalyticsDataProvider = ({
  children,
}: ProviderProps) => {
  const [analyticsDataState, setAnalyticsDataState] = useState<AnalyticsData>(
    {} as AnalyticsData
  )

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const memoizedObj = useMemo(() => {
    return {
      isLoading,
      setIsLoading,
      analyticsDataState,
      setAnalyticsDataState,
    }
  }, [isLoading, setIsLoading, analyticsDataState, setAnalyticsDataState])

  return (
    <AnalyticsDataContext.Provider value={memoizedObj}>
      {children}
    </AnalyticsDataContext.Provider>
  )
}

export { AnalyticsDataProvider }

export default AnalyticsDataContext
