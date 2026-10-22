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

// POST /get-decrypt-data request body
export type DecryptInput = {
  data1: string
  data2: string
}

export type DecryptData = {
  payload: string
}

// POST /get-decrypt-data response envelope
export type DecryptResponse = {
  successful: boolean
  error_code: string
  data: DecryptData
}
