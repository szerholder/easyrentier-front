<template>
  <div id="app" class="container">







    <init class="fixed-bottom"/>
    
  </div>
</template>







<script>
import init from './components/init.vue'

export default {
  name: 'App',
  components: {
    init
  },
  data(){
    return{
      lista: ["pierwszy","drugi","trzeci"]

    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.kafelkiodlewej{
  display: flex;
  flex-direction: row-reverse;

}
</style>
