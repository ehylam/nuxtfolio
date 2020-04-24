<template>
  <div>
    <!-- <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#projects">Projects</nuxt-link>
      </li>
    </ul>-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  padding: 15px 0;
  ul {
    padding-left: 0;
    li {
      display: inline-block;
      margin-right: 30px;
      a {
        color: rgb(216, 216, 216);
        text-decoration: none;
      }
    }
  }
}
</style>