import {ref} from "vue";
import Web3 from "web3";
import {modal} from "@/utils/utils.js";
import apis from "@/utils/apis.js";
import {useUserState} from "@/store/modules/user.js";
import {useAppState} from "@/store/modules/app.js";

function getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

export default () => {
    const userState = useUserState()
    const modalOpen = ref(false);
    const appState = useAppState()
    //MetamaskHandle
    const InvitationCode = getUrlKey('InvitationCode')
    const _web3 = new Web3(window.ethereum);
    const networkIds = [56, 97];
    // const web3Obj = ref(null)
    const MetamaskHandle = async () => {
        appState.debug('before window.ethereum')
        if (!window.ethereum) {
            appState.debug('window.ethereum error')
            modal.open({
                title: 'error',
                content: 'Unable to obtain wallet plugin',
                type: 'error',
            })
            return
        }
        appState.debug('window.ethereum success')
        // let is_tokenPocket = navigator.userAgent.indexOf('TokenPocket') >= 0;
        // if (!is_tokenPocket) {
        try {
            appState.debug('get switchEthereumChain')
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: '0x138d4'}],
            });
        } catch (switchError) {
            appState.debug('get switchEthereumChain-error')
            appState.debug(JSON.stringify(switchError))
            // if (switchError.code === 4902||switchError.data?.originalError?.code === 4902) {
            try {
                appState.debug('set switchEthereumChain')
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
                appState.debug('set switchEthereumChain-error')
                appState.debug(JSON.stringify(addError))
                modal.open({
                    title: 'error',
                    content: 'Connection failed, please try again !',
                    type: 'error',
                })
                return;
            }
            // } else {
            //     console.log('error1')
            //     modal.open({
            //         title: 'error',
            //         content: 'Connection failed, please try again !',
            //         type: 'error',
            //     })
            // }
            return;
        }
        // } else {
        //     if (networkIds.indexOf(parseInt(window.ethereum.networkVersion)) < 0) {
        //         modal.open({
        //             title: 'error',
        //             content: 'You are connected to an unsupported network ',
        //             type: 'error',
        //         })
        //         return;
        //     }
        // }
        connect_after()
    }
    const connect_after = async () => {
        appState.debug('get account')

        // if (web3Obj.value) {
        //     return;
        // }
        // console.log(1)
        await window.ethereum.request({method: 'eth_requestAccounts'}).then(function (accounts) {
            if (accounts) {
                console.log('get account success')
                signAndLogin(accounts[0]);
            }
        });
    }
    //end
    //phantom
    const phantomHandle = async () => {
        if (!'phantom' in window) {
            modal.open({
                title: 'error',
                content: 'Unable to obtain wallet plugin',
                type: 'error',
            })
            return
        }
        const provider = window.phantom?.solana;
        if (!provider?.isPhantom) {
            modal.open({
                title: 'error',
                content: 'Unable to obtain wallet plugin',
                type: 'error',
            })
            return;
        }
        // console.log(provider.connect())
        // try {
        const resp = await provider.connect();
        // console.log(resp)
        // console.log(resp.publicKey.toString());
        // } catch (e) {
        //     console.log(e)
        // }
        signAndLogin(resp)
    }
    //end
    const signAndLogin = async (account) => {
        console.log(account)
        modal.open({
            title: '',
            content: 'Loading...'
        })
        try {
            const message = await apis.GetNonceAPI({address: account})
            console.log(message)
            const val = await _web3.eth.personal.sign(message.response, account, 'dsa')
            if (val) {
                let params = {
                    address: account,
                    signmsg: val,
                    invitationCode: InvitationCode ? InvitationCode : ''
                }
                // console.log(params)
                await apis.BindWalletAddressAPI(params)
                modal.open({
                    title: 'success',
                    content: 'Connection success !',
                    type: 'success'
                })
                userState.getUserInfo()
                modalOpen.value = false
            }
            modal.close()
        } catch (err) {
            modal.close()
            modal.open({
                title: 'error',
                content: 'Connection failed, please try again !',
                type: 'error'
            })
            return
        }
    }

    return {MetamaskHandle, modalOpen, phantomHandle}
}
