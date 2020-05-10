<template>
  <section class="hero_container" data-scroll-container>
    <div class="background">
      <div class="hero-content__wrapper">
        <h1 class="me">{{ name }}</h1>
        <h3>{{subheading}}</h3>
      </div>
    </div>
    <div class="foreground"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "Eric Lam",
      subheading: "Junior Front-end Web Developer @ Chriate"
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
section {
  // .top-bg {
  //   height: calc(100vh / 3);
  //   width: 100%;
  //   background: url("~assets/images/top-bg.jpg");
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-position: center;
  // }
  // .mid-bg {
  //   height: calc(100vh / 3);
  //   width: 100%;
  //   background: url("~assets/images/mid-bg.png");
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-position: center;
  // }

  // .bottom-bg {
  //   position: relative;
  //   height: calc(100vh / 3);
  //   width: 100%;
  //   background: url("~assets/images/bottom-bg.png");
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-position: center;

  // }

  .background {
    position: relative;
    height: 100vh;
    width: 100%;
    background: url("~assets/images/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .hero-content__wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 45vh;
      .me {
        color: white;
        font-size: 90px;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        transform: translateX(-50%);
      }
      h3 {
        position: absolute;
        bottom: 0%;
        left: calc(50% + 220px);
        transform: translateX(-50%);
        color: white;
      }
    }
  }

  position: relative;
  height: 100vh;
  width: 100%;
  // background: url("~assets/images/background.jpg");
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
}
</style>