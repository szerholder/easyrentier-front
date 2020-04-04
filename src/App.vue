<template>
  <div id="app" class="container">

    <mainbar />
    <mainform />
    <chatbox />

    <tablelist />
    
  </div>
</template>






<script>
import mainbar from './components/mainbar'
import mainform from './components/mainform'
import chatbox from './components/chatbot'
import tablelist from './components/tablelist'


export default {
  name: 'App',
  components: {
    mainbar,
    mainform,
    chatbox,
    tablelist
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

.container {
  max-width: 800px;
}

li {
  display: inline-block;
  margin: 0 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

</style>
