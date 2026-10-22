<script setup lang="ts">
import { computed, ref } from 'vue'

import { storeToRefs } from 'pinia'

import Button from 'primevue/button'
import Textarea from 'primevue/textarea'

import { useAppDataStore } from '@/stores/appData'
import { useEncryptStore } from '@/stores/encrypt'

import FlexStack from '@/components/core/FlexStack/FlexStack.vue'
import TextVariant from '@/components/core/TextVariant/TextVariant.vue'

import * as Languages from './lang'

const { language } = storeToRefs(useAppDataStore())
const encryptStore = useEncryptStore()
const { decryptResult, isDecrypting } = storeToRefs(encryptStore)
const { decryptData, resetDecryptResult } = encryptStore

const data1 = ref('')
const data2 = ref('')

const isDecryptDisabled = computed(
  () => !data1.value.trim() || !data2.value.trim() || isDecrypting.value,
)
const isClearDisabled = computed(
  () => (!data1.value && !data2.value && !decryptResult.value) || isDecrypting.value,
)

async function handleDecrypt(): Promise<void> {
  if (isDecryptDisabled.value) return
  await decryptData(data1.value.trim(), data2.value.trim())
}

function handleClear(): void {
  data1.value = ''
  data2.value = ''
  resetDecryptResult()
}
</script>

<template>
  <FlexStack class="rsa-page__decrypt-form-section">
    <TextVariant variant="h6" class="rsa-page__decrypt-form-title">
      {{ Languages.FORM_TITLE[language] }}
    </TextVariant>
    <FlexStack class="rsa-page__decrypt-form-field">
      <label for="decrypt-data1" class="rsa-page__decrypt-form-label">
        <TextVariant variant="body2" :bold="true">
          {{ Languages.DATA1_LABEL[language] }}
        </TextVariant>
      </label>
      <Textarea
        id="decrypt-data1"
        v-model="data1"
        :placeholder="Languages.DATA1_PLACEHOLDER[language]"
        :rows="3"
        auto-resize
        fluid
        @keydown.ctrl.enter="handleDecrypt"
        @keydown.meta.enter="handleDecrypt"
        class="rsa-page__decrypt-form-input"
      />
    </FlexStack>
    <FlexStack class="rsa-page__decrypt-form-field">
      <label for="decrypt-data2" class="rsa-page__decrypt-form-label">
        <TextVariant variant="body2" :bold="true">
          {{ Languages.DATA2_LABEL[language] }}
        </TextVariant>
      </label>
      <Textarea
        id="decrypt-data2"
        v-model="data2"
        :placeholder="Languages.DATA2_PLACEHOLDER[language]"
        :rows="3"
        auto-resize
        fluid
        @keydown.ctrl.enter="handleDecrypt"
        @keydown.meta.enter="handleDecrypt"
        class="rsa-page__decrypt-form-input"
      />
    </FlexStack>
    <FlexStack class="rsa-page__decrypt-form-actions">
      <Button
        :label="Languages.CLEAR[language]"
        :disabled="isClearDisabled"
        severity="secondary"
        variant="text"
        @click="handleClear"
        class="rsa-page__decrypt-form-clear-button"
      />
      <Button
        :label="Languages.DECRYPT[language]"
        :disabled="isDecryptDisabled"
        :loading="isDecrypting"
        icon="pi pi-lock-open"
        @click="handleDecrypt"
        class="rsa-page__decrypt-form-decrypt-button"
      />
    </FlexStack>
  </FlexStack>
</template>

<style scoped>
.rsa-page__decrypt-form-section {
  flex-direction: column;
  gap: var(--app-spacing-3);
  padding: var(--app-spacing-5);
  border-radius: 18px;
  background: var(--p-primary-0);
  box-shadow: 0 1px 2px rgb(11 27 59 / 4%);
}

.rsa-page__decrypt-form-field {
  flex-direction: column;
  gap: var(--app-spacing-2);
}

.rsa-page__decrypt-form-input {
  resize: vertical;
}

.rsa-page__decrypt-form-actions {
  justify-content: flex-end;
  gap: var(--app-spacing-2);
}
</style>
