<template>
  <div>
    <app-nav />
    <nuxt />
  </div>
</template>


<script>
import AppNav from "@/components/AppNav.vue";

export default {
  components: {
    AppNav
  },
  mounted() {}
};
</script>

<style>
html {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #040404;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
