<template>
        <div v-if="selectedVideo" class="embed-responsive embed-responsive-16by9"> 
           <h3> {{ videos[0].snippet.title }} </h3>

                  <p>{{ $store.state.userInput }}</p>
        <iframe class="embed-responsive-item"
            :src="`https://www.youtube.com/embed/${selectedVideo.id.videoId}`" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
      </div>
</template>

<script>
export default {
    name: 'videoPlayer',
    props: {
        selectedVideo: Array
    }
}
</script>

<style>

</style>