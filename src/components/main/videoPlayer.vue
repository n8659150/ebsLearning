<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <div class="main-grids">
        <div class="top-grids">
            <div class="recommended-info">
                <h3 v-if="dataById[0] !== undefined">{{dataById[0]['title']}}</h3>
            </div>
            <div class="flex-wrap"> 
                <d-player :options="options"
                          @play="play"
                          ref="player">
                </d-player>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import myVideo from '../../libs/video.vue'
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
export default {
  name: "videoPlayer",
  data() {
    return {
      dataById:'',
        options: {
          video: {
            url: '',
            pic: ''
          },
          autoplay: false
      },
       player: null,
    }
  },
  methods:{
    play() {
       console.log('playing video');
    },
    initData: async function() {
      try {
        this.player = this.$refs.player.dp;
        let result = await this.fetchDataById(this.$route.params.vid);
        this.dataById = result.body;
        this.options['video']['url'] = 'http://' + this.videoHost + this.dataById[0]['video_url'];
        console.log(this.options['video']['url']);
        this.player.switchVideo({
          url:this.options['video']['url']
        })
        setTimeout(() => {
        this.player.play()
        }, 200)
        
      } catch (error) {
        console.log(error);
      }
    }
  },
  components:{
      'd-player': VueDPlayer
  },
  mounted() {
    // this.fetchData('payables').then((response)=>{
    //     this.processing_dataset = response.body;
    // },(error) =>{
    //     console.log(error);
    // })
    this.initData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dplayer {
  width:85%;
}
@media (max-width: 640px) {
.dplayer {
  width:95%;
  }
}
@media (max-width: 767px) {
.dplayer {
  width:95%;
  }
}
@media (max-width: 991px) {
.dplayer {
  width:95%;
  }
}
</style>
