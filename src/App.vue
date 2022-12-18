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
    <!-- <router-link to="/databindinglist">Data Binding List</router-link> |  -->
    <!-- <router-link to="/renderingvif">Rendering V-if</router-link> | -->
    <!-- <router-link to="/renderingvshow">Rendering V-Show</router-link> | -->
    <!-- <router-link to="/eventclick">Event Click</router-link> | -->
    <!-- <router-link to="/eventchange">Event Change</router-link> | -->
    <!-- <router-link to="/eventkey">Event Key</router-link> | -->
    <!-- <router-link to="/computedclass">Computed-Class</router-link> |
    <router-link to="/watchclass">Watch-Class</router-link> | -->
    <!-- <router-link to="/watchclass2">Watch-Class2</router-link> | -->
    <!-- <router-link to="/databindinglist2">Data-Binding-List2</router-link> | -->
    <!-- <router-link to="/nestedcomponent">Nested-Component</router-link> | -->
    <!-- <router-link to="/parentcomponent">Parent-Component</router-link> | -->
    <!-- <router-link to="/parentcomponent2">Parent-Component2</router-link> | -->
    <!-- <router-link to="/parentcomponent3">Parent-Component3</router-link> | -->
    <!-- <router-link to="/parentcomponent4">Parent-Component4</router-link> | -->
    <!-- <router-link to="/parentcomponent5">Parent-Component5</router-link> | -->
    <!-- <router-link to="/slotusemodallayout">SlotUseModalLayout</router-link> | -->
    <!-- <router-link to="/provideinject">Provide Inject</router-link> | -->
    <!-- <router-link to="/calculator">Calculator</router-link> | -->
    <!-- <router-link to="/compositionAPI">CompositionAPI</router-link> | -->
    <!-- <router-link to="/compositionAPI2">CompositionAPI2</router-link> | -->
    <!-- <router-link to="/compositionAPI3">CompositionAPI3</router-link> | -->
    <!-- <router-link to="/compositionAPI4">CompositionAPI4</router-link> | -->
    <!-- <router-link to="/compositionAPIProvide">CompositionAPIProvide</router-link> | -->
    <!-- <router-link to="/mixinsapi">MixinsAPI</router-link> | -->
    <router-link to="/customdirective">CustomDirective</router-link> |
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
