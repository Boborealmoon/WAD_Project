<template>
    <div class="pt-2">
        <div class="my-2">
          <b> Price Range: </b>
          <input
            v-model="minPrice"
            class="form-control d-inline"
            type="number"
            style="width: 80px"
            @keyup="handlePrice"
          />
          to
          <input
            v-model="maxPrice"
            class="form-control d-inline"
            type="number"
            style="width: 80px"
            @keyup="handlePrice"
          />
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        minPrice: "",
        maxPrice: "",
      };
    },
    methods: {
      handlePrice(){
        this.$emit('getPrice',[this.minPrice,this.maxPrice]);
      }
    },
  };
  </script>
  
  <style></style>
  