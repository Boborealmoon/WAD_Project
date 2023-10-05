<!-- This component generate a random recipe -->
<template>
  <div>
    <button @click="getRandomRecipe">Click to get random recipe</button>
    <div class="rando-recipe" v-if="RandomRecipe"> 
        <!-- <div> -->
            <!-- <h1>Title: {{ Title }}</h1> -->
            <!-- <h2>DishTypes: {{ DishTypes }} </h2> -->
            <!-- <h2 v-if="Diets">Diets: {{ Diets }} </h2> -->
            <!-- <h2>Prep Time: {{ PrepTime }}</h2> -->
            <!-- <div>Cooking Steps: 
                <ul v-if="CookingSteps">
                    <div v-for="instructions in CookingSteps" :key="instructions">
                        <li v-for="(step,index) in instructions.steps" :key="step">
                            <span>Step {{index + 1}}: {{ step.step }}</span> <br>
                            <ul v-if="step.ingredients.length != 0">
                                <span :style="{'text-decoration': 'underline','font-weight': 'bold'}">Ingredients needed for this Step:</span> 
                                <li v-for="ingredient in step.ingredients" :key='ingredient'>{{ ingredient.name }}</li>
                            </ul>
                            <ul v-if="step.equipment.length != 0">
                                <span :style="{'text-decoration': 'underline','font-weight': 'bold'}">Equipments needed for this Step:</span> 
                                <li v-for="equipment in step.equipment" :key='equipment'>{{ equipment.name }}</li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </div> -->
            <!-- <h3>Summary:</h3>
            <p v-html="Summary"></p> -->
        <!-- </div> -->
        <div class="rando-recipe-header">
          Recipe of the Day
        </div>
        <div class="rando-recipe-img">
            <img class="rando-img" :src="imgUrl">
        </div>
        <div class="rando-recipe-info">
          <h1>{{ Title }}</h1>
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
 .rando-recipe{
  /* width: 994px;
  height: 363px; */
  background: #AED4B7;
  border-radius: 40px;
  width: 70vw;
  height: 30vh;
 }

 .rando-recipe-header{
  height: auto;
  width: auto;
  color: white;
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  word-wrap: break-word;
  margin-left: 4%;
 }

 .rando-recipe-img{
  width: 90%;
  height: 70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 4%;
  src: "https://via.placeholder.com/905x226";
 }

 .rando-img{
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;

 }

 .rando-recipe-info{
  height: auto;
  width: auto;
  color: white;
  font-size: 36px;
  font-family: Inika;
  font-weight: 400;
  word-wrap: break-word;
  margin-left: 4%;
  margin-top: 1%;
 }

</style>

