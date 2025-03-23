
// Slider Functionality Starting
const slidercategoriesdata= async()=>{
    try{
        const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await datafetch.json();
        const sliderlinks = document.getElementById('sliderlinks');
        sliderlinks.innerHTML=data.categories.map((item)=>{
            return`
            <li onclick="catogorydiscription${item.idCategory}()">${item.strCategory}</li>
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

// Beef Categorie Container Staring
function catogorydiscription1(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const beefandmealscategorie=document.getElementById('beefandmealscategories');
    beefandmealscategorie.style.display='block'
    const beeffetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const beefcontainer=document.getElementById('beefcategoriescontainer');
            beefcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[0].strCategory}</p>
            <p>${data.categories[0].strCategoryDescription}</p>`
            console.log(beefcontainer)
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    beeffetchdata()
    beefcardsfetchdata()
}

const beefcardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Beef");
        const data = await datafetch.json();
        const mealscategoriescards = document.getElementById('mealscategoriescards');
        mealscategoriescards.innerHTML=data.meals.map((item)=>{
            return`
            <div class="mealscategories">
            <img src="${item.strMealThumb}" alt="${item.strMeal}">
            <p>${item.strMeal}</p>
            </div>
            `
        }).join("")
    }catch(error){
        console.error("Error fetching data:",error)
    }
}

// Beef Categories Continer Ending
function hiddencategories(){
    hiddenSlider()
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='block'
    const beefcontainer=document.getElementById('beefandmealscategories');
    beefcontainer.style.display='none'
}