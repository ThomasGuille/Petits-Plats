export const filterRecipe = (recipesFiltered) => {
    const queryselector = window.location.search;
    let urlParams = new URLSearchParams (queryselector);
    const filtering = document.querySelectorAll(".dropdown__item");
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

    filtering.forEach(item => {
        const filterValue = item.getAttribute("data-type");
        const FilterType = item.getAttribute("data-filtre");
        item.addEventListener("click", () => {
            urlParams.append(FilterType, filterValue);
            window.location.replace(`index.html?${urlParams}`);
            if(urlParams.has(FilterType)){
                let urlData = urlParams.getAll(FilterType).join();
                urlParams.set(FilterType, urlData);
                window.location.replace(`index.html?${urlParams}`);
            }
        })
    })

    let filter = ``;
    
    urlParams.forEach((value, keys) => {
        let buttonValue = value.split(",");
        buttonValue.forEach((elem, index) => {
            filter += `
                <div class="display__filter" data-filtre="${keys}" data-position="${index}">
                    <p class="filter__text">${elem}</p>
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `;
        })
    })

    filtersDisplay.innerHTML = filter;

    
    document.querySelectorAll(".display__filter").forEach(filtre => {
        const filtreType = filtre.getAttribute("data-filtre");
        const filtrePosition = filtre.getAttribute("data-position");
        filtre.addEventListener("click", () => {
            let urlNew = urlParams.get(filtreType).split(",");
            urlNew.splice(filtrePosition, 1);
            urlParams.set(filtreType, urlNew.join());
            if(urlNew == ''){
                urlParams.delete(filtreType);
            };
            window.location.replace(`index.html?${urlParams}`);
        })
    });
}