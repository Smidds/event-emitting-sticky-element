<template>
  <div class="header">
    <span>A really cool page</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
@import "../assets/styles/mixins.scss";

.header {
  @include center();
  height: 500px;
  background: black
    url("https://images.unsplash.com/photo-1597450173044-cb6621673075?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80")
    no-repeat 50% 40%;

  span {
    transform: rotate(-10deg);
    text-transform: uppercase;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font: 40px/1 "Permanent Marker", cursive;
    text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
      -1px 1px 0 #000, 1px 1px 0 #000;
  }
}
</style>
