<template>
  <div class="sub-nav">
    <div class="sub-nav-inner">
      <div class="sub-nav-top">
        <div class="left">
          <slot name="left"/>
        </div>
        <div class="right" v-if="showRight">
          <slot name="right"/>
        </div>
      </div>

      <div :class="dropdownClasses">
        <slot name="dropdown"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showRight: { type: Boolean, default: true },
    showDropdown: { type: Boolean, default: false }
  },
  computed: {
    dropdownClasses() {
      return ["dropdown", this.showDropdown ? "show-dropdown" : ""];
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/mixins.scss";
.sub-nav {
  background-color: #44bcd8;
  z-index: 100;
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 61px;

  &-inner {
    width: 100%;
    position: relative;
  }

  &-top {
    display: flex;
    padding: 10px 0;
  }

  .left {
    flex-grow: 1;
  }

  .right {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }

  .dropdown {
    width: 100%;
    transition: height 300ms cubic-bezier(0.5, 0, 1, 1);
    height: 0;
    background-color: white;
    border-bottom: 1px black solid;
    position: absolute;
    overflow: hidden;

    &.show-dropdown {
      min-height: 1px;
      height: 100px;
    }
  }
}
</style>
