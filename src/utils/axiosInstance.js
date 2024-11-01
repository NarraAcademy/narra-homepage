import axios from "axios";
import {useUserState} from "@/store/modules/user.js";
import {sign} from "@/utils/sign.js";
import storage from "store";
import {modal} from "@/utils/utils.js";
const defaultSign = '089lwuzsnPDDVBE0QuVN2AuFBrlxBavK'
const axiosInstance = axios.create({
    // baseURL: "https://api.narralayer.ai/",//正式
    // baseURL: " https://883135a4d4d200c6.narralayer.ai",//测试
    baseURL: import.meta.env.PROD?import.meta.env.VITE_BASE_URL:'https://883135a4d4d200c6.narralayer.ai',
    headers: {
        post: {
            "Content-Type": "application/json;charset=UTF-8",
            'RspLanguage': 'en'
        },
    },
});

axiosInstance.interceptors.request.use(
  (config) => {
      const userState = useUserState()
      const token =storage.get('token',userState.token)
      if(token){
          config.headers.Authorization = `Bearer ${token}`
      }
      if (config.data == undefined) {
          config.data = {};
      }
      const timestamp = new Date().toUTCString()
      if (config.method === "get") {
          const url = config.url + '?' + 'timestamp='+timestamp+'&signature='+sign({...config.params})
          config.url = url
      } else {
          config.data.timestamp = timestamp
          config.data.signature = sign({...config.data})
      }
      if (config.method == 'post') {
          config.data = JSON.stringify(config.data)
      }
      console.log(config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
      const userState = useUserState()
    if (response.data?.status === 200) {
      return response;
    }else if(response.data?.status === 401){
        modal.open({
            title:'error',
            content:'Login timeout, please log in again.'
        })
    }else {
      return Promise.reject(response);
    }
  },
  (error) => {
    console.log(error);
    // return Promise.reject(error);
  }
);
export default axiosInstance;
