<template>
    <div class="home">
        <img
                alt="Relipa Software"
                src="https://relipasoft.com/vi/wp-content/uploads/sites/4/2018/09/Relipa-text-2.png"
        />
        <HelloWorld msg="Welcome to to to to to to to to something cool"/>
        <p v-show="!this.$store.state.token == ''">Your logged in</p>
        <br/>
        <p>Wanna click something? Hmmmmm</p>
        <button @click="login" class="btn btn-primary" v-show="this.$store.state.token == ''">Log in</button>
        <button @click="logout" class="btn btn-primary" v-show="this.$store.state.token != ''">Log out</button>
        <template v-if="this.$store.state.token != ''">
            <br>

            <button @click="homepage" class="btn btn-primary" v-show="this.$store.state.token != ''">Go Homepage
            </button>
        </template>
    </div>

</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";

    export default {
        name: "home",
        components: {
            HelloWorld
        },

        methods: {
            logout() {
                this.$store.dispatch("clearAuth");
                console.log(this.$store.state.username);
            },

            login() {
                this.$router.push({name: "login"});
            },
            homepage() {
                this.$router.push({name: 'homepage'})
            }
        }
    };
</script>
