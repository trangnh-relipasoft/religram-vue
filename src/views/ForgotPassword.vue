<template>
  <div class="wrap">
    <div class="header">
      <div class="logo">
        <a href="#" title>Religram</a>
        <p class="slogan">Heaven in your hands</p>
      </div>
    </div>
    <div class="content">
      <div class="form form-forgot-pw">
        <p class="center">
          <img src="images/icon-lock.png" alt />
        </p>
        <h3 class="center">Trouble Logging In?</h3>
        <p
          class="center"
        >Enter your username or email and we'll send you a link to get back into account.</p>
        <form @submit.prevent="onSubmit" id="form_forgot_pw">
          <input
            type="text"
            v-model="email"
            placeholder="Email or username"
            name="fpw-email-fb"
            id="email"
            class="input-text"
            :class="{invalid: $v.email.$error}"
          />
          <button type="submit" name="fpw-submit-fb" id="fpw_submit" class="btn btn-full">Submit</button>
        </form>
        <div class="label-break">
          <span>or</span>
        </div>
      </div>
      <div class="sign-up">
        <p>
          <a href @click="$router.push({name: 'signup'})" title>Creat New Account</a>
        </p>
      </div>
      <div class="box-back">
        <a href @click="$router.push({name: 'login'})" title>Back to log in</a>
      </div>
    </div>
    <div v-show="error != ''" class="message message-error">
      <p>{{error}}</p>
    </div>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import auth from "../axios/axios-auth";
export default {
  data() {
    return {
      email: "",
      error: ""
    };
  },

  validations: {
    email: {
      required,
      email
    }
  },

  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // console.log(this.email);
        auth
          .post("/resetpassword", { email: this.email })
          .then(res => {
            if (res.status == 200) {
              this.$router.push({ name: "forgotpasswordsuccess" });
            }
          })
          .catch(err => {
            if (err) {
              this.error = err.response.data.message;
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.invalid {
  border-width: 2px;
  border-color: rgb(226, 35, 35);
}
</style>