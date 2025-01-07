export const header = () => {
    return `
        <header class="head">
            <a href="index.html" class="logo">
                <img src="assets/logo-petits-plats.png" class="logo" alt="logo petits plats">
            </a>

            <div class="head__content">
                <h1 class="main__title">CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES</h1>
                <div class="search__form">
                    <input type="text" class="search__field" placeholder="Rechercher une recette, un ingrédient,...">
                    <i class="fa-solid fa-x search__clear"></i>
                    <img src="assets/search-icon.png" alt="" class="search__icon">
                </div>
            </div>
        </header>
    `;
}