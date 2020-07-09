<template>
    <div>

    <table class="table">
        <thead class="thead-light"> 
            <tr>
                <th>Id</th>
                <th>Kamera</th>
                <th>Miasto</th>
                <th>Opis</th>
            </tr>
        </thead>


        <tbody>    
            <tr v-for="element in orders" v-bind:key="element.id">
                <td>{{element.id}}</td>
                <td>{{element.camera}}</td>
                <td>{{element.town}}</td>
                <td>{{element.description}}</td>
            </tr>   
        </tbody>
    </table>  

    <button v-on:click="zaciaganie_danych()">Odśwież</button>





    <div class="container">
        <div class="row">
            <div class="col-sm">
            </div>
           
            <div class="col-sm">
            </div>

            <div class="col-sm">
            </div>
            
            <div class="col-sm">
            </div>

            <div class="col-sm">
            </div>
    
            <div class="col-sm">
            </div>
            
            <div class="col-sm">
            


                <div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="podaj id" id="myInput" aria-label="Username" aria-describedby="basic-addon1">
                    </div>


                    <div class="d-flex tab">
                        <div><button type="button" class="btn btn-primary" v-on:click="deleteOrderById()">..Usuń..</button></div>
                    </div>
                </div>


            </div> 
        </div>

    </div>


    </div>
</template>


<script>
import axios from "axios";


export default {
    name: "tablelist",
    
    data(){
        return{
            orders: [],
            deleteIndex : null
        }
    },
    methods:{
        zaciaganie_danych(){
            axios.get(`http://localhost:8080/getallorders`)
            .then( response=>{ 
                this.orders = response.data
                }
            )
        },

        deleteOrderById(){
            let a = document.getElementById("myInput").value;
            axios.delete(`http://localhost:8080/`,{ params: { index: a }}).then(res => res.data);
        }  

    },  
    created(){
        this.zaciaganie_danych();
    }
}


</script>