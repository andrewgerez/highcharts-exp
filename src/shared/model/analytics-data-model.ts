export type AnalyticsData = {
  totalAccessOnPages: {
    platform: {
      porcentage: number
      value: number
    }
    alternativePlatform: {
      porcentage: number
      value: number
    }
    all: number
  }
  totalAccessOnPagesByHour: {
    platform: number[]
    alternativePlatform: number[]
  }
  totalAccessOnPagesByMonth: {
    months: Array<number[]>
    days: number[]
  }
  accessGoals: number
  accessByDevice: {
    mobile: number
    browser: number
  }
  wordCloud: Array<{
    name: string
    weight: number
  }>
}
