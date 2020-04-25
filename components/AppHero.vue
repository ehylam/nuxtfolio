<template>
  <section class="hero_container" data-scroll-container>
    <div class="foreground"></div>
    <h1 class="me">{{ name }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "Eric Lam"
    };
  },
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
  z-index: 1;
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
    z-index: 3;
  }

  h1 {
    color: white;
    font-size: 90px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
  }
}
</style>