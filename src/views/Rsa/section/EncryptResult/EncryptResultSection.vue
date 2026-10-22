<script setup lang="ts">
import { computed } from 'vue'

import { storeToRefs } from 'pinia'

import Button from 'primevue/button'

import { useAppDataStore } from '@/stores/appData'
import { useEncryptStore } from '@/stores/encrypt'

import FlexStack from '@/components/core/FlexStack/FlexStack.vue'
import TextVariant from '@/components/core/TextVariant/TextVariant.vue'

import * as Languages from './lang'

const { language } = storeToRefs(useAppDataStore())
const encryptStore = useEncryptStore()
const { encryptResult } = storeToRefs(encryptStore)
const { copyToClipboard } = encryptStore

const resultItems = computed(() =>
  encryptResult.value
    ? [
        {
          key: 'data1',
          label: Languages.DATA1_LABEL[language.value],
          description: Languages.DATA1_DESCRIPTION[language.value],
          value: encryptResult.value.data1,
        },
        {
          key: 'data2',
          label: Languages.DATA2_LABEL[language.value],
          description: Languages.DATA2_DESCRIPTION[language.value],
          value: encryptResult.value.data2,
        },
      ]
    : [],
)
</script>

<template>
  <FlexStack class="rsa-page__result-section">
    <TextVariant variant="h6" class="rsa-page__result-title">
      {{ Languages.RESULT_TITLE[language] }}
    </TextVariant>

    <ul v-if="resultItems.length > 0" class="rsa-page__result-list">
      <li v-for="item in resultItems" :key="item.key" class="rsa-page__result-item">
        <FlexStack class="rsa-page__result-item-header">
          <FlexStack class="rsa-page__result-item-heading">
            <TextVariant variant="body2" :bold="true" class="rsa-page__result-item-label">
              {{ item.label }}
            </TextVariant>
            <TextVariant variant="caption" class="rsa-page__result-item-description">
              {{ item.description }}
            </TextVariant>
          </FlexStack>
          <Button
            :label="Languages.COPY[language]"
            :aria-label="`${Languages.COPY[language]} ${item.label}`"
            icon="pi pi-copy"
            severity="secondary"
            variant="text"
            size="small"
            @click="copyToClipboard(item.value)"
            class="rsa-page__result-item-copy-button"
          />
        </FlexStack>
        <code class="rsa-page__result-item-code">{{ item.value }}</code>
      </li>
    </ul>

    <FlexStack v-else class="rsa-page__result-empty">
      <TextVariant variant="body2" :bold="true" class="rsa-page__result-empty-title">
        {{ Languages.EMPTY_TITLE[language] }}
      </TextVariant>
      <TextVariant variant="caption" class="rsa-page__result-empty-description">
        {{ Languages.EMPTY_DESCRIPTION[language] }}
      </TextVariant>
    </FlexStack>
  </FlexStack>
</template>

<style scoped>
.rsa-page__result-section {
  flex-direction: column;
  gap: var(--app-spacing-4);
  padding: var(--app-spacing-5);
  border-radius: 18px;
  background: var(--p-primary-0);
  box-shadow: 0 1px 2px rgb(11 27 59 / 4%);
}

.rsa-page__result-list {
  display: flex;
  flex-direction: column;
  gap: var(--app-spacing-4);
  margin: 0;
  padding: var(--app-spacing-0);
  list-style: none;
}

.rsa-page__result-item {
  display: flex;
  flex-direction: column;
  gap: var(--app-spacing-2);
}

.rsa-page__result-item-header {
  justify-content: space-between;
  align-items: center;
  gap: var(--app-spacing-2);
}

.rsa-page__result-item-heading {
  flex-direction: column;
  min-width: 0;
}

.rsa-page__result-item-description {
  color: var(--p-text-muted-color);
}

.rsa-page__result-item-code {
  display: block;
  padding: var(--app-spacing-3);
  border-radius: 12px;
  background: var(--p-primary-50);
  color: var(--p-primary-900);
  font-size: 13px;
  line-height: 1.5;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.rsa-page__result-empty {
  flex-direction: column;
  gap: var(--app-spacing-1);
}

.rsa-page__result-empty-description {
  color: var(--p-text-muted-color);
}
</style>
