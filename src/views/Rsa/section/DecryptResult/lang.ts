import { LANGUAGE } from '@/enum/global'

export const RESULT_TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Decrypted result',
  [LANGUAGE.THAI]: 'ผลการถอดรหัส',
}

export const PAYLOAD_LABEL: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Payload',
  [LANGUAGE.THAI]: 'ข้อมูล',
}

export const PAYLOAD_DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'The original payload, decrypted from Data 2 with the AES key in Data 1.',
  [LANGUAGE.THAI]: 'ข้อมูลต้นฉบับ ที่ถอดรหัสจากข้อมูล 2 ด้วยคีย์ AES ในข้อมูล 1',
}

export const COPY: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Copy',
  [LANGUAGE.THAI]: 'คัดลอก',
}

export const EMPTY_TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'No result yet',
  [LANGUAGE.THAI]: 'ยังไม่มีผลลัพธ์',
}

export const EMPTY_DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Decrypt Data 1 and Data 2 to see the original payload here.',
  [LANGUAGE.THAI]: 'ถอดรหัสข้อมูล 1 และข้อมูล 2 เพื่อดูข้อมูลต้นฉบับที่นี่',
}
