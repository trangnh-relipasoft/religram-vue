<template>
  <div class="wrap">
    <div class="header">
      <div class="logo">
        <a href="#" title>Religram</a>
        <p class="slogan">Heaven in your hands</p>
      </div>
    </div>
    <div class="content">
      <div class="form form-sign-up">
        <div class="login-fb login-fb-v2">
          <p>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <a @click="logInWithFacebook()">Login with Facebook</a>
          </p>
        </div>
        <div class="label-break">
          <span>or</span>
        </div>
        <form @submit.prevent="onSubmit" id="form_sign_up">
          <input
            type="text"
            v-model="email"
            placeholder="Email"
            name="signup-email"
            id="email"
            class="input-text"
            :class="{invalid: $v.email.$error}"
          />
          <input
            type="text"
            v-model="fullname"
            placeholder="Full name"
            name="signup-name"
            id="fullname"
            class="input-text"
            :class="{invalid: $v.fullname.$error}"
          />
          <input
            type="text"
            v-model="username"
            placeholder="User name"
            name="signup-user"
            id="username"
            class="input-text"
            :class="{invalid: $v.username.$error}"
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            name="signup-pass"
            id="password"
            class="input-text"
            :class="{invalid: $v.password.$error}"
          />
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm password"
            name="signup-pass-cf"
            id="confirmPassword"
            class="input-text"
            :class="{invalid: $v.confirmPassword.$error}"
          />
          <button type="submit" name="signup-submit" id="signup_submit" class="btn btn-full">Sign up</button>
        </form>
      </div>
      <div class="sign-up">
        <p>
          Have a account?
          <a href @click="goLogin">Log in</a>
        </p>
      </div>
    </div>
    <div v-show="error!='' " class="message message-error">
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
import { access } from "fs";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      username: "",
      password: "",
      email: this.$store.state.email,
      fullname: this.$store.state.fullname,
      confirmPassword: "",
      error: ""
    };
  },

  validations: {
    email: {
      required,
      email
    },

    fullname: {
      required
    },

    username: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(32)
    },

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
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let formData = {
          username: this.username,
          email: this.email,
          password: this.password,
          fullname: this.fullname
        };

        // console.log(formData);
        auth
          .post("/signup", formData)
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
              this.error = err.response.data.message;
            }
          });
      }
    },

    update(userData) {
      this.email = userData.email;
      this.fullname = userData.fullname;
    },

    goLogin() {
      this.$router.push({ name: "login" });
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
                      this.update(userData2);
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
</style>