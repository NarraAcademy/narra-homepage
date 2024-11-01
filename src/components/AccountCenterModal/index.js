import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import {useUserState} from "@/store/modules/user.js";
import itemPic1 from '@/assets/images/accessSetting/item-pic-1.png'
import itemPic2 from '@/assets/images/accessSetting/item-pic-2.png'
import topPic from '@/assets/images/accessSetting/accountSetting-top.svg'
import leftPic from '@/assets/images/accessSetting/accountSetting-left.svg'
import apis from "@/utils/apis.js";
import {modal} from "@/utils/utils.js";
import {usernameRegex} from "@/utils/reg.js";

const maskString = (str) => {
    if (str.length < 10) {
        return str;
    }
    const start = str.slice(0, 6);
    const end = str.slice(-4);
    return start + '...' + end
}
export default ({walletBlock}) => {
    const userState = useUserState()
    const edit = ref(false)
    const formList = computed(() => [
        {
            label: 'Email',
            value: userState.userInfo.Email,
            key: 'email',
            disabled: true,
            // validate: (value, callback) => {
            //     if (!value) {
            //         callback('Please enter your email address')
            //     } else if (!emailRegex.test(value)) {
            //         callback('Please enter a valid email address')
            //     } else {
            //         callback()
            //     }
            // },
            // props: {
            //     placeholder: 'Enter your email address',
            // }
        },
        {
            label: 'Username',
            value: userState.userInfo.User_name,
            key: 'Username',
            disabled: !edit.value,
            validate: (value, callback) => {
                if (!value) {
                    callback('Please enter your username')
                } else  if (!usernameRegex.test(value)) {
                    callback("The username length must be 4-30 characters, including letters or numbers.");
                }else{
                    callback()
                }
            },
            props: {
                placeholder: 'Enter your username',
            }
        },
        {
            label: 'Access Code(Optional)',
            value: userState.userInfo.Access_code,
            key: 'accessCode',
            Optional: true,
            disabled:!edit.value || !!userState.userInfo.Access_code,
            props: {
                placeholder: 'Enter your access code',
            }
        },
    ])
    const walletChecked = ref(!!userState.userInfo.Bind_address)
    const newsletterChecked = ref(!!userState.userInfo.Is_newsletter)
    const submitHandle = () => {
        if(!usernameRegex.test(formList.value.find(i => i.key === 'Username').value)){
            modal.open({
                title: 'error',
                content: 'The username length must be 4-30 characters, including letters or numbers.'
            })
            return
        }
        const data = {
            'Access_code': userState.userInfo.Access_code ? '' : (formList.value.find(i => i.key === 'accessCode').value || ''),
            'Is_newsletter': newsletterChecked.value,
            User_name: formList.value.find(i => i.key === 'Username').value,
        }
        apis.editUserInfoAPI(data).then(response => {
            modal.open({
                title: 'success',
                content: 'Update success !'
            })
            userState.getUserInfo()
            edit.value = false
        }).catch((e) => {
            modal.open({
                title: 'error',
                content: e,
                type: 'error',
            })
        })
    }
    watch(walletChecked, () => {
        if (walletChecked.value) {
            walletBlock.value.openHandle()
        }
    })
    const updateHandle = () => {
        userState.getUserInfo()
        walletChecked.value = !!userState.userInfo.Bind_address
        // newsletterChecked.value = !!userState.userInfo.Is_newsletter
        // console.log(!!userState.userInfo.Bind_address)
    }
    // const cancelHandle = ()=>{
    //     userState.getUserInfo()
    //     edit.value = false
    //     walletChecked.value = !!userState.userInfo.Bind_address
    // }
    const width = ref(1920)
    const setWidth = ()=>{
        width.value = +getComputedStyle(document.documentElement).getPropertyValue("--vw").replaceAll('px','');
    }
    onMounted(()=>{
        setWidth()
        window.addEventListener('resize',setWidth)
    })
    onUnmounted(()=>{
        window.removeEventListener('resize',setWidth)
    })
    return {
        formList,
        itemPic1,
        itemPic2,
        topPic,
        leftPic,
        userState,
        walletChecked,
        newsletterChecked,
        submitHandle,
        updateHandle,
        maskString,
        width,
        edit,
        // cancelHandle

    }
}
