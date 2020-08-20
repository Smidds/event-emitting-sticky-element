<template>
  <div class="masthead">
    <div>Hello and welcome to this demo!</div>
    <div v-if="options !== null">
      Subnav variation:
      <select
        name="nav-opts"
        class="subnav-options"
        :value="selected"
        v-on="inputListeners"
      >
        <option v-for="(opt, index) in options" :key="index" :value="opt">{{opt}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "selected",
    event: "input"
  },
  props: {
    options: { type: Array, default: null },
    selected: { type: String, default: "" }
  },
  computed: {
    inputListeners: function() {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit("input", `${event.target.value}`);
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/mixins.scss";

.masthead {
  @include center();
  padding: 10px;
  background-color: white;
  width: 100%;
  height: 50px;
  position: fixed;
  border-bottom: 1px black solid;
  box-shadow: 0 2px 10px 5px grey;
  z-index: 100;
  display: flex;
  flex-direction: column;

  .subnav-options {
    border: none;
  }
}
</style>
