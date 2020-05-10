<template>
  <section class="content_container">
    <div class="content">
      <h3>{{ heading }}</h3>
      <p>{{ info }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heading: "Welcome",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non."
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  width: 100%;
  padding: 50px 25px;
  @media (min-width: 768px) {
    padding: 50px 70px;
  }
  @media (min-width: 1024px) {
    padding: 100px 120px;
  }
  .content {
    max-width: calc(50vw - 200px);
    h3,
    p {
      color: rgb(231, 231, 231);
    }

    p {
      font-size: 14px;
    }
  }
}
</style>