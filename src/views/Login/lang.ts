import { LANGUAGE } from '@/enum/global'

export const SHORT_SUMMARY: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Interview Assignment for Fullstack Developer',
  [LANGUAGE.THAI]: 'โจทย์สัมภาษณ์สำหรับตำแหน่ง Fullstack Developer',
}

export const WELCOME_MESSAGE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Primo World assignment',
  [LANGUAGE.THAI]: 'จทย์ของ Primo World',
}

export const DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]:
    'Encrypt a payload with AES and RSA and decrypt it back, then merge three sorted collections into one list sorted from min to max.',
  [LANGUAGE.THAI]:
    'เข้ารหัสข้อมูลด้วย AES และ RSA แล้วถอดรหัสกลับ จากนั้นรวมชุดข้อมูลที่เรียงลำดับแล้วสามชุด เป็นรายการเดียวที่เรียงจากน้อยไปมาก',
}

export const SIGN_IN: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Sign in',
  [LANGUAGE.THAI]: 'เข้าสู่ระบบ',
}

export const CONTINUE_WITH_GOOGLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Continue with Google',
  [LANGUAGE.THAI]: 'เข้าสู่ระบบด้วย Google',
}

export const OR: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'or',
  [LANGUAGE.THAI]: 'หรือ',
}

export const PLAY_AS_DEMO_USER: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Go to assignment ',
  [LANGUAGE.THAI]: 'เข้าดูโจทย์',
}
