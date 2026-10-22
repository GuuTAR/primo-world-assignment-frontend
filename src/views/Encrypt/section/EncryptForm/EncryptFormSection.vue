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
const { result, isEncrypting } = storeToRefs(encryptStore)
const { encryptPayload, resetResult } = encryptStore

const payload = ref('')

const isPayloadTooLong = computed(() => payload.value.length > PAYLOAD_MAX_LENGTH)
const isEncryptDisabled = computed(() => isPayloadTooLong.value || isEncrypting.value)
const isClearDisabled = computed(() => (!payload.value && !result.value) || isEncrypting.value)

async function handleEncrypt(): Promise<void> {
  if (isEncryptDisabled.value) return
  await encryptPayload(payload.value)
}

function handleClear(): void {
  payload.value = ''
  resetResult()
}

const PAYLOAD_MAX_LENGTH = 2000
</script>

<template>
  <FlexStack class="encrypt-page__form-section">
    <label for="encrypt-payload" class="encrypt-page__form-label">
      <TextVariant variant="body2" :bold="true">
        {{ Languages.PAYLOAD_LABEL[language] }}
      </TextVariant>
    </label>
    <Textarea
      id="encrypt-payload"
      v-model="payload"
      :placeholder="Languages.PLACEHOLDER[language]"
      :maxlength="PAYLOAD_MAX_LENGTH"
      :invalid="isPayloadTooLong"
      :rows="6"
      aria-describedby="encrypt-payload-count"
      auto-resize
      fluid
      @keydown.ctrl.enter="handleEncrypt"
      @keydown.meta.enter="handleEncrypt"
      class="encrypt-page__form-input"
    />
    <FlexStack class="encrypt-page__form-footer">
      <TextVariant
        id="encrypt-payload-count"
        variant="caption"
        aria-live="polite"
        class="encrypt-page__form-count"
      >
        {{ payload.length }} / {{ PAYLOAD_MAX_LENGTH }}
      </TextVariant>
      <FlexStack class="encrypt-page__form-actions">
        <Button
          :label="Languages.CLEAR[language]"
          :disabled="isClearDisabled"
          severity="secondary"
          variant="text"
          @click="handleClear"
          class="encrypt-page__form-clear-button"
        />
        <Button
          :label="Languages.ENCRYPT[language]"
          :disabled="isEncryptDisabled"
          :loading="isEncrypting"
          icon="pi pi-lock"
          @click="handleEncrypt"
          class="encrypt-page__form-encrypt-button"
        />
      </FlexStack>
    </FlexStack>
  </FlexStack>
</template>

<style scoped>
.encrypt-page__form-section {
  flex-direction: column;
  gap: var(--app-spacing-3);
  padding: var(--app-spacing-5);
  border-radius: 18px;
  background: var(--p-primary-0);
  box-shadow: 0 1px 2px rgb(11 27 59 / 4%);
}

.encrypt-page__form-input {
  resize: vertical;
}

.encrypt-page__form-footer {
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--app-spacing-3);
}

.encrypt-page__form-count {
  color: var(--p-text-muted-color);
}

.encrypt-page__form-actions {
  gap: var(--app-spacing-2);
}
</style>
