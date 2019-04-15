<template>
 <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{data.title}}</div>

        </md-card-header>

        <md-card-content>
        <img v-bind:src="data.thumbnail.path+'.'+data.thumbnail.extension">
         <md-list class="md-double-line">
              <md-subheader>Creators</md-subheader>

              <md-list-item v-for="(charcter,index) in data.characters" :key="index">
                <md-icon class="md-primary" >phone</md-icon>
                <div class="md-list-item-text" v-for="(hero,indexKey) in charcter.items" :key="indexKey">
                  <span>Name:</span>
                  <span>{{hero[indexKey].name}}</span>
                </div>
                </md-button>
              </md-list-item>
           </md-list>
         </ul>
        </md-card-content>

        <md-card-actions>
          <md-button>visit</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
</template>
<script>
export default{
    name:"Card",
    props:{
        data:Object
    },
}
</script>
<style scoped>
*{
    color:black;
}
</style>