
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
function hiddencategories(){
    hiddenSlider()
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='block'
    const beefcontainer=document.getElementById('itemandmealscategories');
    beefcontainer.style.display='none'
}
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

    fetchCategoryDescription(categoryName);
    fetchCategoryMeals(categoryName);
}

// Function to fetch category description
const fetchCategoryDescription = async (categoryName) => {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();

        const category = data.categories.find((cat) => {cat.strCategory === categoryName});
        if (category) {
            const itemcontainer = document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML = `
                <p class="descriptionItemName">${category.strCategory}</p>
                <p>${category.strCategoryDescription}</p>`;
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
