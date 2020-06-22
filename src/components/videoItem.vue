<template>
    <ul>
        <h3> {{ video.snippet.title }} </h3>
        <img @click="imageClicked" :src="video.snippet.thumbnails.high.url">
     </ul>
</template>

<script>
export default {
    name: 'videoItem',
    props: {
        video: Object
    },
    methods: {
        imageClicked() {
            this.$emit('imageClicked', this.video)
        }
    }

}
</script>

<style>

</style>