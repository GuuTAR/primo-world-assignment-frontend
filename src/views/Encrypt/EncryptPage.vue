<script setup lang="ts">
import { onUnmounted } from 'vue'

import { storeToRefs } from 'pinia'

import { useAppDataStore } from '@/stores/appData'
import { useEncryptStore } from '@/stores/encrypt'

import FlexStack from '@/components/core/FlexStack/FlexStack.vue'
import TextVariant from '@/components/core/TextVariant/TextVariant.vue'

import EncryptFormSection from '@/views/Encrypt/section/EncryptForm/EncryptFormSection.vue'
import EncryptResultSection from '@/views/Encrypt/section/EncryptResult/EncryptResultSection.vue'

import * as Languages from './lang'

const { language } = storeToRefs(useAppDataStore())
const { resetResult } = useEncryptStore()

onUnmounted(() => {
  resetResult()
})
</script>

<template>
  <main class="encrypt-page">
    <FlexStack class="encrypt-page__content">
      <header class="encrypt-page__header">
        <TextVariant variant="h5" :bold="true" class="encrypt-page__title">
          {{ Languages.TITLE[language] }}
        </TextVariant>
        <TextVariant variant="body2" class="encrypt-page__description">
          {{ Languages.DESCRIPTION[language] }}
        </TextVariant>
      </header>

      <EncryptFormSection />
      <EncryptResultSection />
    </FlexStack>
  </main>
</template>

<style scoped>
.encrypt-page {
  padding: var(--app-spacing-6);
}

.encrypt-page__content {
  flex-direction: column;
  gap: var(--app-spacing-4);
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.encrypt-page__description {
  color: var(--p-text-muted-color);
}

@media (max-width: 600px) {
  .encrypt-page {
    padding: var(--app-spacing-4);
  }
}
</style>
