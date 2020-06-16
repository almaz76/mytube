<template>
  <div>
      <input v-model="userInput" @keypress.enter="input" type="text">

      <div v-if="results.length > 0">
           <h3> {{ results[0].snippet.title }} </h3>
        <iframe width="560" height="315" 
            :src="`https://www.youtube.com/embed/${results[0].id.videoId}`" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
      </div>

      <ul>
        <li v-for="result in results" :key="result.id.videoId">
           <h3> {{ result.snippet.title }} </h3>
           <img :src="result.snippet.thumbnails.high.url">
       </li>
     </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'searchBar',
    data() {
        return {
            userInput: '',
            results: []
        }
    },
    methods: {
        input() {
            const baseUrl = 'https://www.googleapis.com/youtube/v3/search?'
            const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
           
            axios.get(baseUrl, {
                params: {
                key: API_KEY,
                part: 'snippet',
                q: this.userInput, 
                type: 'video',
                maxResults: 10
                }
            })
            .then(response  => {
                console.log(response.data.items)
                this.results = response.data.items
            })
        }
    }

}
</script>

<style>

</style>