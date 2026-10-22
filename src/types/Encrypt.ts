// POST /get-encrypt-data request body
export type EncryptInput = {
  payload: string
}

export type EncryptData = {
  data1: string
  data2: string
}

// POST /get-encrypt-data response envelope
export type EncryptResponse = {
  successful: boolean
  error_code: string
  data: EncryptData
}
