import axios from 'axios'
import { DummyModel } from '../types/dummyModel'

export interface IConsoleClient {
  listDummy() : Promise<DummyModel[]> 
}

export class ConsoleClient implements IConsoleClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async listDummy(): Promise<DummyModel[]> {
    const url = `${this.baseUrl}/users`;

    try {
      const response = await this.get(url)
      return response.data as DummyModel[]
    } catch (error) {
      throw new Error(`Error fetching users: ${error}`)
    }
  }

  private async get (url: string) {
    return await axios.get(url)
  }

  private async post (url: string) {
    return await axios.post(url)
  }

  private async delete (url: string) {
    return await axios.delete(url)
  }

  private async patch (url: string) {
    return await axios.patch(url)
  }
}
  