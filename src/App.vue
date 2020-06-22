<template>
  <div id="app">
    <h1 class="text-center"> Mytube Search </h1>
    <searchBar @onInput="getVideos" />

    <div class="container">
      <div class="raw">
         <div class="col-8">
             <videoPlayer :video="selectedVideo" />
         </div>
          <div class="col-4">
             <videoList :videos="videos" @imageClicked="imageClicked"/>
          </div>
       </div>
   </div>

  </div>
</template>

<script>
import axios from 'axios'

import searchBar from './components/searchBar.vue'
import videoList from './components/videoList.vue'
import videoPlayer from './components/VideoPlayer.vue'

export default {
  name: 'App',
  components: {
    searchBar,
    videoPlayer,
    videoList
  },
}
</script>

<style>

</style>
