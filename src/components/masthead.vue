<template>
  <div class="masthead">Hello and welcome to this demo!</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/mixins.scss";

.masthead {
  @include center();
  padding: 10px;
  background-color: white;
  width: 100%;
  height: 40px;
  position: fixed;
  border-bottom: 1px black solid;
  box-shadow: 0 2px 10px 5px grey;
  z-index: 100;
}
</style>
