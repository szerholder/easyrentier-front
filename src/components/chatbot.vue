<template>
<div>

    <div v-if="chatboxview==1" class="chatbox">
        <div v-if="start==1">
            <!-- <div><input v-model="zmienna"><br></div>
            <div>{{zmienna}}</div> -->
            <div><button class="btn btn-secondary">Dzień dobry! Jak mogę Ci pomóc?</button></div>
            <div><button class="btn btn-secondary" v-on:click="showCameraQuestions">Chcę kamerę.</button></div>
            <div><button class="btn btn-secondary">Chcę badanie.</button></div>
            <div><button class="btn btn-secondary">Chcę zlecenie.</button></div>
            
        </div>

        <div v-if="zmienna==1">
            <div><button class="btn btn-secondary">W jakim celu?</button></div>
            <div><button class="btn btn-secondary">Chcę sie pobawić.</button></div>
            <div><button class="btn btn-secondary">Chcę sprawdzić maszynę.</button></div>
            <div><button class="btn btn-secondary">Chcę sprawdzić okno.</button></div>
            <div><button class="btn btn-secondary">Chcę zostać sie przeszkolić.</button></div>
            <div><button class="btn btn-secondary" v-on:click="showStartQuestions">Wróć.</button></div>

        </div>

        <div v-if="zmienna==2">
            <div><button class="btn btn-secondary">Dzień dobry! Jak mogę Ci pomóc?</button></div>
            <div><button class="btn btn-secondary">Chcę kamerę.</button></div>
            <div><button class="btn btn-secondary">Chcę badanie.</button></div>
            <div><button class="btn btn-secondary">Chcę zlecenie.</button></div>
            
        </div>
    </div>

    <button v-on:click="showChat">chat</button>




</div>
</template>


<script>
export default {
    data(){
        return {
            start: 1,
            zmienna: null,
            chatboxview: null

        }
    },
    methods: {
        showCameraQuestions(){
            this.start=null,
            this.zmienna=1  
        },
        showStartQuestions(){
            this.start=1,
            this.zmienna=null  
        },
        showChat(){
            if(this.chatboxview==1){
                this.chatboxview=null
            }
            else{
                this.chatboxview=1
            }   
        }

    }
}
</script>


<style>

.chatbox{
background-color:darkgoldenrod;
z-index: 2;
height: 200px;
width: 200x;
right: 0;
bottom: 0;
position: absolute;
}



</style>