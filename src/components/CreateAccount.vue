<template>
  <Modal title="Create Account" v-model:open="open">
    <div class="content">
      <my-form ref="myForm" v-model:form-list="formList">
        <template #pwd="{i}">
          <input :type="i.showPassword?'text':'password'" v-model="i.value" class="input" :class="i.errormsg&&'error'"
                 v-bind="i.props"
                 @blur="validateItem(i)"/>
          <img class="icon" @click="showPasswordHandle(i)" :class="{eyesDisabled:i.showPassword}"
               src="@/assets/images/eyes.svg" alt="">
          <div class="errormsg">
            {{ i.errormsg }}
          </div>
        </template>
        <template #confirmPwd="{i}">
          <input :type="i.showPassword?'text':'password'" v-model="i.value" class="input" :class="i.errormsg&&'error'"
                 v-bind="i.props"
                 @blur="validateItem(i)"/>
          <img class="icon" @click="showPasswordHandle(i)" :class="{eyesDisabled:i.showPassword}"
               src="@/assets/images/eyes.svg" alt="">
          <div class="errormsg">
            {{ i.errormsg }}
          </div>
        </template>
      </my-form>
      <button @click="loginHandle" :disabled="!formChecked||loading" class="submit">
        {{loading?'loading...':'Sign up' }}
      </button>
    </div>
  </Modal>
</template>

<script setup>

import Modal from "@/components/Modal-A.vue";
import MyForm from "@/components/myForm.vue";
import {computed, ref} from "vue";
import {emailRegex, passwordRegex, usernameRegex} from "@/utils/reg.js";
import apis from "@/utils/apis.js";
import {modal} from "@/utils/utils.js";
import {useRoute} from "vue-router";

const emit = defineEmits(["error",'success']);
const formList = ref([])
const myForm = ref()
const showPasswordHandle = (i) => {
  i.showPassword = true
  setTimeout(() => {
    i.showPassword = false
  }, 3000)
}
const open = ref(false)
const formChecked = computed(() => {
  return formList.value.every((item) =>item.Optional?true:item.value)
});
const loading = ref(false)
const closeHandle = ()=>{
  open.value =false
}
const route = useRoute()
const openHandle = () => {
  open.value = true
  formList.value = [
    {
      label: 'Username',
      value: '',
      key: 'User_name',
      validate: (value, callback) => {
        if (!value) {
          callback('Please enter your username')
        } else if(!usernameRegex.test(value)) {
          callback('The username length must be 8-16 characters, including letters and numbers.')
        } else {
          callback()
        }
      },
      props: {
        placeholder: 'Enter your username',
      }
    },
    {
      label: 'Email Address',
      value: '',
      key: 'account',
      validate: (value, callback) => {
        if (!value) {
          callback('Please enter your email address')
        } else if (!emailRegex.test(value)) {
          callback('The email address is incorrect')
        }else {
          callback()
        }
      },
      props: {
        placeholder: 'Enter your email address',
      }
    },
    {
      label: 'Password',
      value: '',
      key: 'pwd',
      showPassword:false,
      validate: (value, callback) => {
        if (!value) {
          callback('Please enter your password')
        }else if(!passwordRegex.test(value)) {
          callback('The password length must be 8-16 characters, including letters and numbers.')
        } else {
          callback()
        }
      },
      props: {
        placeholder: 'Enter your password',
      }
    },
    {
      label: 'Confirm Password',
      value: '',
      key: 'confirmPwd',
      showPassword:false,
      validate: (value, callback) => {
        if (!value) {
          callback('Please enter your confirm password')
        } else if(value !== formList.value.find(i=>i.key === 'pwd').value){
          callback('Password does not match')
        }else {
          callback()
        }
      },
      props: {
        placeholder: 'Enter your confirm password',
      }
    },
    {
      label: 'Access Code(Optional)',
      value: route?.query?.ic||'',
      key: 'Access_code',
      Optional:true,
      validate: (value, callback) => {
          callback()
      },
      props: {
        placeholder: 'Enter your access code',
      }
    },
  ]
}

const validateItem = (row) => {
  if (row.validate) {
    row.validate(row.value, (error) => {
      formList.value.forEach((i) => {
        if (i.key === row.key) {
          i.errormsg = error
        }
      })
    })
  }
}
const loginHandle = () => {
  myForm.value.validate().then((res)=>{
    console.log(res)
    const data = {
      ...res,
    }
    loading.value = true
    apis.sendCodeAPI({ Email:res.account}).then(res => {
      emit('success',data)
    }).catch((e)=>{
      // emit('error')
      modal.open({
        title:'error',
        content:e,
        type:'error',
      })
    }).finally(()=>{
      loading.value = false
    })
  })
}
defineExpose({
  openHandle,
  closeHandle
})
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input, .input:focus {
  width: 100%;
  height: 48px;
  border: 1px solid #EDE4CC;
  padding: 8px 16px 8px 16px;
  background: #fff;
  outline: none;
  color: #737578;
  font-size: 16px;
  line-height: 24px;
  font-family: KrossNeueGrotesk-Regular;
  margin-bottom: 8px;
}
.input:disabled{
  color: #737578;
  background: #152226;
}

.error {
  border-color: #F52B11;
}

.errormsg {
  color: #F52B11;
  margin-bottom: 24px;
}

.icon {
  position: absolute;
  top: 24px;
  transform: translateY(-50%);
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.eyesDisabled {
  opacity: 0.3;
  filter: alpha(opacity=60)
}


.submit {
  cursor: pointer;
  outline: none;
  padding: 0;
  width: 234px;
  height: 48px;
  gap: 8px;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #df9808;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  background: #DF9808;
  font-family: 'KrossNeueGrotesk-Heavy';
}

.submit[disabled] {
  cursor: default;
  color: #111D20;
  border-color: #686B63;
  background: #634C15;
}

.forget {
  color: #FAAC07;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  text-decoration: underline;
  margin: 27px 0;
}

.create {
  font-size: 16px;
  font-family: "KrossNeueGrotesk-Book";

  a {
    display: inline-block;
    font-family: 'KrossNeueGrotesk-Regular';
    text-decoration: underline;
    cursor: pointer;
    color: #FAAC07;
  }
}

.mobile-modal, .pad-modal {
  .input, input:focus {
    height: 0.48rem;
    border: 0.01rem solid #EDE4CC;
    padding: 0.08rem 0.36rem 0.08rem 0.16rem;
    font-size: 0.16rem;
    line-height: 0.24rem;
    margin-bottom: 0.08rem;
  }

  .errormsg {
    margin-bottom: 0.24rem;
  }

  .icon {
    top: 0.24rem;
    right: 0.1rem;
    width: 0.24rem;
    height: 0.24rem;
  }

  .submit {
    width: 2.34rem;
    height: 0.48rem;
    gap: 0.08rem;
    border-radius: 0 0 0.08rem 0.08rem;
    border: 0.01rem solid #df9808;
    font-size: 0.16rem;
  }

  .forget {
    font-size: 0.14rem;
    line-height: 0.18rem;
    margin: 0.27rem 0;
  }

  .create {
    font-size: 0.16rem;
  }
}
</style>
