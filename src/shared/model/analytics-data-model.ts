export type AnalyticsData = {
  totalAccessOnPages: {
    default: {
      porcentage: number
      value: number
    }
    premium: {
      porcentage: number
      value: number
    }
    all: number
  }
  totalAccessOnPagesByHour: {
    ignite: number[]
    expertsClub: number[]
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
