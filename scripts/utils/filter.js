export const filterRecipe = () => {
    const queryselector = window.location.search;
    let urlParams = new URLSearchParams (queryselector);
    const filterIngredient = document.querySelectorAll(".dropdown__item__ingredient");
    const filterAppliance = document.querySelectorAll(".dropdown__item__appliance");
    const filterUstensil = document.querySelectorAll(".dropdown__item__ustensil");
    const filtersDisplay = document.querySelector(".nav__filters");
    const filterSearch = document.querySelector(".search__field");

    const getMatch = (arr, str) => {
        let reg = new RegExp(str, "i");
        return arr.filter((item) => {
            if(item.match(reg)){
            return item;}
        });
    }

    
    
    filterIngredient.forEach(item => {
        item.addEventListener("click", () => {
            const data = item.getAttribute("data-type");
            urlParams.append("ingredient", data);
            window.location.replace(`index.html?${urlParams}`);
        })
    })

    filterAppliance.forEach(item => {
        item.addEventListener("click", () => {
            const data = item.getAttribute("data-type");
            urlParams.append("appliance", data);
            window.location.replace(`index.html?${urlParams}`);
        })
    })

    filterUstensil.forEach(item => {
        item.addEventListener("click", () => {
            const data = item.getAttribute("data-type");
            urlParams.append("ustensil", data);
            window.location.replace(`index.html?${urlParams}`);
        })
    })

    let filter = ``;
    
    urlParams.forEach((filtre, keys) => {
        filter += `
            <div class="display__filter" data-filtre="${keys}">
                <p class="filter__text">${filtre}</p>
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
    })

    filtersDisplay.innerHTML = filter;

    document.querySelectorAll(".display__filter").forEach(filtre => {
        const filtreType = filtre.getAttribute("data-filtre");
        filtre.addEventListener("click", () => {
            urlParams.delete(filtreType, filtre.firstElementChild.innerText);
            window.location.replace(`index.html?${urlParams}`);
        })
    });
}