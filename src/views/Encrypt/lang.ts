import { LANGUAGE } from '@/enum/global'

export const TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Encryption',
  [LANGUAGE.THAI]: 'เข้ารหัสข้อมูล',
}

export const DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Enter a payload to encrypt it.',
  [LANGUAGE.THAI]: 'กรอกข้อมูลที่ต้องการเข้ารหัส',
}
