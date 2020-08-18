<template>
  <div class="filler">I'm filler!</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/mixins.scss";
.filler {
  @include center();
  height: 5000px;
  color: black;
  font-size: 100px;
  background-color: lightgrey;
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
}
</style>
