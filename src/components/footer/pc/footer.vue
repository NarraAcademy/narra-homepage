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
    <Modal v-model:open="successOpen" title="Success">
      Thank you for enrolling with the ZAI崽 Training Academy! 🏅<br>You'll be hearing from our team very soon.
    </Modal>
    <div class="footer">
      <div class="footer-left">
        <h1 class="footer-title">Join our community</h1>
        <div class="share-container">
          <img
              v-for="item in shareIcons"
              @click="onGoToShare(item.link)"
              :src="item.icon"
              class="share-item"
          />
        </div>
        <div class="left-boottom">
          <div v-for="pageLinkCol in pageLinks" class="left-boottom-col">
            <h3
                v-for="(pageLink,index) in pageLinkCol"
                @click="onGoToPageLink(pageLink.id)"
                class="left-boottom-col-item"
                :class="index ===0?'left-boottom-col-item-title':''"
            >

              <router-link v-if="pageLink.blankRoute" :to="pageLink.blankRoute" target="_blank">{{ pageLink.name }}</router-link>
              <span v-else @click="pushHandle(pageLink.route)">{{ pageLink.name }}</span>
            </h3>
          </div>
        </div>
      </div>

<!--      <div class="footer-right">-->
<!--        &lt;!&ndash;        <div class="footer-title">Standard Access</div>&ndash;&gt;-->
<!--        <div class="right-des">-->
<!--          Join the waitlist and stay updated on Narra’s happenings!-->
<!--        </div>-->
<!--        <div class="submit-container">-->
<!--          <div class="submit-email" :class="emailSubmiteShowErrorMessage?'input-error':''">-->
<!--            <div-->
<!--                v-if="emailSubmiting && !emailSubmiteShowSucces"-->
<!--                class="submit-input"-->
<!--            >-->
<!--              Loading...-->
<!--            </div>-->
<!--            <input-->
<!--                v-else-->
<!--                v-model="email"-->
<!--                placeholder="Email Address"-->
<!--                type="text"-->
<!--                :disabled="!!emailSubmiteShowErrorMessage"-->
<!--                class="submit-input"-->
<!--                @keydown.enter="submitEmail"-->
<!--            />-->
<!--            &lt;!&ndash;          <div&ndash;&gt;-->
<!--            &lt;!&ndash;            v-if="emailSubmiteShowErrorMessage"&ndash;&gt;-->
<!--            &lt;!&ndash;            class="submit-show-success"&ndash;&gt;-->
<!--            &lt;!&ndash;          >&ndash;&gt;-->
<!--            &lt;!&ndash;            Thank you! Your submission has been received!&ndash;&gt;-->
<!--            &lt;!&ndash;          </div>&ndash;&gt;-->
<!--            <div v-if="emailSubmiteShowErrorMessage" class="submit-show-error">-->
<!--              {{ emailSubmiteShowErrorMessage }}-->
<!--            </div>-->
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
  width: 100%;
  margin: -30px auto 0;
  z-index: 99;
  max-width: var(--page-inner-width);
  position: relative;
  background: url("@/assets/images/pc/footer/footer-bg.png") no-repeat center /100% 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 57px 54px 64px;

  .footer-title {
    font-family: 'Prototype';
    color: #EDE4CC;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    cursor: default;
  }

  .footer-left {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .share-container {
      margin: 24px 0 36px;
      display: flex;
      align-items: center;

      .share-item {
        margin-right: 24px;
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }

    .left-boottom {
      display: flex;
      font-family: 'Prototype';
      justify-content: start;
      gap: 30px;
      flex-wrap: wrap;

      .left-boottom-col {
        margin-right: 30px;
        display: flex;
        flex-direction: column;
        gap: 16px;

        .left-boottom-col-item {
          cursor: pointer;
          color: #EDE4CC;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          a{
            color: #EDE4CC;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
          }

          &:hover {
            color: #7d7d7d;
          }
          a:hover{
            color: #7d7d7d;
          }

          &-title {
            font-size: 20px;
            line-height: 26px;
            a{
              font-size: 20px;
              line-height: 26px;
            }
          }
        }
      }
    }
  }

  .footer-right {
    width: 474px;
    display: flex;
    flex-direction: column;
    gap: 28px;

    .right-des {
      color: #fff;
      font-family: 'KrossNeueGrotesk-Regular';
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }

    .submit-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .submit-email {
        width: 400px;
        height: 99px;
        background: url("@/assets/images/pc/footer/input-bg.png") center no-repeat;
        background-size: 100% 100%;
        position: relative;
        font-family: "KrossNeueGrotesk-Regular";

        .submit-input {
          font-family: "KrossNeueGrotesk-Regular";
          width: 400px;
          height: 99px;
          line-height: 86px;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          display: block;
          padding: 0 20px 10px;
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
        background-image: url("@/assets/images/pc/footer/input-error-bg.png");
      }

      .submit-button {
        width: 58px;
        height: 58px;
        background: url("@/assets/images/pc/footer/submit-icon.png") center/cover no-repeat;
        cursor: pointer;
      }

      .submit-button-disabled {
        width: 58px;
        height: 58px;
        background: url("@/assets/images/pc/footer/submit-icon-disabled.png") center/cover no-repeat;
        cursor: default;
      }
    }
  }
}
</style>
