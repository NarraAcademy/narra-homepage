<template>
  <Modal title="Login" v-model:open="open">
    <div class="content">
      <my-form ref="form" v-model:form-list="formList">
        <template #pwd="{i}">
          <input :type="showPassword?'text':'password'" v-model="i.value" class="input" :class="i.errormsg&&'error'"
                 v-bind="i.props"
                 @blur="validateItem(i)"/>
          <img class="icon" @click="showPasswordHandle" :class="{eyesDisabled:showPassword}"
               src="@/assets/images/eyes.svg" alt="">
          <div class="errormsg">
            {{ i.errormsg }}
          </div>
        </template>
      </my-form>
      <button @click="loginHandle" :disabled="!formChecked||loggingIn" class="login">
        {{ loggingIn?'LoggingIn...':'Login' }}
      </button>
      <a @click="forgetHandle" class="forget">Forget password ?</a>
      <span class="create">
        Don’t have an account? Create one <a  @click="createHandle"> here</a>.
      </span>
    </div>
  </Modal>
</template>

<script setup>

import Modal from "@/components/Modal-A.vue";
import MyForm from "@/components/myForm.vue";
import {computed, ref} from "vue";
import {emailRegex, passwordRegex} from "@/utils/reg.js";
import {useUserState} from "@/store/modules/user.js";

const emit = defineEmits(["error",'forget','create']);
const formList = ref([])
const showPassword = ref(false)
const userState =useUserState()
const showPasswordHandle = () => {
  showPassword.value = true
  setTimeout(() => {
    showPassword.value = false
  }, 3000)
}
const open = ref(false)
const formChecked = computed(() => {
  return formList.value.every((item) => item.value)
});
const form = ref()
const loggingIn = ref(false)
const openHandle = (data) => {
  open.value = true
  formList.value = [
    {
      label: 'Email Address',
      value: data?data['account']:'',
      key: 'account',
      validate: (value, callback) => {
        if (!value) {
          callback('Please enter your email address')
        } else if(!emailRegex.test(value)) {
          callback('The email address is incorrect')
        }else{
          callback()
        }
      },
      props: {
        placeholder: 'Enter your email address',
      }
    },
    {
      label: 'Password',
      value: data?data['pwd']:'',
      key: 'pwd',
      validate: (value, callback) => {
        if (!value) {
          callback('Please enter your Password')
        } else if(!passwordRegex.test(value)) {
          callback('The password length must be 8-16 characters, including letters and numbers.')
        }else {
          callback()
        }
      },
      props: {
        placeholder: 'Enter your password',
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
  form.value.validate().then(res => {
    loggingIn.value = true
    userState.loginHandle(res).then(res => {
      emit('success')
      open.value = false
    }).catch(()=>{
      emit('error')
    }).finally(()=>{
      loggingIn.value = false
    })
  })
  // const data = {}
  // formList.value.forEach((i) => {
  //   data[i.key] = i.value
  // })
  // console.log(data)
  // emit('error')
}
const closeHandle =()=>{
  open.value = false
}
const forgetHandle =()=>{
  emit("forget")
  open.value = false
}
const createHandle =()=>{
  emit('create')
  open.value=false
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


.login {
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

.login[disabled] {
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
  .input, .input:focus {
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

  .login {
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
.error {
  border-color: #F52B11 !important;
}

</style>
