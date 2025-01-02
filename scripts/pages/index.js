
import { getRecipes } from "../utils/api.js";
import { header } from "../components/header.js";
import { nav } from "../components/nav.js";
import { main } from "../components/main.js";

const displayData = (recipesById) => {
    const body = document.querySelector("body");
    body.innerHTML = `
        <div class="container">
            ${header()}
            ${nav()}
            ${main(recipesById)}
        </div>
    `;
}

(async () => {
    const recipesById = await getRecipes();
    displayData(recipesById);
})()