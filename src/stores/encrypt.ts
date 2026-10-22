import { ref } from 'vue'

import { defineStore } from 'pinia'

import { useToast } from 'primevue'

import { LANGUAGE } from '@/enum/global'
import type { DecryptData, EncryptData } from '@/types/Encrypt'

import {
  COPY_FAILURE_MESSAGE,
  COPY_SUCCESS_MESSAGE,
  DECRYPT_FAILURE_MESSAGE,
  DECRYPT_SUCCESS_MESSAGE,
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

  const encryptResult = ref<EncryptData | null>(null)
  const decryptResult = ref<DecryptData | null>(null)
  const isEncrypting = ref(false)
  const isDecrypting = ref(false)

  const showToast = (severity: 'success' | 'error', message: Record<LANGUAGE, string>) => {
    toast.add({ severity, summary: message[appData.language], life: 3000 })
  }

  const encryptPayload = async (payload: string) => {
    isEncrypting.value = true
    const encryptData = await encryptApi.getEncryptData({ payload })
    isEncrypting.value = false
    if (!encryptData) return showToast('error', ENCRYPT_FAILURE_MESSAGE)
    encryptResult.value = encryptData
    showToast('success', ENCRYPT_SUCCESS_MESSAGE)
  }

  const decryptData = async (data1: string, data2: string) => {
    isDecrypting.value = true
    const decrypted = await encryptApi.getDecryptData({ data1, data2 })
    isDecrypting.value = false
    if (!decrypted) return showToast('error', DECRYPT_FAILURE_MESSAGE)
    decryptResult.value = decrypted
    showToast('success', DECRYPT_SUCCESS_MESSAGE)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast('success', COPY_SUCCESS_MESSAGE)
    } catch {
      showToast('error', COPY_FAILURE_MESSAGE)
    }
  }

  const resetEncryptResult = () => {
    encryptResult.value = null
  }

  const resetDecryptResult = () => {
    decryptResult.value = null
  }

  return {
    encryptResult,
    decryptResult,
    isEncrypting,
    isDecrypting,
    encryptPayload,
    decryptData,
    copyToClipboard,
    resetEncryptResult,
    resetDecryptResult,
  }
})
