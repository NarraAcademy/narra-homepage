<script setup>
import Modal from "@/components/Modal-A.vue";
import mixin from "@/mixin/footer.js";

const {
  shareIcons,
  email,
  emailSubmiting,
  emailSubmiteShowSucces,
  emailSubmiteShowErrorMessage,
  submitDisabled,
  successOpen,
  onGoToShare,
  pageLinks,
  onGoToPageLink,
  submitEmail,
    pushHandle
} = mixin()

</script>
<template>
  <div>
    <modal v-model:open="successOpen" title="Success">
      Thank you for enrolling with the ZAI崽 Training Academy! 🏅<br>You'll be hearing from our team very soon.
    </modal>
    <div class="footer">
      <h1 class="footer-title">Join our community</h1>
      <div class="share-container">
        <img
            v-for="item in shareIcons"
            @click="onGoToShare(item.link)"
            :src="item.icon"
            class="share-item"
        />
      </div>
      <div class="menu">
        <div v-for="pageLinkCol in pageLinks" class="menu-col">
          <h3
              v-for="(pageLink,index) in pageLinkCol"
              @click="onGoToPageLink(pageLink.id)"
              class="menu-col-item"
              :class="index ===0?'menu-col-item-title':''"
          >
            <router-link v-if="pageLink.blankRoute" :to="pageLink.blankRoute" target="_blank">{{ pageLink.name }}</router-link>
            <span v-else @click="pushHandle(pageLink.route)">{{ pageLink.name }}</span>
          </h3>
        </div>
      </div>
      <!--      <div class="footer-title">Standard Access</div>-->
<!--      <div class="right-des">-->
<!--        Join the waitlist and stay updated on Narra’s happenings!-->
<!--      </div>-->
<!--      <div class="submit-container">-->
<!--        <div class="submit-email" :class="emailSubmiteShowErrorMessage?'input-error':''">-->
<!--          <div-->
<!--              v-if="emailSubmiting && !emailSubmiteShowSucces"-->
<!--              class="submit-input"-->
<!--          >-->
<!--            Loading...-->
<!--          </div>-->
<!--          <input-->
<!--              v-else-->
<!--              v-model="email"-->
<!--              placeholder="Email Address"-->
<!--              type="text"-->
<!--              :disabled="!!emailSubmiteShowErrorMessage"-->
<!--              class="submit-input"-->
<!--              @keydown.enter="submitEmail"-->
<!--          />-->
<!--          &lt;!&ndash;          <div&ndash;&gt;-->
<!--          &lt;!&ndash;            v-if="emailSubmiteShowErrorMessage"&ndash;&gt;-->
<!--          &lt;!&ndash;            class="submit-show-success"&ndash;&gt;-->
<!--          &lt;!&ndash;          >&ndash;&gt;-->
<!--          &lt;!&ndash;            Thank you! Your submission has been received!&ndash;&gt;-->
<!--          &lt;!&ndash;          </div>&ndash;&gt;-->
<!--          <div v-if="emailSubmiteShowErrorMessage" class="submit-show-error">-->
<!--            {{ emailSubmiteShowErrorMessage }}-->
<!--          </div>-->
<!--          <div v-if="submitDisabled" class="submit-button-disabled"></div>-->
<!--          <div v-else class="submit-button" @click="submitEmail"></div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>

</template>

<style lang="scss" scoped>
.footer {
  z-index: 99;
  width: 100vw;
  position: relative;
  background: url("@/assets/images/mobile/footer/footer-bg.png") no-repeat center top/100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.55rem 0.24rem 0.55rem 0.24rem;
  margin-top: -0.4rem;

  .footer-title {
    font-family: 'Prototype';
    color: #EDE4CC;
    font-size: 0.24rem;
    font-weight: 400;
    line-height: 0.32rem;
    margin-bottom: 0.24rem;
  }

  .share-container {
    display: flex;
    align-items: center;
    gap: 0.24rem;
    margin-bottom: 0.32rem;

    .share-item {
      width: 0.4rem;
      height: 0.4rem;
      cursor: pointer;
    }
  }

  .menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: 'Prototype';
    gap: 0.2rem;
    margin-bottom: 0.48rem;

    .menu-col {
      display: flex;
      flex-direction: column;
      gap: 0.16rem;

      .menu-col-item {
        a{
          cursor: pointer;
          color: #EDE4CC;
          font-size: 0.14rem;
          font-style: normal;
          font-weight: 400;
          line-height: 0.18rem;
        }
        cursor: pointer;
        color: #EDE4CC;
        font-size: 0.14rem;
        font-style: normal;
        font-weight: 400;
        line-height: 0.18rem;

        &:hover {
          color: #7d7d7d;
        }

        &-title {
          font-size: 0.18rem;
          line-height: 0.24rem;
          a{
            font-size: 0.18rem;
            line-height: 0.24rem;
          }
        }
      }
    }
  }


  .right-des {
    color: #fff;
    font-family: 'KrossNeueGrotesk-Regular';
    font-size: 0.16rem;
    font-weight: 400;
    line-height: 0.24rem;
    margin-bottom: 0.24rem;
  }

  .submit-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .submit-email {
      width: 100%;
      height: 1.0151rem;
      background: url("@/assets/images/mobile/footer/input-bg.png") center no-repeat;
      background-size: 100% 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.16rem 0.25rem;
      font-family: "KrossNeueGrotesk-Regular";

      .submit-input {
        font-family: "KrossNeueGrotesk-Regular";
        width: 2.73rem;
        height: 0.24rem;
        color: #fff;
        font-size: 0.16rem;
        font-weight: 400;
        display: block;
        background: none;
        border: none;

        &:focus {
          outline: none;
        }
      }

      .submit-show-success {
        position: absolute;
        left: 0;
        bottom: -30px;
        margin: auto;
        width: 400px;
        height: fit-content;
        color: #7d7d7d;
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
        padding: 0 20px;
      }

      .submit-show-error {
        position: absolute;
        left: 0;
        bottom: -30px;
        margin: auto;
        width: 400px;
        height: fit-content;
        color: #f52b11;
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
      }
    }

    .input-error {
      background-image: url("@/assets/images/mobile/footer/input-error-bg.png");
    }

    .submit-button {
      width: 0.32rem;
      height: 0.32rem;
      background: url("@/assets/images/mobile/footer/submit-icon.png") center/cover no-repeat;
      cursor: pointer;
    }

    .submit-button-disabled {
      width: 0.32rem;
      height: 0.32rem;
      background: url("@/assets/images/mobile/footer/submit-icon-disabled.png") center/cover no-repeat;
      cursor: default;
    }
  }
}
</style>
