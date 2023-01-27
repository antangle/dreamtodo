import axios from "axios";
import useMemberInfo from "@/store/useMemberInfo";
import axiosConsts from "@/consts/axios";


const authAxios = axios.create()


const requestRefresh = async () => {

  console.log("requestRefresh---------------1")

  const {getTokens, saveInfo} = useMemberInfo();

  const tokens = getTokens()

  //console.log(tokens)

  console.log("requestRefresh---------------2", tokens)

  const {data} = await axios.post(`${axiosConsts.domain}/api/auth/refresh`, {access:tokens.access, refresh:tokens.refresh});

  //console.log("requestRefresh: ",data.access)

  saveInfo(data.access, data.refresh)

  console.log("requestRefresh---------------4")

  return data
}


authAxios.interceptors.request.use(

  (config)=> {

    console.log("req access: ", useMemberInfo().getTokens().access)

    config.headers = {'Authorization':`Bearer ${useMemberInfo().getTokens().access}`}

    return config

  }, (error) => {
    console.log("req rejected")

    return error
  }
)

authAxios.interceptors.response.use(
  (response)=> {

    console.log("res fulfilled")
    return response

  }, async (error) => {

    console.log("res rejected", error)

    //Expired Token
    if(error.response.data.code === 2025){

      console.log("refresh........................................")
      try {
        const tokens = await requestRefresh()

        console.log("refresh result", tokens)

        const authHeader = {
          'Authorization': `Bearer ${tokens.access}`,
          'Refresh-Token': `Bearer ${tokens.refresh}`
        }

        error.config.headers = authHeader

        console.log('here!!')
        console.log(error.config)
        return axios(error.config)

      }catch(eee){
        return error
      }
    } else {
      console.log(error.response.data)
    }

    return error
  }
)


export default authAxios
