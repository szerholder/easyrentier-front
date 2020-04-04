<template>
    <div>

    <table class="table">
        <thead class="thead-light"> 
            <tr>
                <th>ID</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Kamera</th>
                <th>Stanowisko</th>
                <th>Regiony</th>
            </tr>
        </thead>


        <tbody>    
            <tr>
                <td>{{id}}</td>
                <td>{{name}}</td>
                <td>{{surname}}</td>
                <td>{{camera}}</td>
                <td>{{position}}</td>
                <td>{{specialist[1].username}}</td>
            </tr>   
        </tbody>
    </table>  

    <button v-on:click="zaciaganie_danych()">run axios</button>

    </div>
</template>





<script>
import axios from "axios";

export default {
    name: "table",
    
    data(){
        return{
            id: "1",
            name: "Jan",
            surname: "Kowalski",
            camera: "Flir",
            position: "Inspektor",
            regions: ["slaskie","malopolskie","śródziemie"],
            specialist: [] //i moze wszystko w jednym
        }
    },
    methods:{
        zaciaganie_danych(){
            axios.get(`http://localhost:8080/instructors/In28Minutes/courses`)
            .then( response=>{ this.id = response.data[1].username; 
                               this.name = response.data[1].description;
                               this.specialist = response.data  }
    
            )
            

        }


    },
    created(){
        this.zaciaganie_danych();
    }
}






</script>