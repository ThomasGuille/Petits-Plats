export const nav = (recipesById) => {
    let appliances = [];
    recipesById.forEach(elem => {
        if(!appliances.includes(elem.appliance)){
            appliances.push(elem.appliance);
        }
    });

    let appliancesFilter = ``;
    appliances.forEach(item => {
        appliancesFilter += `
            <a href="" class="dropdown__item">${item}</a>
        `;
    })

    return `
        <nav class="nav">
            <div class="dropdown dropdown__ingredients">
                <div class="dropdown__menu">
                    <p class="dropdown__title">Ingrédients</p>
                    <i class="fa-solid fa-chevron-down dropdown__chevron"></i>
                </div>

                <div class="dropdown__search__form">
                    <input type="text" class="dropdown__search__field">
                    <i class="fa-solid fa-x dropdown__search__clear"></i>
                    <i class="fa-solid fa-magnifying-glass dropdown__search__icon"></i>
                </div>

                <p class="search__result"></p>

                <div class="search__arguments">
                    <a href="" class="dropdown__item">ingrédient au pif</a>
                    <a href="" class="dropdown__item">ingrédient au pif</a>
                    <a href="" class="dropdown__item">ingrédient au pif</a>
                </div>
            </div>

            <div class="dropdown dropdown__appareils">
                <div class="dropdown__menu">
                    <p class="dropdown__title">Appareils</p>
                    <i class="fa-solid fa-chevron-down dropdown__chevron"></i>
                </div>

                <div class="dropdown__search__form">
                    <input type="text" class="dropdown__search__field">
                    <i class="fa-solid fa-x dropdown__search__clear"></i>
                    <i class="fa-solid fa-magnifying-glass dropdown__search__icon"></i>
                </div>

                <p class="search__result"></p>

                <div class="search__arguments">
                    ${appliancesFilter}
                </div>
            </div>

            <div class="dropdown dropdown__ustensiles">
                <div class="dropdown__menu">
                    <p class="dropdown__title">Ustensiles</p>
                    <i class="fa-solid fa-chevron-down dropdown__chevron"></i>
                </div>

                <div class="dropdown__search__form">
                    <input type="text" class="dropdown__search__field">
                    <i class="fa-solid fa-x dropdown__search__clear"></i>
                    <i class="fa-solid fa-magnifying-glass dropdown__search__icon"></i>
                </div>

                <p class="search__result"></p>

                <div class="search__arguments">
                    <a href="" class="dropdown__item">ustensile au pif</a>
                    <a href="" class="dropdown__item">ustensile au pif</a>
                    <a href="" class="dropdown__item">ustensile au pif</a>
                </div>
            </div>

            <p class="search__nb__recettes">1500 recettes</p>
        </nav>
    `;
}