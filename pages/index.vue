<template>
  <div class="page__module">
    <app-hero />
    <app-content />
  </div>
</template>

<script>
import AppHero from "@/components/AppHero.vue";
import AppContent from "@/components/AppContent.vue";
// import LocomotiveScroll from "locomotive-scroll";
export default {
  data() {
    return {
      // lmS: null
    };
  },
  mounted() {
    // this.lmS = new this.locomotiveScroll({
    //   el: document.querySelector("[data-scroll-container]"),
    //   smooth: true
    // });
  },
  components: {
    AppHero,
    AppContent
  }
};
</script>

<style lang="scss" scoped>
</style>