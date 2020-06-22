<template>
    <ul class="list-group">
        <li class="list-group-item active" v-for="video in videos" :key="video.id.videoId">
            <videoItem :video="video" @imageClicked="imageClicked"/>
        </li>
     </ul>
</template>

<script>
import videoItem from './videoItem.vue'
import { mapGetters } from 'veux'

export default {
    name: 'videoList',
    components: {
        videoItem,
    },
    computed: {
        ...mapGetters(['videos'])
    },
    methods: {
        imageClicked(video) {
            this.$emit('imageClicked', video)
        }
    }
}
</script>

<style>

</style>