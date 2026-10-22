import { LANGUAGE } from '@/enum/global'

export const MERGE_SUCCESS_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Collections merged successfully!',
  [LANGUAGE.THAI]: 'รวมชุดข้อมูลสำเร็จ!',
}

export const MERGE_FAILURE_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Failed to merge collections!',
  [LANGUAGE.THAI]: 'รวมชุดข้อมูลไม่สำเร็จ!',
}
