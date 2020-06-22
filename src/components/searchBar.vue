<template>
  <div>
      <input class="form-control" v-model="userInput" @keypress.enter="getVideos" type="text"/>
        <p>{{ $store.state.userInput }}</p>
  </div>
</template>

<script>
import { mapActions } from 'veux'

export default {
    name: 'searchBar',
    data() {
        return {
            userInput:'',
        }
    },
    methods: {
        ...mapActoins (['getVideos']),

        onInput() {
           // axios 요청을 통해 $store.state.videos

           // app.vue 에 $emit 을 통해 userInput 전달 
            this.$emit('onInput', this.userInput)
            // vuex store에 data를 변경 
            console.log('vuex store 출력:' + this.$store.state.userInput)
            
            // mutations 함수 호출 
            this.$store.commit('setUserInput',this.userInput)
         
        }
    }

}
</script>

<style>

</style>