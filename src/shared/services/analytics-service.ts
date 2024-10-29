import { HttpClient, HttpStatusCode } from '@/data/interfaces/http/http-client'

export class AnalyticsService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly url = `http://localhost:5000`
  ) { }

  async getInformationsByPeriod(period: string) {
    const headers = {
      'Content-Type': 'application/json',
    }

    const { statusCode, body } = await this.httpClient.request({
      method: 'get',
      url: `${this.url}/${period}`,
      headers,
    })

    if (statusCode === HttpStatusCode.ok) {
      return body
    } else {
      throw new Error()
    }
  }
}
