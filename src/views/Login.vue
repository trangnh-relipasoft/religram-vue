<template>
  <div class="wrap">
    <div class="header">
      <div class="logo">
        <a href="#" title>Religram</a>
        <p class="slogan">Heaven in your hands</p>
      </div>
    </div>
    <div class="content">
      <div class="form form-login">
        <form @submit.prevent="onSubmit" id="form_login">
          <!-- <p v-if="!$v.username.$error" style="color:green">Ting ting</p>
          <p v-if="!$v.username.required" style="color:red">Usename is required</p>
          <p v-if="!$v.username.minLength" style="color:red">Usename is too short</p>
          <p v-if="!$v.username.maxLength" style="color:red">Usename is too long</p>-->

          <input
            type="text"
            v-model="username"
            placeholder="Username or Email"
            name="login-user"
            id="username"
            class="input-text"
            :class="{invalid: $v.username.$error}"
          />
          <!-- <p>{{$v}}</p> -->

          <input
            type="password"
            v-model="password"
            placeholder="Password"
            name="login-pass"
            id="password"
            class="input-text"
            :class="{invalid: $v.password.$error}"
          />
          <button
            type="submit"
            name="login-submit"
            id="login_submit"
            class="btn btn-full"
            :class="{disableButton: $v.$invalid}"
          >Log in</button>
        </form>
        <div class="label-break">
          <span>or</span>
        </div>
        <div class="login-fb">
          <p>
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            <a @click="logInWithFacebook()">Log in with facebook</a>
          </p>
        </div>
        <p class="forgot-pass">
          <a href @click="$router.push({name: 'forgotpassword'})" title>Forgot password?</a>
        </p>
      </div>
      <div class="sign-up">
        <p>
          Don't have an account?
          <a @click="signup" href>Sign up</a>
        </p>
      </div>
    </div>
    <div v-show="error != ''" class="message message-error">
      <p>{{error}}</p>
    </div>
  </div>
</template>

<script>
window.fbAsyncInit = function() {
  FB.init({
    appId: "375868253100420",
    cookie: true, // This is important, it's not enabled by default
    version: "v2.2"
  });
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

import auth from "../axios/axios-auth";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },

  validations: {
    username: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(32)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(32)
    }
  },

  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let formData = {
          username: this.username,
          password: this.password
        };
        auth
          .post("/login", formData)
          .then(res => {
            console.log(res);
            console.log(res.headers)
            console.log(document.cookie)
            if (res.status == 200) {
              let userData = {
                username: res.data.user.username,
                email: res.data.user.email,
                fullname: res.data.user.fullname,
                token: res.data.token
              };
              this.$store.dispatch("authUser", userData);
              this.$router.push({ name: "home" });
            }
          })
          .catch(err => {
            if (err) {
              this.error = err.response.data.message;
              console.log(err.response);
            }
          });
      }
    },

    signup() {
      this.$router.push({ name: "signup" });
    },

    logInWithFacebook() {
      let checkStatus = 0;
      FB.login(
        response => {
          if (response.authResponse) {
            const access_token = response.authResponse.accessToken;
            // console.log(access_token);
            auth
              .post("/login/facebook", { accessToken: access_token })
              .then(res => {
                if (res.status == 200) {
                  let userData = {
                    username: res.data.user.username,
                    email: res.data.user.email,
                    fullname: res.data.user.fullname,
                    token: res.data.token
                  };
                  this.$store.dispatch("authUser", userData);
                  this.$router.push({ name: "home" });
                }
              })
              .catch(err => {
                if (err) {
                  console.log(err.response);
                  auth
                    .post("/signup/facebook", { accessToken: access_token })
                    .then(res => {
                      // console.log(res);
                      let userData2 = {
                        username: "",
                        email: res.data.email,
                        fullname: res.data.fullname,
                        token: ""
                      };
                      this.$$router.push({ name: "signup" });
                    });
                }
              });
          }
        },
        { scope: "email", auth_type: "reauthenticate" }
      );
      return false;
    }
  }
};
</script>

<style scoped>
.invalid {
  border-width: 2px;
  border-color: rgb(226, 35, 35);
}

.disableButton {
  background-color: grey;
}
</style>