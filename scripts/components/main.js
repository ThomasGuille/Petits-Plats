export const main = (recipesFiltered) => {
    let recipeCards = ``;
    recipesFiltered.forEach(recipe => {
        const ingredientByRecipe = recipe.ingredients;
        let recipeIngredients = ``;
        ingredientByRecipe.forEach(ingredient => {
            let quantity = ingredient.quantity;
            let unit = ingredient.unit;
            if(!quantity){quantity = ``};
            if(!unit){unit = ``};
            recipeIngredients += `
                <div class="ingredient__item">
                    <p class="ingredient__name">${ingredient.ingredient}</p>
                    <p class="ingredient__quantity">${quantity} ${unit}</p>
                </div>
            `;
        })
        
        recipeCards += `
            <figure class="card">
                <div class="card__picture">
                    <p class="recette__time">${recipe.time} min</p>
                    <img src="assets/recipes/${recipe.image}" alt="" class="recette__picture">
                </div>
                <figcaption class="card__content">
                    <h2 class="card__title">${recipe.name}</h2>
                    <h3 class="details__title">RECETTE</h3>
                    <p class="details__text">${recipe.description}</p>
                    <h3 class="ingredients__title">INGREDIENTS</h3>
                    <div class="ingredient__details">
                            ${recipeIngredients}
                    </div>
                </figcaption>
            </figure>
        `;
    });

    return `
        <main class="main">
            ${recipeCards}
        </main>
    `;
}