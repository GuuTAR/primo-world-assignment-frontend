import { isAxiosError, type AxiosResponse } from 'axios'

import { STATUS_CODE } from '@/enum/global'
import type { MergeData, MergeInput, MergeOutcome } from '@/types/Algorithm'
import type { ResponseData } from '@/types/ResponseData'

import type { ApiService } from '@/services/apiService'

export class AlgorithmAPI {
  private api: ApiService

  constructor(apiService: ApiService) {
    this.api = apiService
  }

  public merge = async (mergeInput: MergeInput): Promise<MergeOutcome> => {
    try {
      const result: AxiosResponse<ResponseData<MergeData>> = await this.api.post<
        ResponseData<MergeData>,
        MergeInput
      >('/merge', mergeInput)
      if (result.status === STATUS_CODE.OK) {
        return { result: result.data.body.result, message: result.data.message }
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      // A 400 response explains which collection is invalid, so pass its message on
      const message = isAxiosError<{ message?: string }>(error)
        ? (error.response?.data?.message ?? '')
        : ''
      console.error('Error in POST /merge:', message || (error as Error).message)
      return { result: null, message }
    }
  }
}
