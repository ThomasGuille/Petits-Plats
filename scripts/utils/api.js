const BaseURL = "scripts/datas/recipes.json";

export const getData = async () => {
    try{
        const response = await fetch(BaseURL);
        return response.json();
    }catch{
        return new Error("Bummer!");
    }
}

export const getRecipes = async () => {
    const data = await getData();
    return data.recipes;
}