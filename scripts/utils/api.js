const BaseURL = "scripts/datas/recipes.json";

export const getData = async () => {
    try{
        const response = await fetch(BaseURL);
        return response.json();
    }catch{
        return new Error("Bummer!");
    }
}

export const getRecipes = async () => {
    const data = await getData();

    return data.recipes;
}

const queryselector = window.location.search;
const urlParams = new URLSearchParams (queryselector);
const filterSearch = urlParams.get("search");
const filterIngredient = urlParams.get("ingredient");
const filterAppliance = urlParams.get("appliance");
const filterUstensil = urlParams.get("ustensil");

export const filterRecipes = async () => {
    const recipes = await getRecipes();
    
    const filtered = recipes.filter(recipe => {
        let recipeIngredient = [];
        recipe.ingredients.forEach(element => {
            recipeIngredient.push(element.ingredient);
        });
        
        if(recipeIngredient.includes(filterIngredient) || recipe.appliance.includes(filterAppliance) || recipe.ustensils.includes(filterUstensil)){
            return recipe;
        }
        if(urlParams == ``){return recipes}
    })

    return filtered;
}

// recipeIngredient.includes(filterIngredient) || 