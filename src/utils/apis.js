import axiosInstance from "@/utils/axiosInstance";

export default {
  getNews: async (data) => {
    try {
      const response = await axiosInstance.get("/api/App/Notice/SearchNotice",{params:data});
      return response.data.response ;
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  },
  submitEmail: async (EmailAddress) => {
    try {
      const response = await axiosInstance.post("/api/App/Email/Submit", {
        EmailAddress,
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg ?? "submit error");
    }
  },
  getuserManualAPI: async () => {
    try {
      const response = await axiosInstance.get("/api/App/Info/SearchUserManual");
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  submitAccessCodePassAPI: async (data) => {
    try {
      const response = await axiosInstance.post("/api/App/Email/SubmitAccessCodePass",data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data);
    }
  },
  loginAPI: async (data) => {
    try {
      const response = await axiosInstance.post("/api/App/Account/Login",data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  sendCodeAPI: async (data) => {
    try {
      const response = await axiosInstance.post("/api/App/Account/SendEmailCode",data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  forgetLoginPwdAPI: async (data) => {
    try {
      const response = await axiosInstance.post("/api/App/Account/ForgetLoginPwd",data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  registerAPI: async (data) => {
    try {
      const response = await axiosInstance.post("/api/App/Account/Register",data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  getUserInfoAPI: async () => {
    try {
      const response = await axiosInstance.get("/api/App/Account/RefreshMemberInfo");
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  editUserInfoAPI: async (data) => {
    try {
      const response = await axiosInstance.post("/api/App/Account/EditMemberInfo",data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  GetNonceAPI: async (data) => {
    try {
      const response = await axiosInstance.get("/api/App/Account/GetNonce",{params:data});
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  BindWalletAddressAPI: async (data) => {
    try {
      const response = await axiosInstance.post("/api/App/Account/BindWalletAddress",data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  GetQuizWebsiteAPI: async () => {
    try {
      const response = await axiosInstance.get("/api/App/Info/GetQuizWebsite");
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  googleLoginAPI: async (data) => {
    try {
      const response = await axiosInstance.post("/api/App/Account/GoogleLogin",data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg );
    }
  },
  minrNftAPI: async (data) => {
    try {
      const response = await axiosInstance.post("/api/App/Nft/MintNft",data);
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg);
    }
  },
  queryResultsAPI: async (data) => {
    try {
      const response = await axiosInstance.get("/api/App/Nft/QueryResult",{params:{key:data}});
      return response.data;
    } catch (error) {
      return Promise.reject(error.data.msg);
    }
  },



};
