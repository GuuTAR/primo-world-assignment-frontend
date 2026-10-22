<script setup lang="ts">
import { computed, ref } from 'vue'

import { storeToRefs } from 'pinia'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import type { MergeInput } from '@/types/Algorithm'

import { useAlgorithmStore } from '@/stores/algorithm'
import { useAppDataStore } from '@/stores/appData'

import FlexStack from '@/components/core/FlexStack/FlexStack.vue'
import TextVariant from '@/components/core/TextVariant/TextVariant.vue'

import * as Languages from './lang'

const { language } = storeToRefs(useAppDataStore())
const algorithmStore = useAlgorithmStore()
const { mergeResult, isMerging } = storeToRefs(algorithmStore)
const { mergeCollections, resetMergeResult } = algorithmStore

const collections = ref<Record<keyof MergeInput, string>>({
  collection_1: '',
  collection_2: '',
  collection_3: '',
})

const parsedCollections = computed(
  () =>
    Object.fromEntries(
      COLLECTION_KEYS.map((key) => [key, parseCollection(collections.value[key])]),
    ) as Record<keyof MergeInput, number[] | null>,
)
const isMergeDisabled = computed(
  () => COLLECTION_KEYS.some((key) => !parsedCollections.value[key]) || isMerging.value,
)
const isClearDisabled = computed(
  () =>
    (COLLECTION_KEYS.every((key) => !collections.value[key]) && !mergeResult.value) ||
    isMerging.value,
)

// Accepts integers separated by commas and/or spaces; an empty field is an empty collection
function parseCollection(value: string): number[] | null {
  const tokens = value.split(/[\s,]+/).filter(Boolean)
  if (!tokens.every((token) => INTEGER_PATTERN.test(token))) return null
  return tokens.map(Number)
}

async function handleMerge(): Promise<void> {
  if (isMergeDisabled.value) return
  const { collection_1, collection_2, collection_3 } = parsedCollections.value
  if (!collection_1 || !collection_2 || !collection_3) return
  await mergeCollections({ collection_1, collection_2, collection_3 })
}

function handleClear(): void {
  COLLECTION_KEYS.forEach((key) => (collections.value[key] = ''))
  resetMergeResult()
}

const COLLECTION_KEYS: (keyof MergeInput)[] = ['collection_1', 'collection_2', 'collection_3']
const INTEGER_PATTERN = /^-?\d+$/
</script>

<template>
  <FlexStack class="algorithm-page__merge-form-section">
    <TextVariant variant="h6" class="algorithm-page__merge-form-title">
      {{ Languages.FORM_TITLE[language] }}
    </TextVariant>
    <FlexStack v-for="key in COLLECTION_KEYS" :key="key" class="algorithm-page__merge-form-field">
      <label :for="`merge-${key}`" class="algorithm-page__merge-form-label">
        <TextVariant variant="body2" :bold="true">
          {{ Languages.COLLECTION_LABEL[key][language] }}
        </TextVariant>
        <TextVariant variant="caption" class="algorithm-page__merge-form-hint">
          {{ Languages.COLLECTION_HINT[key][language] }}
        </TextVariant>
      </label>
      <InputText
        :id="`merge-${key}`"
        v-model="collections[key]"
        :placeholder="Languages.COLLECTION_PLACEHOLDER[key]"
        :invalid="!parsedCollections[key]"
        :aria-describedby="!parsedCollections[key] ? `merge-${key}-error` : undefined"
        inputmode="numeric"
        fluid
        @keydown.enter="handleMerge"
        class="algorithm-page__merge-form-input"
      />
      <TextVariant
        v-if="!parsedCollections[key]"
        :id="`merge-${key}-error`"
        variant="caption"
        class="algorithm-page__merge-form-error"
      >
        {{ Languages.INVALID_COLLECTION[language] }}
      </TextVariant>
    </FlexStack>
    <FlexStack class="algorithm-page__merge-form-actions">
      <Button
        :label="Languages.CLEAR[language]"
        :disabled="isClearDisabled"
        severity="secondary"
        variant="text"
        @click="handleClear"
        class="algorithm-page__merge-form-clear-button"
      />
      <Button
        :label="Languages.MERGE[language]"
        :disabled="isMergeDisabled"
        :loading="isMerging"
        icon="pi pi-sort-amount-up-alt"
        @click="handleMerge"
        class="algorithm-page__merge-form-merge-button"
      />
    </FlexStack>
  </FlexStack>
</template>

<style scoped>
.algorithm-page__merge-form-section {
  flex-direction: column;
  gap: var(--app-spacing-3);
  padding: var(--app-spacing-5);
  border-radius: 18px;
  background: var(--p-primary-0);
  box-shadow: 0 1px 2px rgb(11 27 59 / 4%);
}

.algorithm-page__merge-form-field {
  flex-direction: column;
  gap: var(--app-spacing-2);
}

.algorithm-page__merge-form-label {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--app-spacing-2);
}

.algorithm-page__merge-form-hint {
  color: var(--p-text-muted-color);
}

.algorithm-page__merge-form-error {
  color: var(--p-red-500);
}

.algorithm-page__merge-form-actions {
  justify-content: flex-end;
  gap: var(--app-spacing-2);
}
</style>
