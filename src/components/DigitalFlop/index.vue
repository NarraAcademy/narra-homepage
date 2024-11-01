<template>
  <span class="digital-flop-text">
    {{ props.formatter?props.formatter(_number) :_number}}
  </span>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {math} from "@/utils/math.js";

const props = defineProps({
  number:{
    type:Number,
    required:true,
  },
  formatter:Function,
  time:{
    type:Number,
    default:2000
  },
  stepNum:{
    type:Number,
    default:20
  }
})
defineOptions({
  name: "digital-flop",
})
const startNumber = ref(0)
const _number = ref(startNumber.value)
const startHandle = ()=>{
  const step =Math.ceil(math.divide(props.number, math.divide(props.time,props.stepNum)))
  let timer = setInterval(()=>{
    if(math.add(_number.value,step)>=props.number){
      _number.value=props.number
      clearInterval(timer)
    }else {
      _number.value+=step
    }
  },props.stepNum)
}
onMounted(()=>{
  startHandle()
})

</script>

<style lang="less" scoped>

</style>
