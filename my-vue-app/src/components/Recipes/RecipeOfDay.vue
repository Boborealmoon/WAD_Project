<!-- This component generates the Recipe of the Day-->
<template>
  <div>
    <button @click="getRandomRecipe">Click to get random recipe</button>
    <div class="container" v-if="RandomRecipe">
      <div class="row justify-content-start">
        <div class="rando-recipe col-lg-8 col-md-10 col-sm-12">
            <div class="rando-recipe-header">
            Recipe of the Day
            </div>
      <div class="rando-recipe-img">
        <img class="rando-img img-fluid" :src="imgUrl" alt="Recipe Image">
      </div>
      <div class="rando-recipe-info">
        <h1>{{ Title }}</h1>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RandomRecipe: null,
      Title: '',
      DishTypes: [],
      Diets: [],
      PrepTime: '',
      imgUrl: '',
      CookingSteps: [],
      Summary: '',
    };
  },
  methods: {
    async getRandomRecipe() {
      let RandomRecipeObj = await this.$spoonAPI.getRandomRecipe(); 
      this.RandomRecipe = RandomRecipeObj.recipes[0]
      this.Title = this.RandomRecipe.title;
      this.DishTypes = this.RandomRecipe.dishTypes;
      this.Diets = this.RandomRecipe.diets;
      this.PrepTime = this.RandomRecipe.readyInMinutes;
      this.imgUrl = this.RandomRecipe.image;
      this.CookingSteps = this.RandomRecipe.analyzedInstructions;
      this.Summary = this.RandomRecipe.instructions;
      console.log(this.CookingSteps);
    },
  },
};
</script>


<style scoped>

 .container{
  margin-left: 0!important;
  margin-right: 0!important;
 }
 .rando-recipe{
  background: #AED4B7;
  border-radius: 40px;
  padding: 20px;
 }

 .rando-recipe-header{
  color: white;
  font-size: 1.5em; 
  font-family: Inter;
  font-weight: 600;
  word-wrap: break-word;
  margin-bottom: 10px;
 }

 .rando-recipe-img{
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 10px;
  overflow: hidden;
 }

 .rando-img{
  border-radius: 20px;
  object-fit: contain;
  height: 100%;
  width: 100%;
 }

 .rando-recipe-info{
  color: white;
  font-size: 2.25em;
  font-family: Inika;
  font-weight: 400;
  word-wrap: break-word;
 }


</style>
