import type { AxiosResponse } from 'axios'

import { STATUS_CODE } from '@/enum/global'
import type {
  DecryptData,
  DecryptInput,
  DecryptResponse,
  EncryptData,
  EncryptInput,
  EncryptResponse,
} from '@/types/Encrypt'

import type { ApiService } from '@/services/apiService'

export class EncryptAPI {
  private api: ApiService

  constructor(apiService: ApiService) {
    this.api = apiService
  }

  public getEncryptData = async (encryptInput: EncryptInput): Promise<EncryptData | null> => {
    try {
      const result: AxiosResponse<EncryptResponse> = await this.api.post<
        EncryptResponse,
        EncryptInput
      >('/get-encrypt-data', encryptInput)
      if (result.status === STATUS_CODE.OK && result.data.successful) {
        return result.data.data
      }
      throw new Error(`Unexpected response: ${result.status} ${result.data.error_code}`)
    } catch (error) {
      console.error('Error in POST /get-encrypt-data:', (error as Error).message)
      return null
    }
  }

  public getDecryptData = async (decryptInput: DecryptInput): Promise<DecryptData | null> => {
    try {
      const result: AxiosResponse<DecryptResponse> = await this.api.post<
        DecryptResponse,
        DecryptInput
      >('/get-decrypt-data', decryptInput)
      if (result.status === STATUS_CODE.OK && result.data.successful) {
        return result.data.data
      }
      throw new Error(`Unexpected response: ${result.status} ${result.data.error_code}`)
    } catch (error) {
      console.error('Error in POST /get-decrypt-data:', (error as Error).message)
      return null
    }
  }
}
