import { LANGUAGE } from '@/enum/global'

export const ENCRYPT_SUCCESS_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Payload encrypted successfully!',
  [LANGUAGE.THAI]: 'เข้ารหัสข้อมูลสำเร็จ!',
}

export const ENCRYPT_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Failed to encrypt payload!',
  [LANGUAGE.THAI]: 'เข้ารหัสข้อมูลไม่สำเร็จ!',
}

export const DECRYPT_SUCCESS_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Data decrypted successfully!',
  [LANGUAGE.THAI]: 'ถอดรหัสข้อมูลสำเร็จ!',
}

export const DECRYPT_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Failed to decrypt data!',
  [LANGUAGE.THAI]: 'ถอดรหัสข้อมูลไม่สำเร็จ!',
}

export const COPY_SUCCESS_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Copied to clipboard!',
  [LANGUAGE.THAI]: 'คัดลอกแล้ว!',
}

export const COPY_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Failed to copy!',
  [LANGUAGE.THAI]: 'คัดลอกไม่สำเร็จ!',
}
