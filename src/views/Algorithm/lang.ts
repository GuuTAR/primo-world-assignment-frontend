import { LANGUAGE } from '@/enum/global'

export const TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Algorithm',
  [LANGUAGE.THAI]: 'อัลกอริทึม',
}

export const DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Merge three sorted collections into one list, sorted from min to max.',
  [LANGUAGE.THAI]: 'รวมชุดข้อมูลที่เรียงลำดับแล้วสามชุด เป็นรายการเดียวที่เรียงจากน้อยไปมาก',
}
