const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let checkIngredients = function(bakeryIngredients, recipeIngredients){
    for(let i = 0; i < bakeryIngredients.length; i++){
        for(let j = 0; j < recipeIngredients.length; j++){
            if(bakeryIngredients[i] === recipeIngredients[j]){
                return true;
            }
        }
    }
  }
  for(let k = 0; k < recipes.length; k++){
    const bakeryAHasIngredient = checkIngredients(bakeryA, recipes[k].ingredients);
    const bakeryBHasINgredient = checkIngredients(bakeryB, recipes[k].ingredients);

    if(bakeryAHasIngredient && bakeryBHasINgredient){
        return recipes[k].name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));