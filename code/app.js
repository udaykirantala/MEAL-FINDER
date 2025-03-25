
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
            <div class="mealscategories">
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
                    <p>${meal.strMeal}</p>
                    <p>${meal.strArea}</p>
                    <p>${meal.strCategory}</p>
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

function hiddencategories(){
    hiddenSlider()
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='block'
    const beefcontainer=document.getElementById('itemandmealscategories');
    beefcontainer.style.display='none'
}
