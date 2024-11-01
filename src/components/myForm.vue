<template>
  <div class="form-container" :class="appState.media+'-form'">
    <div class="form-item" v-for="i in _formList" :key="i.key">
      <h3 class="label">
        {{ i.label }}
      </h3>
      <div class="wrapper">
        <slot :name="i.key" :i="i">
          <input :disabled="i.disabled" v-model="i.value" class="input" :class="i.errormsg&&'error'" v-bind="i.props" @blur="validateItem(i)"/>
          <div class="errormsg">
            {{ i.errormsg }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useAppState} from "@/store/modules/app.js";

const appState =useAppState()
const props = defineProps({
  formList: Object,
})
const emit = defineEmits(['update:formList'])
const _formList = computed({
  get(){
    return props.formList ;
  },
  set(v){
    emit('update:formList',v)
  }
})
const validateItem = (row) => {
  if (row.validate) {
    row.validate(row.value, (error) => {
      _formList.value.forEach((i) => {
        if(i.key === row.key){
          i.errormsg = error
        }
      })
    })
  }
}
const validate = () => {
  return new Promise((resolve, reject) => {
    _formList.value.forEach((i) => validateItem(i))
    if(_formList.value.every((i)=>!i.errormsg)){
      const values = {}
      _formList.value.forEach((i)=> {
        values[i.key] = i.value
      })
      resolve(values)
    }else {
      reject()
    }
    // return _formList.value.every(i => {
    //   let errorCheck = ''
    //   if (i.validate) {
    //     i.validate(i.value, (error) => {
    //       errorCheck = error
    //     })
    //   } else {
    //     errorCheck = ''
    //   }
    //   return !errorCheck
    // })
  })
}
defineExpose({
  validate
})
</script>

<style lang="scss" scoped>
.form-container, .form-item {
  width: 100%;
}

.label {
  font-size: 16px;
  line-height: 24px;
  color: #EDE4CC;
  font-family: 'KrossNeueGrotesk-Heavy';
  margin-bottom: 8px;
}

.wrapper {
  position: relative;
  width: 100%;
  flex-direction: column;
  display: flex;

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
    //&::placeholder{
    //  color: transparent;
    //
    //}
    //color: #EDE4CC;
    //background: transparent;
    //border: none;
  }


  .error {
    border-color: #F52B11 !important;
  }

  .errormsg {
    color: #F52B11;
    margin-bottom: 24px;
  }
}
.mobile-form,.pad-form{
  .label {
    font-size: 0.16rem;
    line-height: 0.24rem;
    margin-bottom: 0.08rem;
  }

  .wrapper {

    .input, input:focus {
      height: 0.48rem;
      border: 0.01rem solid #EDE4CC;
      padding: 0.08rem 0.16rem 0.08rem 0.16rem;
      font-size: 0.16rem;
      line-height: 0.24rem;
      margin-bottom: 0.08rem;
    }
    .errormsg {
      margin-bottom: 0.24rem;
    }
  }
}
</style>
