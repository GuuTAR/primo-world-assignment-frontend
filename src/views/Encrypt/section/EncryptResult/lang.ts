import { LANGUAGE } from '@/enum/global'

export const RESULT_TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Encrypted result',
  [LANGUAGE.THAI]: 'ผลการเข้ารหัส',
}

export const DATA1_LABEL: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Data 1',
  [LANGUAGE.THAI]: 'ข้อมูล 1',
}

export const DATA2_LABEL: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Data 2',
  [LANGUAGE.THAI]: 'ข้อมูล 2',
}

export const DATA1_DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'The randomly generated AES key, encrypted with the RSA private key.',
  [LANGUAGE.THAI]: 'คีย์ AES ที่สุ่มสร้างขึ้น ซึ่งเข้ารหัสด้วย RSA private key',
}

export const DATA2_DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Your payload, encrypted with the AES key.',
  [LANGUAGE.THAI]: 'ข้อมูลของคุณ ซึ่งเข้ารหัสด้วยคีย์ AES',
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
  [LANGUAGE.ENGLISH]: 'Encrypt a payload to see the base64 output here.',
  [LANGUAGE.THAI]: 'เข้ารหัสข้อมูลเพื่อดูผลลัพธ์แบบ base64 ที่นี่',
}
