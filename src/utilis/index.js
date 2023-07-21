

export async function fetchRecipes (filter){
    const {query, limit} = filter;
   

    const url = `https://api.edamam.com/search?q=${query}&app_id=057fe227&app_key=
    0ad23672b0f9d7c393d546f2e7c1d6a1&from=0&to=${limit}&`;

    
    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id){
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=057fe227&app_key=0ad23672b0f9d7c393d546f2e7c1d6a1`
    const response = await fetch(url)
    
    const data = await response.json();
    
    return data[0];
    }

