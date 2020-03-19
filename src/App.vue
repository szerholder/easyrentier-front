<template>
  <div id="app">
    
    
    <div class="container kafelkiodlewej">
      <div> A </div>
      <div> B </div>
      <div> C </div>
      <div> D 
        <br>D
        <br>D
      </div>
    </div>

    <br>
    <br>
    <br>

    <b-containter>
      <b-row>
        <b-col> A </b-col>
        <b-col> B </b-col>
        <b-col> C </b-col>
        <b-col> D </b-col>
      </b-row>
   </b-containter>



  </div>
</template>







<script>


export default {
  name: 'App',
  components: {

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
