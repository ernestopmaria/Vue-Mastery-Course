<template>
  <form @submit.prevent="onSubmit">
    <input data-testid="name-input" type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  emits: ["formSubmitted"],
  methods: {
    onSubmit() {
      this.$emit("formSubmitted", { name: this.name });
    },
  },
};
</script>
