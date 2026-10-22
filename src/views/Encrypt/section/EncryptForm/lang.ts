import { LANGUAGE } from '@/enum/global'

export const PAYLOAD_LABEL: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Payload',
  [LANGUAGE.THAI]: 'ข้อมูล',
}

export const PLACEHOLDER: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Type the text to encrypt...',
  [LANGUAGE.THAI]: 'พิมพ์ข้อความที่ต้องการเข้ารหัส...',
}

export const ENCRYPT: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Encrypt',
  [LANGUAGE.THAI]: 'เข้ารหัส',
}

export const CLEAR: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Clear',
  [LANGUAGE.THAI]: 'ล้าง',
}
