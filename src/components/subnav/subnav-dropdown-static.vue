<template>
  <fragment>
    <div class="sub-nav-top" :style="{ top: `${topOffset}px`}">
      <sentinel :top-offset="topOffset" :debug="false" v-on="$listeners"/>
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
  </fragment>
</template>

<script>
import Sentinel from "./sentinel";
import { Fragment } from "vue-fragment";

export default {
  name: "SubNavDropStatic",
  components: {
    Fragment,
    Sentinel
  },
  props: {
    showRight: { type: Boolean, default: true },
    showDropdown: { type: Boolean, default: false },
    topOffset: { type: Number, required: true }
  },
  computed: {
    dropdownClasses() {
      return ["dropdown", this.showDropdown ? "show-dropdown" : ""];
    }
  },
  methods: {
    isStuck(stuck) {
      console.log("Stuck status: ", stuck);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
.sub-nav {
  &-inner {
    width: 100%;
    position: relative;
  }

  &-top {
    display: flex;
    padding: 10px 0;
    z-index: 100;
    position: -webkit-sticky;
    position: sticky;
    background-color: #5dc05d;
    width: 100%;
  }
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
  overflow: hidden;

  &.show-dropdown {
    height: 100px;
  }
}
</style>
