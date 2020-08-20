<template>
  <div ref="sentinel" class="sentinel" :style="style">{{ debug ? "Sentinel Zone" : "" }}</div>
</template>

<script>
export default {
  props: {
    topOffset: { type: Number, required: true },
    debug: { type: Boolean, default: false }
  },
  data() {
    return {
      intersectionObserver: null
    };
  },
  computed: {
    style() {
      return {
        top: `${-this.topOffset}px`,
        visibility: this.debug ? "show" : "hidden"
      };
    }
  },
  mounted() {
    this.intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            this.$emit("is-stuck", true);
          } else {
            this.$emit("is-stuck", false);
          }
        }
      },
      { threshold: [1] }
    );

    this.intersectionObserver.observe(this.$refs.sentinel);
  },
  beforeDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
};
</script>

<style lang="scss">
.sentinel {
  position: absolute;
  left: 0;
  background-color: yellow;
  height: 30px;
  width: 100%;
  z-index: 200;
  border-top: 1px blue solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
