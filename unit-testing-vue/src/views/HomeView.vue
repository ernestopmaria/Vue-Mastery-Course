<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AppHeader />
    <RandomNumber />
    <LoginForm />
    <MessageDisplay />
  </div>
</template>

<script>
// @ is an alias to /src

import AppHeader from "@/components/AppHeader.vue";
import LoginForm from "@/components/LoginForm.vue";
import MessageDisplay from "@/components/MessageDisplay.vue";
import RandomNumber from "@/components/RandomNumber.vue";

export default {
  name: "HomeView",
  components: {
    AppHeader,
    RandomNumber,
    LoginForm,
    MessageDisplay,
  },
};
</script>
