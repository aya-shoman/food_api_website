
async function getRecipes(meal) {
    try {
        
        let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
        let data = await response.json();

        displayRecipes(data.recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        document.getElementById("recipesContainer").innerHTML = "<p>error</p>";
    }
}

function displayRecipes(recipes) {
    let cartona = "";

    recipes.forEach(recipe => {
        cartona += `
        <div class="card">
            <img src="${recipe.image_url}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
        </div>
        `;
    });

    document.getElementById("recipesContainer").innerHTML = cartona;
}

let sideNav = document.getElementById("sideNav");
let menuBtn = document.getElementById("menuBtn");

if(sideNav && menuBtn){ 
    menuBtn.onclick = function () {
        if (sideNav.style.left == "0px") {
            sideNav.style.left = "-200px";
        } else {
            sideNav.style.left = "0";
        }
    };
}