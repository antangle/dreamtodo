import {defineStore} from "pinia";
import {ref} from "vue";
import {useCookies} from "vue3-cookies";

const cookies = useCookies().cookies;

const useMemberInfo = defineStore('useMemberInfo',() => {

  const memberInfo = ref({access:null, refresh:null})
  const saveInfo = (accessToken, refreshToken) => {

    memberInfo.value.access = accessToken
    memberInfo.value.refresh = refreshToken

    console.log(memberInfo.value);

    cookies.set("access", accessToken)
    cookies.set("refresh", refreshToken)
/*
    localStorage.setItem("access", accessToken)
    localStorage.setItem("refresh", refreshToken)
*/
    console.log("cookie set done!")

  }

  const getTokens = () => {

    const accessToken = cookies.get("access")
    const refreshToken = cookies.get("refresh")
    memberInfo.value = {
      access: accessToken,
      refresh: refreshToken
    }

    console.log(memberInfo.value)
    return memberInfo.value
  }

  return {memberInfo, saveInfo, getTokens}
})

export default useMemberInfo
