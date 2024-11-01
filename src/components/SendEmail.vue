<template>
  <Modal title="Forget Password" v-model:open="open">
    <div class="content">
      <p>{{props.des}}</p>
      <my-form ref="form" v-model:form-list="formList"/>
      <button @click="submitHandle" :disabled="!formChecked||sending" class="submit">
        {{ sending ? 'Sending...' : 'Send' }}
      </button>
    </div>
  </Modal>
</template>

<script setup>

import Modal from "@/components/Modal-A.vue";
import MyForm from "@/components/myForm.vue";
import {computed, ref} from "vue";
import {emailRegex} from "@/utils/reg.js";
import apis from "@/utils/apis.js";
import {modal} from "@/utils/utils.js";
const props = defineProps({
  des:{
    type:String,
    default:'Don’t worry we got you! Please enter the email to recover your account.'
  }
})
const formList = ref([])
const sending = ref(false);
const open = ref(false)
const emit = defineEmits(['success', 'error'])
const formChecked = computed(() => {
  return formList.value.every((item) => item.value)
});
const form = ref()
const openHandle = () => {
  open.value = true
  formList.value = [
    {
      label: 'Email Address',
      value: '',
      key: 'Email',
      validate: (value, callback) => {
        if (!value) {
          callback('Please enter your email address')
        }
        if (!emailRegex.test(value)) {
          callback('The email address is incorrect')
        } else {
          callback()
        }
      },
      props: {
        placeholder: 'exampleemail@gmail.com',
      }
    },
  ]
}

const submitHandle = () => {
  form.value.validate().then(res => {
    sending.value = true
    apis.sendCodeAPI(res).then(() => {
      emit('success',res.Email)
      open.value = false
    }).catch((e) => {
      emit('error')
      modal.open({
        title:'error',
        content:e,
        type:'error',
      })
    }).finally(() => {
      sending.value = false
    })
  })
}
const closeHandle = () => {
  open.value = false
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

.input, input:focus {
  width: 100%;
  height: 48px;
  border: 1px solid #EDE4CC;
  padding: 8px 36px 8px 16px;
  background: #152226;
  outline: none;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-family: KrossNeueGrotesk-Regular;
  margin-bottom: 8px;
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
