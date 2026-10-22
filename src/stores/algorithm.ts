import { ref } from 'vue'

import { defineStore } from 'pinia'

import { useToast } from 'primevue'

import { LANGUAGE } from '@/enum/global'
import type { MergeInput } from '@/types/Algorithm'

import { MERGE_FAILURE_MESSAGE, MERGE_SUCCESS_MESSAGE } from '@/lang/algorithm'

import { useAppDataStore } from '@/stores/appData'

import { AlgorithmAPI } from '@/api/algorithmApi'
import { apiService } from '@/services/apiService'

const algorithmApi = new AlgorithmAPI(apiService)

export const useAlgorithmStore = defineStore('algorithm', () => {
  const appData = useAppDataStore()
  const toast = useToast()

  const mergeResult = ref<number[] | null>(null)
  const isMerging = ref(false)

  const showToast = (
    severity: 'success' | 'error',
    message: Record<LANGUAGE, string>,
    detail?: string,
  ) => {
    toast.add({ severity, summary: message[appData.language], detail, life: 3000 })
  }

  const mergeCollections = async (mergeInput: MergeInput) => {
    isMerging.value = true
    const { result, message } = await algorithmApi.merge(mergeInput)
    isMerging.value = false
    if (!result) return showToast('error', MERGE_FAILURE_MESSAGE, message || undefined)
    mergeResult.value = result
    showToast('success', MERGE_SUCCESS_MESSAGE)
  }

  const resetMergeResult = () => {
    mergeResult.value = null
  }

  return { mergeResult, isMerging, mergeCollections, resetMergeResult }
})
