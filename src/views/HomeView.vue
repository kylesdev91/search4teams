<template>
<div id="app" v-cloak>
  
  <div v-if="errorStr">
    Sorry, but the following error
    occurred: {{errorStr}}
  </div>
  
  <div v-if="gettingLocation">
    <i>Getting your location...</i>
  </div>
  
  <div v-if="location">
    Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}
  </div>
  
</div>

</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    data:()=> ({
            location: "",
            errorStr: "",
        }),
    name: 'Home',
  created() {
    //do we support geolocation
    if(!("geolocation" in navigator)) {
      this.errorStr = 'Geolocation is not available.';
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false;
      this.location = pos;
    }, err => {
      this.gettingLocation = false;
      this.errorStr = err.message;
    })
  },
    components: {
      HelloWorld,
    },
  }
</script>
<style>
    .Home {
        padding-top: 100px;
    }
</style>