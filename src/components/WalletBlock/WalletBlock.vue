<template>
  <modal title="&nbsp;" v-model:open="modalOpen">
    <template v-slot:title>
      <div class="modal-title">Connect Wallet</div>
    </template>
    <div class="item" v-for="i in list" @click="i.handle" :key="i.name">
      <img :src="i.icon" alt="">
      {{ i.name }}
    </div>
  </modal>
</template>

<script setup>
import Modal from "@/components/Modal-A.vue";
import {watch} from "vue";
import Metamask from '@/assets/images/Metamask.svg'
import mixin from "@/components/WalletBlock/mixin.js";
import {useAppState} from "@/store/modules/app.js";

const {MetamaskHandle,modalOpen,phantomHandle} = mixin()
const appState = useAppState()
const emit = defineEmits(["close", 'success']);
const openHandle = () => {
  modalOpen.value = true
}
watch(modalOpen, () => {
  if (!modalOpen.value) {
    emit('close')
  }
})
const list = [
  {
    icon: Metamask,
    name: 'Metamask',
    handle: MetamaskHandle
  },
  // {
  //   icon: PhantomWallet,
  //   name: 'Phantom Wallet',
  //   handle:phantomHandle
  // },
  // {
  //   icon: BinanceWeb3Wallet,
  //   name: 'Binance Web3 Wallet'
  // },
  // {
  //   icon: Trust,
  //   name: 'Trust'
  // },
  // {
  //   icon: Coinbase,
  //   name: 'Coinbase'
  // },
  // {
  //   icon: WalletConnect,
  //   name: 'Wallet Connect'
  // },
  // {
  //   icon: Ledger,
  //   name: 'Ledger'
  // }
]
defineExpose({
  openHandle
})
</script>

<style lang="scss" scoped>
:deep(.errorModal) {
  .title {
    color: #f52b11;
  }
}

.modal-title {
  font-family: Prototype;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: #EDE4CC;
  text-align: center;
  width: 100%;
}

.item {
  display: flex;
  margin: 24px 0 24px 35px;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-family: "KrossNeueGrotesk-Regular";

  img {
    margin-right: 29px;
  }
}
</style>
