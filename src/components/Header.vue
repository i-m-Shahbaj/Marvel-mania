<template>
<md-tabs md-sync-route>
        <md-tab id="tab-home" md-label="Home" ><router-link to="/"></router-link></md-tab>
        <md-tab id="tab-pages" md-label="Pages">sfs</md-tab>
        <md-tab id="tab-posts" md-label="Posts" >sdfds</md-tab>
        <md-tab id="tab-settings" md-label="Settings" >sdfds</md-tab>
        <md-tab id="tab-disabled" md-label="Disabled" md-disabled>sdfds</md-tab>
  </md-tabs>
</template>
<script>
export default{
    name:'Navbar',
    props:{
        homeContent:String,
    }
}
</script>
<style scoped>
</style>