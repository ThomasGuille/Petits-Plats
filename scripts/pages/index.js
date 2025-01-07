import { filterRecipes } from "../utils/api.js";
import { filterRecipe } from "../utils/filter.js"
import { header } from "../components/header.js";
import { nav, dropdownDisplay } from "../components/nav.js";
import { main } from "../components/main.js";

const displayData = (recipesFiltered) => {
    const body = document.querySelector("body");
    body.innerHTML = `
        <div class="container">
            ${header()}
            ${nav(recipesFiltered)}
            ${main(recipesFiltered)}
        </div>
    `;

    dropdownDisplay();
    filterRecipe(recipesFiltered);
}

(async () => {
    // const recipesById = await getRecipes();
    const recipesFiltered = await filterRecipes();
    displayData(recipesFiltered);
})()