<template>
  <div id="app">
    <Masthead/>
    <Header/>
    <SubNav :show-right="showRight" :show-dropdown="showDropdown">
      <template v-slot:left>
        <button class="cool-button" @click="toggleRight">Hide right side</button>
        <button class="cool-button" @click="showAlert">Show cool alert</button>
      </template>
      <template v-slot:right>
        <button class="cool-button" @click="toggleDropdown">Show dropdown</button>
      </template>
      <template v-slot:dropdown>
        <h1>Dropdown!</h1>
      </template>
    </SubNav>
    <Filler/>
  </div>
</template>

<script>
import Filler from "./components/filler";
import Masthead from "./components/masthead";
import Header from "./components/header";
import SubNav from "./components/subnav";

export default {
  name: "App",
  components: {
    Masthead,
    Header,
    SubNav,
    Filler
  },
  data() {
    return {
      showRight: true,
      showDropdown: false
    };
  },
  methods: {
    toggleRight() {
      this.showRight = !this.showRight;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    showAlert() {
      window.alert("Wow! So cool!");
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .cool-button {
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    background-color: white;
    border: 2px blue solid;
    border-radius: 8px;

    &:active {
      background-color: grey;
      color: white;
    }
  }
}
</style>
