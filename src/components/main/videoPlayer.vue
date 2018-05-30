<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <div class="main-grids">
        <div class="top-grids">
            <div class="recommended-info">
                <h3>Video Player - {{$route.params.vid}}</h3>
            </div>
            <div class="flex-wrap"> 
                <my-video :sources="videoMetaData.sources" :options="videoMetaData.options"></my-video>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import myVideo from '../../libs/video.vue'
export default {
  name: "videoPlayer",
  data() {
    return {
      videoMetaData: {
        sources: [
          {
            src: 'static/run.mp4',
            type: 'video/mp4'
          }
        ],
        options: {
          autoplay: true,
          volume: 0.6
        //   poster: "http://covteam.u.qiniudn.com/poster.png"
        }
      }
    };
  },
  components:{
      myVideo
  },
  mounted() {
    // this.fetchData('payables').then((response)=>{
    //     this.processing_dataset = response.body;
    // },(error) =>{
    //     console.log(error);
    // })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
