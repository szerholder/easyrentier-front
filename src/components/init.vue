<template>
    <div>
        <div class="container kafelkiodlewej bg-secondary">
        <div> A </div>
        <div> B </div>
        <div> C </div>
        <div> D 
            <br>D
            <br>D
        </div>
        </div>

        <br>

        <b-containter class="bg-primary">
        <b-row class="bg-warning">
            <b-col class="bg-primary"> A </b-col>
            <b-col> B </b-col>
            <b-col> C </b-col>
            <b-col> D </b-col>
        </b-row>
        </b-containter>

        <br>


        <b-container class="bg-success">
            <ul>
                <li v-for="item in lista" v-bind:key="item">{{item}}</li>
            </ul>
        </b-container>

    </div>

</template>


<script>
export default {
  name: 'init',
  data(){
    return{
      lista: ["pierwszy","drugi","trzeci"]

    }

  }
}
</script>

