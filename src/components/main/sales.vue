<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <div class="main-grids">
        <div class="top-grids">
            <div class="recommended-info">
                <h3>Sales</h3>
            </div>
            <div class="flex-wrap"> 
                <div v-for="(data,key) in sales_dataset" :key="key" class="col-md-4 resent-grid recommended-grid slider-top-grids">
                    <div class="resent-grid-img recommended-grid-img">
                        <a href="single.html"><img :src="data['poster']" :alt="data['title']" /></a>
                        <div class="time" style="color:#000;">
                            <p>{{data['length']}}</p>
                        </div>
                        <!-- <div class="clck" style="color:#000;">
                            <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
                        </div> -->
                    </div>
                    <div class="resent-grid-info recommended-grid-info">
                        <h3><router-link :to="'/video/' + data['id']" class="title title-info">{{data['title']}}</router-link></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import purchases_data from '../../video_source_config/purchases.js'
export default {
  name: 'sales',
  data () {
    return {
      sales_dataset: ''
    }
  },
  mounted(){
    this.fetchData('sales').then((response)=>{
        this.sales_dataset = response.body;
    },(error) =>{
        console.log(error);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
