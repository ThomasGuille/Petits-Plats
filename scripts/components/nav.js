export const nav = (recipesFiltered) => {
    let ingredients = [];
    let appliances = [];
    let ustensils = [];
    recipesFiltered.forEach(elem => {
        if(!appliances.includes(elem.appliance)){
            appliances.push(elem.appliance);
        }
        elem.ustensils.forEach(ustensile => {
            if(!ustensils.includes(ustensile)){
                ustensils.push(ustensile);
            }
        })
        elem.ingredients.forEach(ingredient => {
            if(!ingredients.includes(ingredient.ingredient)){
                ingredients.push(ingredient.ingredient);
            }
        })
    });
    ingredients.sort();
    appliances.sort();
    ustensils.sort();

    let ingredientsFilter = ``;
    ingredients.forEach(item => {
        ingredientsFilter += `
            <a href="index.html?ingredient=${item}" class="dropdown__item">${item}</a>
        `;
    })
    
    let appliancesFilter = ``;
    appliances.forEach(item => {
        appliancesFilter += `
            <a href="index.html?appliance=${item}" class="dropdown__item">${item}</a>
        `;
    })

    let ustensilsFilter = ``;
    ustensils.forEach(item => {
        ustensilsFilter += `
            <a href="index.html?ustensil=${item}" class="dropdown__item">${item}</a>
        `;
    })
    

    return `
        <nav class="nav">
            <div class="nav__dropdown">
                <div class="dropdown dropdown__ingredients">
                    <div class="dropdown__menu">
                        <p class="dropdown__title">Ingrédients</p>
                        <i class="fa-solid fa-chevron-down dropdown__chevron chevron"></i>
                    </div>
                    <div class="dropdown__search__form">
                        <input type="text" class="dropdown__search__field">
                        <i class="fa-solid fa-x dropdown__search__clear"></i>
                        <i class="fa-solid fa-magnifying-glass dropdown__search__icon"></i>
                    </div>

                    <div class="search__arguments">
                        ${ingredientsFilter}
                    </div>
                </div>

                <div class="dropdown dropdown__appareils">
                    <div class="dropdown__menu">
                        <p class="dropdown__title">Appareils</p>
                        <i class="fa-solid fa-chevron-down dropdown__chevron chevron"></i>
                    </div>

                    <div class="dropdown__search__form">
                        <input type="text" class="dropdown__search__field">
                        <i class="fa-solid fa-x dropdown__search__clear"></i>
                        <i class="fa-solid fa-magnifying-glass dropdown__search__icon"></i>
                    </div>

                    <div class="search__arguments">
                        ${appliancesFilter}
                    </div>
                </div>

                <div class="dropdown dropdown__ustensiles">
                    <div class="dropdown__menu">
                        <p class="dropdown__title">Ustensiles</p>
                        <i class="fa-solid fa-chevron-down dropdown__chevron chevron"></i>
                    </div>

                    <div class="dropdown__search__form">
                        <input type="text" class="dropdown__search__field">
                        <i class="fa-solid fa-x dropdown__search__clear"></i>
                        <i class="fa-solid fa-magnifying-glass dropdown__search__icon"></i>
                    </div>

                    <div class="search__arguments">
                        ${ustensilsFilter}
                    </div>
                </div>

                <p class="search__nb__recettes">${recipesFiltered.length} recettes</p>
            </div>

            <div class="nav__filters">

            </div>
        </nav>
    `;
}

export const dropdownDisplay = () => {
    const dropDowns = document.querySelectorAll(".dropdown__menu");
    dropDowns.forEach(drop => {
        drop.addEventListener("click", () => {
            drop.parentNode.classList.toggle("dropdown__display");
            drop.lastElementChild.classList.toggle("fa-rotate-180");
        })
    })
}