<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data(){
    return {
        posts:[],
        Params: {
          "accessToken": "2315886501809317",
        }
    }
  },
  mounted(){
    const baseUri = this.Params.accessToken
    this.$http.get(baseUri+'/'+1).then((result)=>{
        console.log(result);
    });
  }
}
</script>
