export const filterRecipe = (recipesFiltered) => {
    const queryselector = window.location.search;
    let urlParams = new URLSearchParams (queryselector);
    const filterIngredient = document.querySelectorAll(".dropdown__item__ingredient");
    const filterAppliance = document.querySelectorAll(".dropdown__item__appliance");
    const filterUstensil = document.querySelectorAll(".dropdown__item__ustensil");
    const filtersDisplay = document.querySelector(".nav__filters");
    const filterSearch = document.querySelector(".search__field");
    const searchResult = document.querySelector(".search__result");

    const getMatch = (arr, str) => {
        let reg = new RegExp(str, "i");
        return arr.filter((item) => {
            if(item.match(reg)){
            return item;}
        });
    }

    filterSearch.addEventListener("input", () => {
        const searchInput = filterSearch.value;
        let listAll = [];
        recipesFiltered.forEach(elem => {
            if(!listAll.includes(elem.appliance)){
                listAll.push(elem.appliance);
            }
            elem.ustensils.forEach(ustensile => {
                if(!listAll.includes(ustensile)){
                    listAll.push(ustensile);
                }
            })
            elem.ingredients.forEach(ingredient => {
                if(!listAll.includes(ingredient.ingredient)){
                    listAll.push(ingredient.ingredient);
                }
            })
            listAll.push(elem.name);
        });
        listAll.sort();
        
        let content = ``;

        let data = getMatch(listAll, searchInput);
        
        data.forEach(elem => {
            content += `
                <p class="search__element">${elem}</p>
            `;
        })

        if(searchInput == ``){
            content = ``;
        }
        searchResult.innerHTML = content;
    })
    // console.log(urlParams.has("ingredient"));
    // console.log(urlParams.getAll("ingredient").join());
    
    filterIngredient.forEach(item => {
        item.addEventListener("click", () => {
            const data = item.getAttribute("data-type");
            urlParams.append("ingredient", data);
            window.location.replace(`index.html?${urlParams}`);
            if(urlParams.has("ingredient")){
                let urlData = urlParams.getAll("ingredient").join();
                urlParams.set("ingredient", urlData);
                window.location.replace(`index.html?${urlParams}`);
            }
        })
    })

    filterAppliance.forEach(item => {
        item.addEventListener("click", () => {
            const data = item.getAttribute("data-type");
            urlParams.append("appliance", data);
            window.location.replace(`index.html?${urlParams}`);
            if(urlParams.has("appliance")){
                let urlData = urlParams.getAll("appliance").join();
                urlParams.set("appliance", urlData);
                window.location.replace(`index.html?${urlParams}`);
            }
        })
    })

    filterUstensil.forEach(item => {
        item.addEventListener("click", () => {
            const data = item.getAttribute("data-type");
            urlParams.append("ustensil", data);
            window.location.replace(`index.html?${urlParams}`);
            if(urlParams.has("ustensil")){
                let urlData = urlParams.getAll("ustensil").join();
                urlParams.set("ustensil", urlData);
                window.location.replace(`index.html?${urlParams}`);
            }
        })
    })

    let filter = ``;
    
    urlParams.forEach((value, keys) => {
        filter += `
            <div class="display__filter" data-filtre="${keys}">
                <p class="filter__text">${value}</p>
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