
import { filterRecipes } from "../utils/api.js";
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
}

(async () => {
    // const recipesById = await getRecipes();
    const recipesFiltered = await filterRecipes();
    displayData(recipesFiltered);
})()