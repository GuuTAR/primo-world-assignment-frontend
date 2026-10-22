<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { storeToRefs } from 'pinia'

import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Dock from 'primevue/dock'
import type { MenuItem } from 'primevue/menuitem'
import Sidebar from 'primevue/sidebar'
import SidebarAside from 'primevue/sidebaraside'
import SidebarContent from 'primevue/sidebarcontent'
import SidebarFooter from 'primevue/sidebarfooter'
import SidebarGroup from 'primevue/sidebargroup'
import SidebarHeader from 'primevue/sidebarheader'
import SidebarLayout from 'primevue/sidebarlayout'
import SidebarMain from 'primevue/sidebarmain'
import SidebarMenu from 'primevue/sidebarmenu'
import SidebarMenuButton from 'primevue/sidebarmenubutton'
import SidebarMenuItem from 'primevue/sidebarmenuitem'
import SidebarPanel from 'primevue/sidebarpanel'
import SidebarSpacer from 'primevue/sidebarspacer'

import { MENU_ITEMS, TABLET_BREAKPOINT } from '@/data/global'

import { useAppDataStore } from '@/stores/appData'

import { useAuth } from '@/composables/useAuth'
import { useBreakpoint } from '@/composables/useBreakpoint'

import AppName from '@/components/core/AppName/AppName.vue'
import FlexStack from '@/components/core/FlexStack/FlexStack.vue'

import * as Languages from './lang'

const route = useRoute()
const { language } = storeToRefs(useAppDataStore())
const { logout } = useAuth()
const { isDesktop } = useBreakpoint()

const dockItems = computed<MenuItem[]>(() => [
  ...MENU_ITEMS.map((item) => ({
    key: item.routeName,
    label: item.label[language.value],
    icon: item.icon,
    to: { name: item.routeName },
    isActive: route.name === item.routeName,
  })),
  {
    key: 'logout',
    label: Languages.LOGOUT[language.value],
    icon: 'pi pi-sign-out',
  },
])
</script>

<template>
  <FlexStack class="app-menu">
    <SidebarLayout class="app-menu__layout">
      <Sidebar v-if="isDesktop" width="var(--app-menu-size)" class="app-menu__sidebar">
        <SidebarSpacer />
        <SidebarAside class="app-menu__aside">
          <SidebarPanel>
            <SidebarHeader>
              <AppName :is-description-visible="false" />
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <nav>
                  <SidebarMenu>
                    <SidebarMenuItem v-for="item in MENU_ITEMS" :key="item.routeName">
                      <SidebarMenuButton
                        :as="RouterLink"
                        :to="{ name: item.routeName }"
                        :is-active="route.name === item.routeName"
                        class="app-menu__item"
                      >
                        <i :class="[item.icon, 'app-menu__item-icon']" />
                        <span>{{ item.label[language] }}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </nav>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
              <Divider align="center" class="app-menu__divider" />
              <Button
                :label="Languages.LOGOUT[language]"
                icon="pi pi-sign-out"
                variant="text"
                fluid
                @click="logout"
                class="app-menu__logout-button"
              />
            </SidebarFooter>
          </SidebarPanel>
        </SidebarAside>
      </Sidebar>

      <SidebarMain
        as="DIV"
        :class="['app-menu__main', { 'app-menu__main--with-dock': !isDesktop }]"
      >
        <FlexStack v-if="!isDesktop" class="app-menu__topbar">
          <AppName :is-description-visible="false" />
        </FlexStack>
        <slot />
        <Dock
          v-if="!isDesktop"
          :model="dockItems"
          :breakpoint="`${TABLET_BREAKPOINT}px`"
          :aria-label="Languages.MOBILE_MENU[language]"
          position="bottom"
          class="app-menu__dock"
        >
          <template #item="{ item }">
            <RouterLink
              v-if="item.to"
              :to="item.to"
              :class="['app-menu__dock-item', { 'app-menu__dock-item--active': item.isActive }]"
            >
              <i :class="[item.icon, 'app-menu__dock-item-icon']" />
              <span class="app-menu__dock-item-label">{{ item.label }}</span>
            </RouterLink>
            <button v-else type="button" @click="logout" class="app-menu__dock-item">
              <i :class="[item.icon, 'app-menu__dock-item-icon']" />
              <span class="app-menu__dock-item-label">{{ item.label }}</span>
            </button>
          </template>
        </Dock>
      </SidebarMain>
    </SidebarLayout>
  </FlexStack>
</template>

<style scoped>
.app-menu__layout {
  width: 100%;
  min-height: 100vh;
}

.app-menu__aside {
  position: fixed;
}

.app-menu__item {
  text-decoration: none;
}

.app-menu__item[data-active='true'] {
  font-weight: 700;
}

.app-menu__item-icon {
  font-size: 20px;
}

.app-menu__divider {
  margin: 0;
}

.app-menu__logout-button {
  justify-content: flex-start;
  font-size: 16px;
  padding: var(--app-spacing-2) var(--app-spacing-6);
}

.app-menu__logout-button :deep(.p-button-icon) {
  font-size: 20px;
}

.app-menu__topbar {
  align-items: center;
  gap: var(--app-spacing-2);
  padding: var(--app-spacing-3) var(--app-spacing-4) var(--app-spacing-0);
}

/* Leaves room at the bottom of the page for the fixed dock */
.app-menu__main--with-dock {
  padding-bottom: calc(var(--app-spacing-16) + var(--app-spacing-8));
}

.app-menu__dock {
  position: fixed;
  z-index: 10;
  bottom: calc(env(safe-area-inset-bottom) + var(--app-spacing-3));
  padding-inline: var(--app-spacing-4);
}

.app-menu__dock :deep(.p-dock-list-container) {
  width: auto;
  max-width: 100%;
  box-shadow: 0 4px 16px rgb(11 27 59 / 8%);
}

.app-menu__dock :deep(.p-dock-list) {
  gap: var(--app-spacing-1);
}

.app-menu__dock-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--app-spacing-1);
  width: 76px;
  padding: var(--app-spacing-2) var(--app-spacing-1);
  border: none;
  border-radius: 12px;
  background: none;
  color: var(--p-text-muted-color);
  font: inherit;
  text-decoration: none;
  cursor: pointer;
}

.app-menu__dock-item--active {
  background: var(--p-primary-50);
  color: var(--p-primary-700);
}

.app-menu__dock-item-icon {
  font-size: 20px;
}

.app-menu__dock-item-label {
  display: -webkit-box;
  overflow: hidden;
  font-size: 11px;
  line-height: 1.3;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.app-menu__dock-item--active .app-menu__dock-item-label {
  font-weight: 700;
}
</style>
