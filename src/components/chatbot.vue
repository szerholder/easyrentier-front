<template>
<div>

    <div v-if="chatboxview==1" class="chatbox right">
        <div class="bg-primary bluetitle d-flex justify-content-end">
            <button v-on:click="showChat">chat</button>
        </div>

        <div v-if="chatboxpage==1" class="chatbox">
            <!-- <div><input v-model="zmienna"><br></div>
            <div>{{zmienna}}</div> -->
            <div><button class="btn btn-secondary">Dzień dobry! Jak mogę Ci pomóc?</button></div>
            <br>
            <div><button class="btn btn-secondary" v-on:click="showCameraQuestions">Chcę kamerę.</button></div>
            <div><button class="btn btn-secondary">Chcę badanie.</button></div>
            <div><button class="btn btn-secondary">Chcę zlecenie.</button></div>
            
        </div>

        <div v-if="chatboxpage==2" class="chatbox">
            <div><button class="btn btn-secondary">W jakim celu?</button></div>
            <br>
            <div><button class="btn btn-secondary">Chcę sprawdzić szczelność okien.</button></div>
            <div><button class="btn btn-secondary">Chcę zbadać urządzenie.</button></div>
            <div><button class="btn btn-secondary">Chcę sie przeszkolić.</button></div>
            <div><button class="btn btn-secondary" v-on:click="showStartQuestions">Wróć.</button></div>

        </div>

    </div>
    <div class="right">
    <button  v-on:click="showChat">chat</button>
    </div>



</div>
</template>


<script>
export default {
    data(){
        return {
            chatboxpage: 1,
            chatboxview: null
        }
    },
    methods: {

        showChat(){
            if(this.chatboxview==1){
                this.chatboxview=null
            }
            else{
                this.chatboxview=1
            }   
        },       
        showStartQuestions(){
            this.chatboxpage=1  
        },        
        showCameraQuestions(){
            this.chatboxpage=2  
        }

    }
}
</script>


<style>

.bluetitle{
height: 30px;
}

.right{
right: 0;
position: absolute;
top:100px;
}

.chatbox{
background-color: whitesmoke;
z-index: 2;
height: 250px;
width: 300px;
}


</style>