<template>
  <div>
    <h1>Test</h1>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  mounted: async function () {
    await this.getGeocode();
  },
  methods: {
    getGeocode() {
        fetch("https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=308%20Roma%20Ct%20Allen%2075013&benchmark=2020&format=jsonp", {
    //   fetch("https://reqbin.com/echo/get/json", {
        method: "GET",
        headers: {
          'Accept': 'application/json', 'Access-Control-Allow-Origin': '*'
        },
      }
      )
        .then((response) => response.text())
        .then((text) => console.log(text));
    }
  }
};
</script>
