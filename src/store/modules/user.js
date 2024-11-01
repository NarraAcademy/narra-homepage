import {defineStore} from "pinia";
import storage from "store";
import apis from "@/utils/apis.js";
import {useAppState} from "@/store/modules/app.js";
import Web3 from "web3";

const initialState = {
    userInfo: {
        User_name: '',
        Bind_address: '',
        joinDate: '',
        Email: '',
        Access_code: '',
        Is_newsletter: false
    },
    token: storage.get('token', ''),
    sendSecond:0,
    quiz:'',

}
export const useUserState = defineStore("user", {
    state() {
        return {
            ...initialState
        };
    },
    actions: {
        setUserInfo(state) {
            this.userInfo = state;
            storage.set("userInfo", this.userInfo);
        },
        resetHandle() {
            storage.remove("userInfo")
            storage.remove("token")
            this.userInfo = {}
            this.token = ''
            // console.log(this.token,'dsads')
        },
        setToken(state) {
            this.token = state;
            storage.set("token", this.token);
        },
        async loginHandle(state) {
            const res = await apis.loginAPI(state)
            this.setToken(res.response.Token)
            // this.setToken('8888888888')
            this.getUserInfo()
        },
        async googleLoginHandle(state) {
            const res = await apis.googleLoginAPI(state)
            this.setToken(res.response.Token)
            // this.setToken('8888888888')
            this.getUserInfo()
        },
        async getUserInfo() {
            // this.setUserInfo({
            //     User_name: 'usernaernaedsadsadsadsadsadsrname@166.com',
            //     Bind_address: '',
            //     joinDate: 'joinDate',
            //     Email: 'Email',
            //     Access_code: ''
            // })
            const res = await apis.getUserInfoAPI()
            function getCurrentDate(time) {
                const today = new Date(time); // 获取当前日期
                const year = today.getFullYear().toString().replace('20',''); // 获取年份
                const month = String(today.getMonth() + 1).padStart(2, '0'); // 获取月份（加1，因为月份从0开始），并确保两位数
                const day = String(today.getDate()).padStart(2, '0'); // 获取日期，并确保两位数

                return `${year}/${month}/${day}`; // 返回格式化后的日期
            }
            this.setUserInfo({...res.response,joinDate:getCurrentDate(res.response.Regist_time)})
            const _res = await apis.GetQuizWebsiteAPI()
            this.quiz = _res.response
        },
        logoutHandle() {
            this.resetHandle()
        },
        //查询账户
         async getWalletAccount(){
            const appState = useAppState()
            if(storage.get('token',this.token)){
                if (!window.ethereum) {
                    appState.openModal({
                        title:'error',
                        type:'error',
                        content:'Please install the wallet !',
                    })
                    return
                }
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{chainId: '0x138d4'}],
                    })
                } catch (switchError) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x138d4', // 目标链ID
                                chainName: 'Berachain bArtio',
                                nativeCurrency: {
                                    name: 'BERA',
                                    symbol: 'BERA',
                                    decimals: 18
                                },
                                rpcUrls: ['https://bartio.rpc.berachain.com'], // 节点
                                blockExplorerUrls: ['https://bartio.beratrail.io']
                            }]
                        });
                    } catch (addError) {
                        appState.openModal({
                            title:'error',
                            type:'error',
                            content:'Adding chain failed !',
                        })
                        return;
                    }
                    return;
                }
                try{
                    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
                    if (accounts) {
                        return accounts[0]
                    }else {
                        appState.openModal({
                            title:'error',
                            type:'error',
                            content:'Get account failed !',
                        })
                        return
                    }
                }catch (e) {
                    appState.openModal({
                        title:'error',
                        type:'error',
                        content:'Get account failed !',
                    })
                    return
                }
            }else {
                appState.openModal({
                    title:'error',
                    type:'error',
                    content:'please login first!',
                })
                return
            }
        },
        //获取密钥
        async getWalletCode(account){
            const appState = useAppState()
            try {
                const _web3 = new Web3(window.ethereum);
                const message = await apis.GetNonceAPI({address: account})
                const val = await _web3.eth.personal.sign(message.response, account, 'dsa')
                console.log(val)
                if (val) {
                    let params = {
                        auth_code:this.quiz.split('/').reverse()[0],
                        signmsg: val,
                        address: account,
                        Name: 'name',
                        Char_main: 'char_main',
                        Char_alt: 'char_alt',
                        Percent_main: 1,
                        Percent_alt: 1
                    }
                    console.log(params)
                    return params
                    // const res = await minrNftAPI(params)
                    // // const res  ={response:'dsadsa'}
                    // await queryResultsHandle(res.response)
                }
            } catch (err) {
                appState.openModal({
                    title:'error',
                    type:'error',
                    content:err,
                })
                return
            }
        },
        //铸造
        async minrNftHandle(){
            const appState = useAppState()
            appState.openModal({
                content:'loading...'
            })
            const account  =await this.getWalletAccount()
            if(!account){
                return
            }
            const params =await this.getWalletCode(account)
            if(!params){
                return
            }
            try {
                const res = await apis.minrNftAPI(params)
                let check = false
                let timer = null
                timer = setInterval(() => {
                    if (!check) {
                        apis.queryResultsAPI(res.response).then(resp => {
                            if (resp.response.Status === 2) {
                                check = true
                                appState.openModal({
                                    title:'success',
                                    type:'success',
                                    content:'Mint successful!',
                                })
                                this.getUserInfo()
                            } else if (resp.response.Status === 3) {
                                check = true
                                appState.openModal({
                                    title:'error',
                                    type:'error',
                                    content:resp.response.Err_msg,
                                })
                            }
                        }).catch(e=>{
                            check = true
                            appState.openModal({
                                title:'success',
                                type:'success',
                                content:e,
                            })
                        })
                    } else {
                        clearInterval(timer)
                    }
                }, 1000)
            }catch (e) {
                this.isMinting = true
                appState.openModal({
                    title:'error',
                    type:'error',
                    content:e,
                })
            }
        }
    },
});
