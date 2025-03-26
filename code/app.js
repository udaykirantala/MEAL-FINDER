
// Slider Functionality Starting
const slidercategoriesdata= async()=>{
    try{
        const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await datafetch.json();
        const sliderlinks = document.getElementById('sliderlinks');
        sliderlinks.innerHTML=data.categories.map((item)=>{
            return`
            <li onclick="showCategory('${item.strCategory}')">${item.strCategory}</li>
            `
        }).join("")
    }catch(error){
        console.error("Error fetching data:",error)
    }
}
slidercategoriesdata();

function showSlider(){
    const silder = document.querySelector('.header_heading_slider');
    silder.style.display='flex';
}
function hiddenSlider(){
    const silder = document.querySelector('.header_heading_slider');
    silder.style.display='none';
}

// Slider Functionality Ending

// Categories Container Content Starting

const fetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await datafetch.json();
        const categoriesContainerContent = document.getElementById('categoriesContainerContent');
        categoriesContainerContent.innerHTML=data.categories.map((item)=>{
            return`
            <div class="categoriesCards">
            <img src="${item.strCategoryThumb}" alt="${item.strCategory}">
            <p>${item.strCategory.toUpperCase()}</p>
            </div>
            `
        }).join("")
    }catch(error){
        console.error("Error fetching data:",error)
    }
}
fetchdata()

// Categories Container Content Ending

// Slider Hidden Functionality Starting
function sliderhiddenbody(){
    hiddenSlider()
}
// Slider Hidden Functionality Ending

// Categories Data Starting

// Showing Catrogies
function showCategory(categoryName) {
    const categoriesContainer = document.getElementById('categoriesContainer');
    categoriesContainer.style.display = 'none';

    const itemandmealscategorie = document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display = 'block';

    const melasSection=document.getElementById('melasSection');
    melasSection.style.display='none'

    fetchCategoryDescription(categoryName);
    fetchCategoryMeals(categoryName);
}

// Function to fetch category description
const fetchCategoryDescription = async (categoryName) => {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();

        const category = data.categories.find(item => item.strCategory === categoryName);
        if (category) {
            const itemContainer = document.getElementById('itemcategoriescontainer');
            itemContainer.innerHTML = `
                <p class="descriptionItemName">${category.strCategory}</p>
                <p>${category.strCategoryDescription}</p>`;
        } else {
            console.warn("Category not found");
        }
    } catch (error) {
        console.error("Error fetching category description:", error);
    }
};


// Function to fetch meals under a category
const fetchCategoryMeals = async (categoryName) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const data = await response.json();

        const mealscategoriescards = document.getElementById('mealscategoriescards');
        mealscategoriescards.innerHTML = data.meals.map((meal) => `
            <div class="mealscategories" onclick="showracipesdeatils('${meal.idMeal}')">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p>${meal.strMeal}</p>
            </div>
        `).join("");
    } catch (error) {
        console.error("Error fetching meals:", error);
    }
};
// Categories Data Ending
// Search Meals Starting
async function searchMelas() {
    const itemandmealscategories=document.getElementById('itemandmealscategories')
    itemandmealscategories.style.display='none'
    const melasSection=document.getElementById('melasSection');
    const showContainer = document.getElementById("melasSection");
    showContainer.style.display = 'block';
    const searchBox = document.getElementById('search_bar');
    const melasSearchDivistion = document.getElementById('melasSearchDivistion');
    const foodName = searchBox.value.trim();

    if (foodName === "") {
        alert("Please Enter The Meal Name");
        return;
    }
    const apiurl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    
    try {
        const response = await fetch(apiurl);
        const data = await response.json();

        // Clear previous search results
        melasSearchDivistion.innerHTML = "";
    

        if (data.meals) {
            data.meals.forEach(meal => {
                const mealCard = document.createElement("div");
                mealCard.classList.add("melas_card");
                
                mealCard.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <p class="mealsarea">${meal.strArea}</p>
                    <p class="mealsname">${meal.strMeal}</p>
                    <p class="mealscategoryname">${meal.strCategory}</p>
                `;
                melasSearchDivistion.appendChild(mealCard);
            });
        } else {
            melasSearchDivistion.innerHTML = "<p>No Meals Found</p>";
        }
    } catch (error) {
        console.error("Error Fetching Meals:", error);
    }
}
// Search Meals Starting
function showracipesdeatils(recipename){

    recipesdetails(recipename)
}

const recipesdetails = async (recipename) => {
    const melasSection = document.getElementById('melasSection');
    melasSection.style.display = 'none';
    const itemandmealscategories = document.getElementById('itemandmealscategories');
    itemandmealscategories.style.display = 'none';
    const categoriesContainer = document.getElementById('categoriesContainer');
    categoriesContainer.style.display = 'block';
    
    try {
        const recipeApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipename}`);
        const data = await recipeApi.json();
        
        const containerOfRecipes = document.getElementById('containerOfRecipes');
        containerOfRecipes.innerHTML = data.meals.map((meal) => {
            
            let ingredients = '';
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];

                if (ingredient && ingredient.trim() !== "") {
                    ingredients += `<li><span class="Ingredientsnumbers">${i}</span> ${ingredient}</li>`;
                }
            }

            let measures ='';
            for (let i = 1; i <= 20; i++) {
                const measure = meal[`strMeasure${i}`]

                if (measure && measure.trim() !== ""){
                    measures += `<li><span class="measureicon"><i class="fa-solid fa-spoon"></i></span> ${measure}</li>`
                }
            }

            let instructions = meal.strInstructions.split(". ").map(step => step ? `<li><i class="fa-regular fa-square-check" style="color: #ff7300;"></i>${step}.</li>` : '').join('');

            return `
            <div class="navativebarofrecipes"><span><i class="fa-solid fa-house"></i></span> >> <span>${meal.strMeal}</span></div>
            <div class="recipesMealdetailas"><h2>MEAL DETAILS</h2></div>
            <div class="recipesalldetailscontainer">
                <div class="recipesImgandingredientsContainer">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div class="recipesdetailscontainer">
                        <h2 class="recipesname">${meal.strMeal}</h2><hr>
                        <p class="categorynameofrecipes"><span class="darkNames">CATEGORY:</span> ${meal.strCategory.toUpperCase()}</p>
                        <p class="sourceofrecipes"><span class="darkNames">Source:</span> <a href="${meal.strYoutube ? meal.strYoutube : 'N/A'}" target="_blank">${meal.strYoutube ? meal.strYoutube : 'N/A'}</a></p>
                        <p class="tagnameofrecipes"><span class="darkNames">Tags:</span><span class="colouredtext">${meal.strTags ? meal.strTags : 'N/A'}</span></p>
                        <div>
                            <p>Ingredients</p>
                            <ul>${ingredients}</ul>
                        </div>
                    </div>
                </div>
                <p>Measure</p>
                <div><ul>${measures}</ul></div>
                <div>
                    <p>Instructions</p>
                    <ul>${instructions}</ul>
                </div>
            </div>
            `;
        }).join("");
        
    } catch (error) {
        console.error("Error fetching meals:", error);
    }
};




function hiddencategories(){
    hiddenSlider()
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='block'
    const beefcontainer=document.getElementById('itemandmealscategories');
    beefcontainer.style.display='none'
    const melasSection= document.getElementById('melasSection');
    melasSection.style.display='none'
    const containerOfRecipes=document.getElementById('containerOfRecipes');
    containerOfRecipes.style.display='none'
}
