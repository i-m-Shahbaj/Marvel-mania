<template>
   <div class="md-layout">
    <Card class="md-layout-item md-size-33" v-for ="data in datas" :data = "data"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/home/card'
import md5 from 'js-md5'

export default {
  name: 'home',
  components: {
    Card,
  },
  data(){
    return {
        register:{},
        datas:[],
        ts :new Date().getTime(),
        Params: {
          "accessToken": "2315886501809317",
          "publicKey":"37317bdcd5423d14e78b3d8cebaaba2f",
          "privateKey":"923940e45e8b88740ec289844ca22e73ab8753d7"
        },
    }
  },
  computed:{
    hashKey:function(){
        return md5(this.ts+this.Params.privateKey+this.Params.publicKey).toString()
      }
  },
  mounted(){
    const baseUri = 'http://gateway.marvel.com/v1/public/comics'
    this.$http.get(baseUri,{
    params:{
        ts:this.ts,
        apikey:this.Params.publicKey,
        hash:this.hashKey,
    }}).then((result)=>{
    if(result.status == 200){
      this.datas = result.data.data.results
      console.log(this.datas)
      }

    });
  }
}
</script>
