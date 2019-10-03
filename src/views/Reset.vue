<template>
  <div class="wrap">
    <div class="header">
      <div class="logo">
        <a href="#" title>Religram</a>
        <p class="slogan">Heaven in your hands</p>
      </div>
    </div>
    <div class="content">
      <div class="form form-reset-pw">
        <form @submit.prevent="onSubmit" id="form_reset_pw">
          <label>New password</label>
          <input
            type="password"
            placeholder="New password"
            v-model="password"
            name="reset-pw"
            id="password"
            class="input-text"
            :class="{invalid: $v.password.$error}"
          />
          <label>Confirm password</label>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confrim password"
            name="reset-pw-cf"
            id="confirmPassword"
            class="input-text"
          />
          <button
            type="submit"
            name="reset-pw-submit"
            id="reset_pw_submit"
            class="btn btn-full"
          >Reset password</button>
        </form>
      </div>
    </div>
    <div v-show="isOk" class="message message-success">
      <p>Reset successfully!</p>
    </div>
  </div>
</template>

<script>
import auth from "../axios/axios-auth";
import {
  required,
  minLength,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      isOk: false
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(32)
    },

    confirmPassword: {
      required,
      sameAsPassword: sameAs("password")
    }
  },

  methods: {
    sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break;
        }
      }
    },
    onSubmit() {
      //   console.log(this.confirmPassword);
      this.$v.$touch();
      if (!this.$v.$invalid) {
        auth
          .post(
            "/resetpass",
            {
              newPass: this.password,
              confirmPass: this.confirmPassword
            },
            {
              headers: {
                Authorization: "Bearer " + this.$store.state.token
              }
            }
          )
          .then(res => {
            if (res.status == 200) {
              this.sleep(1000);
              this.$router.push({ name: "login" });
            }
          })
          .catch(err => {
            console.log(err.response);
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