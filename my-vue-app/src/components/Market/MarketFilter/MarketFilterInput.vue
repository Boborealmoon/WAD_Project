<template>
  <div class="p-4 pt-2 shadow border rounded-4">
    <!-- show search-->
    <!-- <MarketFilterSearch @getSearch="handleSearchInput"/> -->
    <MarketFilterPrice @getPrice="handlePrice"/>
    <MarketFilterSuperMarket @getSupermarket="handleSupermarket"/>
    <div class="d-flex justify-content-end">
    <button class="btn border rounded-3 fw-semibold btnStyle" style="background-color: #7A8CEA;" @click="passInput">Filter</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){return{
    // marketSearchQuery:"",
    minPrice:0,
    maxPrice: Number.POSITIVE_INFINITY,
    supermarket:"",
  }},
  methods:{
    // handleSearchInput(data){
    //   this.marketSearchQuery=data;
    //   // console.log(this.marketSearchQuery)
    // },
    handlePrice(data){
      this.minPrice=data[0];
      this.maxPrice=data[1];
      // console.log(data)
    },
    handleSupermarket(data){
      this.supermarket=data;
      // console.log(this.supermarket);
    },
    passInput(){
      this.$emit('getInput',[this.minPrice,this.maxPrice,this.supermarket])
    }
  }
};
</script>

<style >
.btnStyle{
  transition: transform 0.3s;
}
.btnStyle:hover {
  transform: scale(1.05); /* Scale up by 10% on hover */
  cursor: pointer;
}
</style>
