import { LANGUAGE } from '@/enum/global'
import type { MergeInput } from '@/types/Algorithm'

export const FORM_TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Merge collections',
  [LANGUAGE.THAI]: 'รวมชุดข้อมูล',
}

export const COLLECTION_LABEL: Record<keyof MergeInput, Record<LANGUAGE, string>> = {
  collection_1: {
    [LANGUAGE.ENGLISH]: 'Collection 1',
    [LANGUAGE.THAI]: 'ชุดข้อมูล 1',
  },
  collection_2: {
    [LANGUAGE.ENGLISH]: 'Collection 2',
    [LANGUAGE.THAI]: 'ชุดข้อมูล 2',
  },
  collection_3: {
    [LANGUAGE.ENGLISH]: 'Collection 3',
    [LANGUAGE.THAI]: 'ชุดข้อมูล 3',
  },
}

export const COLLECTION_HINT: Record<keyof MergeInput, Record<LANGUAGE, string>> = {
  collection_1: {
    [LANGUAGE.ENGLISH]: 'Sorted from max to min',
    [LANGUAGE.THAI]: 'เรียงจากมากไปน้อย',
  },
  collection_2: {
    [LANGUAGE.ENGLISH]: 'Sorted from min (0) to max',
    [LANGUAGE.THAI]: 'เรียงจากน้อย (0) ไปมาก',
  },
  collection_3: {
    [LANGUAGE.ENGLISH]: 'Sorted from min (0) to max',
    [LANGUAGE.THAI]: 'เรียงจากน้อย (0) ไปมาก',
  },
}

export const COLLECTION_PLACEHOLDER: Record<keyof MergeInput, string> = {
  collection_1: '10, 7, 4, 1',
  collection_2: '0, 2, 5, 8',
  collection_3: '0, 3, 6, 9, 12',
}

export const INVALID_COLLECTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Enter whole numbers separated by commas.',
  [LANGUAGE.THAI]: 'กรอกจำนวนเต็มโดยคั่นด้วยเครื่องหมายจุลภาค',
}

export const MERGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Merge',
  [LANGUAGE.THAI]: 'รวม',
}

export const CLEAR: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Clear',
  [LANGUAGE.THAI]: 'ล้าง',
}
