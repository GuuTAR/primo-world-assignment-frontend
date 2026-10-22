import { ref } from 'vue'

import { defineStore } from 'pinia'

import { useToast } from 'primevue'

import { LANGUAGE } from '@/enum/global'
import type { EncryptData } from '@/types/Encrypt'

import {
  COPY_FAILURE_MESSAGE,
  COPY_SUCCESS_MESSAGE,
  ENCRYPT_FAILURE_MESSAGE,
  ENCRYPT_SUCCESS_MESSAGE,
} from '@/lang/encrypt'

import { useAppDataStore } from '@/stores/appData'

import { EncryptAPI } from '@/api/encryptApi'
import { apiService } from '@/services/apiService'

const encryptApi = new EncryptAPI(apiService)

export const useEncryptStore = defineStore('encrypt', () => {
  const appData = useAppDataStore()
  const toast = useToast()

  const result = ref<EncryptData | null>(null)
  const isEncrypting = ref(false)

  const showToast = (severity: 'success' | 'error', message: Record<LANGUAGE, string>) => {
    toast.add({ severity, summary: message[appData.language], life: 3000 })
  }

  const encryptPayload = async (payload: string) => {
    isEncrypting.value = true
    const encryptData = await encryptApi.getEncryptData({ payload })
    isEncrypting.value = false
    if (!encryptData) return showToast('error', ENCRYPT_FAILURE_MESSAGE)
    result.value = encryptData
    showToast('success', ENCRYPT_SUCCESS_MESSAGE)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast('success', COPY_SUCCESS_MESSAGE)
    } catch {
      showToast('error', COPY_FAILURE_MESSAGE)
    }
  }

  const resetResult = () => {
    result.value = null
  }

  return { result, isEncrypting, encryptPayload, copyToClipboard, resetResult }
})
