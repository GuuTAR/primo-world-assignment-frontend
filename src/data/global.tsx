import { LANGUAGE } from '@/enum/global'
import type { SupportLang } from '@/types/SupportLang'

export const LANGUAGE_OPTIONS: SupportLang[] = [
  { value: LANGUAGE.ENGLISH, label: 'English' },
  { value: LANGUAGE.THAI, label: 'ไทย' },
]

export const TABLET_BREAKPOINT: number = 900
export const MOBILE_BREAKPOINT: number = 600

export const MENU_ITEMS: { label: Record<LANGUAGE, string>; routeName: string; icon: string }[] = [
  {
    label: {
      [LANGUAGE.ENGLISH]: 'Encryption',
      [LANGUAGE.THAI]: 'เข้ารหัสข้อมูล',
    },
    routeName: 'home',
    icon: 'pi pi-lock',
  },
  {
    label: {
      [LANGUAGE.ENGLISH]: 'Todo',
      [LANGUAGE.THAI]: 'รายการงาน',
    },
    routeName: 'todo',
    icon: 'pi pi-check-square',
  },
]
