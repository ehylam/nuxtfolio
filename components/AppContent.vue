<template>
  <section class="content_container">
    <div class="content">
      <p>{{ info }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non. Non blandit massa enim nec dui nunc mattis. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Purus in massa tempor nec feugiat. In hac habitasse platea dictumst vestibulum. At in tellus integer feugiat. Volutpat diam ut venenatis tellus in metus vulputate eu. Lorem ipsum dolor sit amet consectetur. Nisl tincidunt eget nullam non. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Libero nunc consequat interdum varius sit amet mattis vulputate. At varius vel pharetra vel."
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  width: 100%;
  padding: 50px 100px;
  .content {
    max-width: calc(100vw - 200px);
    margin: 0 auto;
    p {
      text-align: center;
      color: rgb(231, 231, 231);
    }
  }
}
</style>