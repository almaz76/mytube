import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data 저장소 ~= data
    userInput:'',
    videos: [],
    selectedVideo: null
  },
  getters: {
    // data에 대한 getter(조회) 함수 ~= computed
    videos(state) {
        return state.videos
    }
  },
  mutations: {
    // $store.commit('함수명', data)
    // data 변경 + 동기적 ~= methods
    // mutations 호출 방법 : $store.commit('함수명'호출)
    setUserInput(state, data){
      console.log('userInput이 변경', state)
      state.userInput = data
    },
    setVideos(state, data){
      //state.userInput 가지고 axios 요청보내기 
      state.videos = data
    },
    setSelectedVideos(state, data) {
      state.selectedVideo = data
    }

  },
  actions: {
    // data 변경 + 비동기적 ~= methods
    getVideos(context, event) {
   
      context.commit('setUserInput', event.target.value)

      const baseUrl = 'https://www.googleapis.com/youtube/v3/search?'
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
         
      axios.get(baseUrl, {
          params: {
          key: API_KEY,
          part: 'snippet',
          q: context.state.userInput, 
          type: 'video',
          maxResults: 10
         }
        })
      .then(response  => {
        console.log(response.data.items)
        context.commit('setVideos', response.data.items)
      })
    },
  },
  modules: {
  }
})
