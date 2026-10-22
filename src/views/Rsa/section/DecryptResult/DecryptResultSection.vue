<script setup lang="ts">
import { storeToRefs } from 'pinia'

import Button from 'primevue/button'

import { useAppDataStore } from '@/stores/appData'
import { useEncryptStore } from '@/stores/encrypt'

import FlexStack from '@/components/core/FlexStack/FlexStack.vue'
import TextVariant from '@/components/core/TextVariant/TextVariant.vue'

import * as Languages from './lang'

const { language } = storeToRefs(useAppDataStore())
const encryptStore = useEncryptStore()
const { decryptResult } = storeToRefs(encryptStore)
const { copyToClipboard } = encryptStore
</script>

<template>
  <FlexStack class="rsa-page__decrypt-result-section">
    <TextVariant variant="h6" class="rsa-page__decrypt-result-title">
      {{ Languages.RESULT_TITLE[language] }}
    </TextVariant>

    <FlexStack v-if="decryptResult" class="rsa-page__decrypt-result-item">
      <FlexStack class="rsa-page__decrypt-result-item-header">
        <FlexStack class="rsa-page__decrypt-result-item-heading">
          <TextVariant variant="body2" :bold="true" class="rsa-page__decrypt-result-item-label">
            {{ Languages.PAYLOAD_LABEL[language] }}
          </TextVariant>
          <TextVariant variant="caption" class="rsa-page__decrypt-result-item-description">
            {{ Languages.PAYLOAD_DESCRIPTION[language] }}
          </TextVariant>
        </FlexStack>
        <Button
          :label="Languages.COPY[language]"
          :aria-label="`${Languages.COPY[language]} ${Languages.PAYLOAD_LABEL[language]}`"
          icon="pi pi-copy"
          severity="secondary"
          variant="text"
          size="small"
          @click="copyToClipboard(decryptResult.payload)"
          class="rsa-page__decrypt-result-item-copy-button"
        />
      </FlexStack>
      <code class="rsa-page__decrypt-result-item-code">{{ decryptResult.payload }}</code>
    </FlexStack>

    <FlexStack v-else class="rsa-page__decrypt-result-empty">
      <TextVariant variant="body2" :bold="true" class="rsa-page__decrypt-result-empty-title">
        {{ Languages.EMPTY_TITLE[language] }}
      </TextVariant>
      <TextVariant variant="caption" class="rsa-page__decrypt-result-empty-description">
        {{ Languages.EMPTY_DESCRIPTION[language] }}
      </TextVariant>
    </FlexStack>
  </FlexStack>
</template>

<style scoped>
.rsa-page__decrypt-result-section {
  flex-direction: column;
  gap: var(--app-spacing-4);
  padding: var(--app-spacing-5);
  border-radius: 18px;
  background: var(--p-primary-0);
  box-shadow: 0 1px 2px rgb(11 27 59 / 4%);
}

.rsa-page__decrypt-result-item {
  flex-direction: column;
  gap: var(--app-spacing-2);
}

.rsa-page__decrypt-result-item-header {
  justify-content: space-between;
  align-items: center;
  gap: var(--app-spacing-2);
}

.rsa-page__decrypt-result-item-heading {
  flex-direction: column;
  min-width: 0;
}

.rsa-page__decrypt-result-item-description {
  color: var(--p-text-muted-color);
}

.rsa-page__decrypt-result-item-code {
  display: block;
  min-height: 1.5em;
  padding: var(--app-spacing-3);
  border-radius: 12px;
  background: var(--p-primary-50);
  color: var(--p-primary-900);
  font-size: 13px;
  line-height: 1.5;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.rsa-page__decrypt-result-empty {
  flex-direction: column;
  gap: var(--app-spacing-1);
}

.rsa-page__decrypt-result-empty-description {
  color: var(--p-text-muted-color);
}
</style>
