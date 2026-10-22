import { LANGUAGE } from '@/enum/global'

export const RESULT_TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Merged result',
  [LANGUAGE.THAI]: 'ผลการรวม',
}

export const RESULT_COUNT: Record<LANGUAGE, (count: number) => string> = {
  [LANGUAGE.ENGLISH]: (count) =>
    `${count} ${count === 1 ? 'number' : 'numbers'}, sorted from min to max`,
  [LANGUAGE.THAI]: (count) => `${count} ตัวเลข เรียงจากน้อยไปมาก`,
}

export const EMPTY_TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'No result yet',
  [LANGUAGE.THAI]: 'ยังไม่มีผลลัพธ์',
}

export const EMPTY_DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Merge the three collections to see the result here.',
  [LANGUAGE.THAI]: 'รวมชุดข้อมูลทั้งสามชุดเพื่อดูผลลัพธ์ที่นี่',
}
