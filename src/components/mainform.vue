<template>
    <div>

        <div class="form-group">
            <label for="exampleFormControlSelect1">Rezerwuj kamerę:</label>
            
            <select class="form-control" id="exampleFormControlSelect1">
                <option>FLIR E4 WIFI KAMERA TERMOWIZYJNA 80X60</option>
                <option>FLIR C2 KAMERA TERMOWIZYJNA 80X60</option>
                <option>SONEL KT-320 KAMERA TERMOWIZYJNA</option>
                <option>TESTO 855 KAMERA TERMOWIZYJNA </option>
                <option>FLUKE TIS45 KAMERA TERMOWIZYJNA 160X120</option>
            </select>
        </div>


        <div class="form-group">
            <label for="exampleFormControlSelect2">Wybierz miasto:</label>
            <select class="form-control" id="exampleFormControlSelect2">
                <option>Kraków</option>
                <option>Częstochowa</option>
                <option>Warszawa</option>
                <option>Katowice</option>
                <option>Gdańsk</option>
            </select>
        </div>


        <div class="form-group">
            <label for="exampleFormControlTextarea1">Dodatkowe informacje:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>


        <div class="d-flex flex-row-reverse">
            <div><button type="button" class="btn btn-primary" v-on:click="makeOrder()">Złóż zlecenie</button></div>
        </div>

        

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "mainform",
    data(){
        return{
            camera: null,
            town: null,
            description: null
        }

    },

    methods:{
        makeOrder(){
            var e = document.getElementById("exampleFormControlSelect1");
            this.camera = e.options[e.selectedIndex].value;
            var e2 = document.getElementById("exampleFormControlSelect2");
            this.town = e2.options[e2.selectedIndex].value;
            this.description = document.getElementById("exampleFormControlTextarea1").value;

            axios.post('http://localhost:8080/', { camera: this.camera, town: this.town, description: this.description} ).then(res=>{
                console.log(res)
            })

        }
    }
}
</script>