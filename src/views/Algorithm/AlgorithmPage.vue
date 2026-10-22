<script setup lang="ts">
import { onUnmounted } from 'vue'

import { storeToRefs } from 'pinia'

import { useAlgorithmStore } from '@/stores/algorithm'
import { useAppDataStore } from '@/stores/appData'

import FlexStack from '@/components/core/FlexStack/FlexStack.vue'
import TextVariant from '@/components/core/TextVariant/TextVariant.vue'

import MergeFormSection from '@/views/Algorithm/section/MergeForm/MergeFormSection.vue'
import MergeResultSection from '@/views/Algorithm/section/MergeResult/MergeResultSection.vue'

import * as Languages from './lang'

const { language } = storeToRefs(useAppDataStore())
const { resetMergeResult } = useAlgorithmStore()

onUnmounted(() => {
  resetMergeResult()
})
</script>

<template>
  <main class="algorithm-page">
    <FlexStack class="algorithm-page__content">
      <header class="algorithm-page__header">
        <TextVariant variant="h5" :bold="true" class="algorithm-page__title">
          {{ Languages.TITLE[language] }}
        </TextVariant>
        <TextVariant variant="body2" class="algorithm-page__description">
          {{ Languages.DESCRIPTION[language] }}
        </TextVariant>
      </header>

      <MergeFormSection />
      <MergeResultSection />
    </FlexStack>
  </main>
</template>

<style scoped>
.algorithm-page {
  padding: var(--app-spacing-6);
}

.algorithm-page__content {
  flex-direction: column;
  gap: var(--app-spacing-4);
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.algorithm-page__description {
  color: var(--p-text-muted-color);
}

@media (max-width: 600px) {
  .algorithm-page {
    padding: var(--app-spacing-4);
  }
}
</style>
