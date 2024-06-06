import axios, { AxiosResponse } from 'axios'

import { DummyModel } from '../types/dummyModel'

export type IConsoleClient = {
  listDummy(): Promise<DummyModel[]>
}

export class ConsoleClient implements IConsoleClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async listDummy(): Promise<DummyModel[]> {
    const url = `${this.baseUrl}/users`

    try {
      const response = await this.get(url)
      return response.data as DummyModel[]
    } catch (error) {
      throw new Error(`Error fetching users: ${error}`)
    }
  }

  private async get(url: string): Promise<AxiosResponse> {
    return axios.get(url)
  }

  private async post(url: string): Promise<AxiosResponse> {
    return axios.post(url)
  }

  private async delete(url: string): Promise<AxiosResponse> {
    return axios.delete(url)
  }

  private async patch(url: string): Promise<AxiosResponse> {
    return axios.patch(url)
  }
}
