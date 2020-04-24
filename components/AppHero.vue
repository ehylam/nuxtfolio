<template>
  <section class="hero-section">
    <div class="foreground"></div>
  </section>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url("~assets/images/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: grayscale(100%);
  .foreground {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url("~assets/images/foreground.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>