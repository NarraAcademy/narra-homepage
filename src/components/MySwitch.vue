<template>
  <div class="container" :class="{disabled:props.disabled}">
    <label class="switch" :class="{active:check,disabled:props.disabled}">
      <input v-if="!disabled" v-model="check" type="checkbox" class="checkbox">
      <span :class="{disabled:props.disabled}" class="slider"></span>
    </label>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  checked: Boolean,
  disabled:{
    type:Boolean,
    default: false
  }
})
const emit = defineEmits(['update:checked'])
const check = computed({
  get(){
    return props.checked;
  },
  set(v){
    emit('update:checked',v)
  }
})
</script>

<style lang="scss" scoped>

/* The switch - the box around the slider */
.container {
  display: inline-block;
  vertical-align: middle;
  width: 51px;
  height: 31px;
  position: relative;
}

/* Hide default HTML checkbox */
.checkbox {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.switch {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #e9e9eb;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

/* The slider */
.slider {
  width: 27px;
  height: 27px;
  position: absolute;
  left: calc(50% - 27px / 2 - 10px);
  top: calc(50% - 27px / 2);
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-out;
  cursor: pointer;
}

.active {
  background-color: #34C759;

  .slider {
    left: calc(50% - 27px / 2 + 10px);
    top: calc(50% - 27px / 2);
  }
}
.disabled{
  cursor: not-allowed;
}

</style>
