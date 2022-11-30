<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">about</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">Data Binding Html</router-link> | 
    <router-link to="/databindinginputtext">Data Binding Input Text</router-link> |
    <router-link to="/databindinginputnumber">Data Binding Input Number</router-link> |
    <router-link to="/databindingtextarea">Data Binding Text</router-link> |
    <router-link to="/databindingselect">Data Binding Select </router-link> |
    <router-link to="/databindingscheckbox">Data Binding checkbox </router-link> |
    <router-link to="/databindingscheckbox2">Data Binding checkbox2</router-link> |
    <router-link to="/databindingradio">Data Binding radio</router-link> |
    <router-link to="/databindinattribute">Data Binding Attribute</router-link> |
    <router-link to="/databindingbutton">Data Binding Button</router-link> |
    <router-link to="/databindingclass">Data Binding Class</router-link> |
    <router-link to="/databindingstyle">Data Binding Style</router-link> |
    <router-link to="/databindingstyle2">Data Binding Style2</router-link> | -->
    <router-link to="/databindinglist">Data Binding List</router-link> | 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
