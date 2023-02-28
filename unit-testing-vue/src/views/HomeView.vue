<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AppHeader />
    <RandomNumber />
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src

import AppHeader from "@/components/AppHeader.vue";
import LoginForm from "@/components/LoginForm.vue";
import RandomNumber from "@/components/RandomNumber.vue";

export default {
  name: "HomeView",
  components: {
    AppHeader,
    RandomNumber,
    LoginForm,
  },
};
</script>
