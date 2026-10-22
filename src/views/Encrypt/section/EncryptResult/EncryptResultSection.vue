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
const { result } = storeToRefs(encryptStore)
const { copyToClipboard } = encryptStore

const resultItems = computed(() =>
  result.value
    ? [
        {
          key: 'data1',
          label: Languages.DATA1_LABEL[language.value],
          description: Languages.DATA1_DESCRIPTION[language.value],
          value: result.value.data1,
        },
        {
          key: 'data2',
          label: Languages.DATA2_LABEL[language.value],
          description: Languages.DATA2_DESCRIPTION[language.value],
          value: result.value.data2,
        },
      ]
    : [],
)
</script>

<template>
  <FlexStack class="encrypt-page__result-section">
    <TextVariant variant="h6" class="encrypt-page__result-title">
      {{ Languages.RESULT_TITLE[language] }}
    </TextVariant>

    <ul v-if="resultItems.length > 0" class="encrypt-page__result-list">
      <li v-for="item in resultItems" :key="item.key" class="encrypt-page__result-item">
        <FlexStack class="encrypt-page__result-item-header">
          <FlexStack class="encrypt-page__result-item-heading">
            <TextVariant variant="body2" :bold="true" class="encrypt-page__result-item-label">
              {{ item.label }}
            </TextVariant>
            <TextVariant variant="caption" class="encrypt-page__result-item-description">
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
            class="encrypt-page__result-item-copy-button"
          />
        </FlexStack>
        <code class="encrypt-page__result-item-code">{{ item.value }}</code>
      </li>
    </ul>

    <FlexStack v-else class="encrypt-page__result-empty">
      <TextVariant variant="body2" :bold="true" class="encrypt-page__result-empty-title">
        {{ Languages.EMPTY_TITLE[language] }}
      </TextVariant>
      <TextVariant variant="caption" class="encrypt-page__result-empty-description">
        {{ Languages.EMPTY_DESCRIPTION[language] }}
      </TextVariant>
    </FlexStack>
  </FlexStack>
</template>

<style scoped>
.encrypt-page__result-section {
  flex-direction: column;
  gap: var(--app-spacing-4);
  padding: var(--app-spacing-5);
  border-radius: 18px;
  background: var(--p-primary-0);
  box-shadow: 0 1px 2px rgb(11 27 59 / 4%);
}

.encrypt-page__result-list {
  display: flex;
  flex-direction: column;
  gap: var(--app-spacing-4);
  margin: 0;
  padding: var(--app-spacing-0);
  list-style: none;
}

.encrypt-page__result-item {
  display: flex;
  flex-direction: column;
  gap: var(--app-spacing-2);
}

.encrypt-page__result-item-header {
  justify-content: space-between;
  align-items: center;
  gap: var(--app-spacing-2);
}

.encrypt-page__result-item-heading {
  flex-direction: column;
  min-width: 0;
}

.encrypt-page__result-item-description {
  color: var(--p-text-muted-color);
}

.encrypt-page__result-item-code {
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

.encrypt-page__result-empty {
  flex-direction: column;
  gap: var(--app-spacing-1);
}

.encrypt-page__result-empty-description {
  color: var(--p-text-muted-color);
}
</style>
