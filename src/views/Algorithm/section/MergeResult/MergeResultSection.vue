<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAlgorithmStore } from '@/stores/algorithm'
import { useAppDataStore } from '@/stores/appData'

import FlexStack from '@/components/core/FlexStack/FlexStack.vue'
import TextVariant from '@/components/core/TextVariant/TextVariant.vue'

import * as Languages from './lang'

const { language } = storeToRefs(useAppDataStore())
const { mergeResult } = storeToRefs(useAlgorithmStore())
</script>

<template>
  <FlexStack class="algorithm-page__merge-result-section">
    <TextVariant variant="h6" class="algorithm-page__merge-result-title">
      {{ Languages.RESULT_TITLE[language] }}
    </TextVariant>

    <FlexStack v-if="mergeResult" class="algorithm-page__merge-result-item">
      <TextVariant variant="caption" class="algorithm-page__merge-result-count">
        {{ Languages.RESULT_COUNT[language](mergeResult.length) }}
      </TextVariant>
      <code class="algorithm-page__merge-result-code">[{{ mergeResult.join(', ') }}]</code>
    </FlexStack>

    <FlexStack v-else class="algorithm-page__merge-result-empty">
      <TextVariant variant="body2" :bold="true" class="algorithm-page__merge-result-empty-title">
        {{ Languages.EMPTY_TITLE[language] }}
      </TextVariant>
      <TextVariant variant="caption" class="algorithm-page__merge-result-empty-description">
        {{ Languages.EMPTY_DESCRIPTION[language] }}
      </TextVariant>
    </FlexStack>
  </FlexStack>
</template>

<style scoped>
.algorithm-page__merge-result-section {
  flex-direction: column;
  gap: var(--app-spacing-4);
  padding: var(--app-spacing-5);
  border-radius: 18px;
  background: var(--p-primary-0);
  box-shadow: 0 1px 2px rgb(11 27 59 / 4%);
}

.algorithm-page__merge-result-item {
  flex-direction: column;
  gap: var(--app-spacing-2);
}

.algorithm-page__merge-result-count {
  color: var(--p-text-muted-color);
}

.algorithm-page__merge-result-code {
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

.algorithm-page__merge-result-empty {
  flex-direction: column;
  gap: var(--app-spacing-1);
}

.algorithm-page__merge-result-empty-description {
  color: var(--p-text-muted-color);
}
</style>
