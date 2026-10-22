// POST /merge request body
export type MergeInput = {
  collection_1: number[]
  collection_2: number[]
  collection_3: number[]
}

export type MergeData = {
  result: number[]
}

// result is null when the request failed; message is the server's message when it sent one
export type MergeOutcome = {
  result: number[] | null
  message: string
}
