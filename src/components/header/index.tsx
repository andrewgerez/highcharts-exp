import useAnalyticsData from '@/shared/hooks/use-analytics-data'
import { AxiosAdapter } from '@/infra/axios-adapter'
import { AnalyticsData } from '@/shared/model/analytics-data-model'
import { AnalyticsService } from '@/shared/services/analytics-service'
import { ChangeEvent, useCallback } from 'react'
import { presetDatas } from './metadata'
import { Wrapper, Main, Content } from './styles'

function Header() {
  const { setIsLoading, setAnalyticsDataState } = useAnalyticsData()
  const axios = new AxiosAdapter()

  const handleSelect = useCallback(async (e: ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true)

    await new AnalyticsService(axios)
      .getInformationsByPeriod(e.target.value)
      .then((information) => {
        setAnalyticsDataState(information as AnalyticsData)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <Wrapper>
      <Main>
        <h5>Analytics</h5>
        <span>
          Monitor the number of hits generated on the pages of your website
        </span>

        <Content>
          <h3>Access data</h3>
          <select
            defaultValue="DEFAULT"
            data-testid="select-period-id"
            name="select-period"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleSelect(e)
            }
          >
            <option value="DEFAULT" disabled>
              Select a period
            </option>
            {presetDatas.map((element) => (
              <option
                data-testid="select-option"
                key={element.value}
                value={element.value}
              >
                {element.title}
              </option>
            ))}
          </select>
        </Content>
      </Main>
    </Wrapper>
  )
}

export default Header
