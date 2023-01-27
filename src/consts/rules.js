
const mNameRule = [
  v => !!v || '아이디는 필수 입력사항입니다.',
  v => /^[a-zA-Z0-9]*$/.test(v) || '아이디는 영문+숫자만 입력 가능합니다.',
  v => !( v && v.length >= 15) || '아이디는 15자 이상 입력할 수 없습니다.'
]

const passwordRule= [
  v => !!v || '비밀번호를 입력하십시오',
  v => !(v && v.length >= 30) || '패스워드는 30자 이상 입력할 수 없습니다.'
]

const consts = {
  mNameRule, passwordRule
}

export default consts
