import { LANGUAGE } from '@/enum/global'

export const TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Encrypt/Decrypt',
  [LANGUAGE.THAI]: 'เข้ารหัส/ถอดรหัส',
}

export const DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Encrypt a payload, or decrypt Data 1 and Data 2 back into it.',
  [LANGUAGE.THAI]: 'เข้ารหัสข้อมูล หรือถอดรหัสข้อมูล 1 และข้อมูล 2 กลับเป็นข้อมูลเดิม',
}
