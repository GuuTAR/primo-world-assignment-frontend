<script setup lang="ts">
import { onUnmounted } from 'vue'

import { storeToRefs } from 'pinia'

import { useAppDataStore } from '@/stores/appData'
import { useEncryptStore } from '@/stores/encrypt'

import FlexStack from '@/components/core/FlexStack/FlexStack.vue'
import TextVariant from '@/components/core/TextVariant/TextVariant.vue'

import DecryptFormSection from '@/views/Rsa/section/DecryptForm/DecryptFormSection.vue'
import DecryptResultSection from '@/views/Rsa/section/DecryptResult/DecryptResultSection.vue'
import EncryptFormSection from '@/views/Rsa/section/EncryptForm/EncryptFormSection.vue'
import EncryptResultSection from '@/views/Rsa/section/EncryptResult/EncryptResultSection.vue'

import * as Languages from './lang'

const { language } = storeToRefs(useAppDataStore())
const { resetEncryptResult, resetDecryptResult } = useEncryptStore()

onUnmounted(() => {
  resetEncryptResult()
  resetDecryptResult()
})
</script>

<template>
  <main class="rsa-page">
    <FlexStack class="rsa-page__content">
      <header class="rsa-page__header">
        <TextVariant variant="h5" :bold="true" class="rsa-page__title">
          {{ Languages.TITLE[language] }}
        </TextVariant>
        <TextVariant variant="body2" class="rsa-page__description">
          {{ Languages.DESCRIPTION[language] }}
        </TextVariant>
      </header>

      <EncryptFormSection />
      <EncryptResultSection />
      <DecryptFormSection />
      <DecryptResultSection />
    </FlexStack>
  </main>
</template>

<style scoped>
.rsa-page {
  padding: var(--app-spacing-6);
}

.rsa-page__content {
  flex-direction: column;
  gap: var(--app-spacing-4);
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.rsa-page__description {
  color: var(--p-text-muted-color);
}

@media (max-width: 600px) {
  .rsa-page {
    padding: var(--app-spacing-4);
  }
}
</style>
