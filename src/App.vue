<template>
  <div id="app" class="container">


    <h1>Easy Rentier</h1>
    <ul>
      <li><a href="#" target="_blank" rel="noopener">Kamery</a></li>
      <li><a href="#" target="_blank" rel="noopener">Specjaliści</a></li>
      <li><a href="#" target="_blank" rel="noopener">Szkolenia</a></li>
    </ul>


    
    <div class="form-group">
    <label for="exampleFormControlSelect1">Wybierz kamerę:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>FLIR E4 WIFI KAMERA TERMOWIZYJNA 80X60</option>
      <option>FLIR C2 KAMERA TERMOWIZYJNA 80X60</option>
      <option>SONEL KT-320 KAMERA TERMOWIZYJNA</option>
      <option>TESTO 855 KAMERA TERMOWIZYJNA </option>
      <option>FLUKE TIS45 KAMERA TERMOWIZYJNA 160X120</option>
    </select>
    </div>


    <div class="form-group">
    <label for="exampleFormControlSelect1">Wybierz miasto:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Kraków</option>
      <option>Częstochowa</option>
      <option>Warszawa</option>
      <option>Gdańsk </option>
    </select>
    </div>


    <div class="form-group">
    <label for="exampleFormControlTextarea1">Dodatkowe informacje</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>


    <div class="d-flex flex-row-reverse">
      <div><button type="button" class="btn btn-primary">Złóż zlecenie</button></div>
    </div>


  </div>
</template>





<script>


export default {
  name: 'App',
  components: {
  },
  data(){
    return{

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
