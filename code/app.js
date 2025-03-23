
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
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[0].strCategory}</p>
            <p>${data.categories[0].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
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
// Chicken Categories Container Starting
function catogorydiscription2(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[1].strCategory}</p>
            <p>${data.categories[1].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    chickencardsfetchdata()
}

const chickencardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Chicken");
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
// Chicken Categories Container Ending
// Dessert Categories Container Starting
function catogorydiscription3(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[2].strCategory}</p>
            <p>${data.categories[2].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Dessertcardsfetchdata()
}

const Dessertcardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Dessert");
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
// Dessert Categories Container Ending
// Lamb Categories Container Starting
function catogorydiscription4(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[3].strCategory}</p>
            <p>${data.categories[3].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Lambcardsfetchdata()
}

const Lambcardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Lamb");
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
// Lamb Categories COntainer Ending
// Miscellaneous Categories Starting
function catogorydiscription5(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[4].strCategory}</p>
            <p>${data.categories[4].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Miscellaneouscardsfetchdata()
}

const Miscellaneouscardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous");
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
// Miscellaneous Categories Ending
// Pasta Categories Starting
function catogorydiscription6(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[5].strCategory}</p>
            <p>${data.categories[5].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Pastacardsfetchdata()
}

const Pastacardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Pasta");
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
// Pasta Categories Ending
// Pork Categories Starting
function catogorydiscription7(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[6].strCategory}</p>
            <p>${data.categories[6].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Porkcardsfetchdata()
}

const Porkcardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Pork");
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
// Pork Categories Ending
// Seafood Categories Starting
function catogorydiscription8(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[7].strCategory}</p>
            <p>${data.categories[7].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Seafoodcardsfetchdata()
}

const Seafoodcardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Seafood");
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
// Seafood Categories Ending
// Side Categories Starting
function catogorydiscription9(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[8].strCategory}</p>
            <p>${data.categories[8].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Sidecardsfetchdata()
}

const Sidecardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Side");
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
// Side Categories Ending
// Starter Categories Starting
function catogorydiscription10(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[9].strCategory}</p>
            <p>${data.categories[9].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Startercardsfetchdata()
}

const Startercardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Starter");
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
// Starter Categories Ending
// Vegan Categories Starting
function catogorydiscription11(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[10].strCategory}</p>
            <p>${data.categories[10].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Vegancardsfetchdata()
}

const Vegancardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Vegan");
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
// Vegan Categories Ending
// Vegetarian Categories Starting
function catogorydiscription12(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[11].strCategory}</p>
            <p>${data.categories[11].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Vegetariancardsfetchdata()
}

const Vegetariancardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Vegetarian");
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
// Vegetarian Categories Ending
// Breakfast Categories Starting
function catogorydiscription13(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[12].strCategory}</p>
            <p>${data.categories[12].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Breakfastcardsfetchdata()
}

const Breakfastcardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Breakfast");
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
// Breakfast Categories Ending
// Goat Categories Starting
function catogorydiscription14(){
    const categoriesContainer=document.getElementById('categoriesContainer');
    categoriesContainer.style.display='none'
    const itemandmealscategorie=document.getElementById('itemandmealscategories');
    itemandmealscategorie.style.display='block'
    const itemfetchdata = async ()=>{
        try{
            const datafetch = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await datafetch.json();
            const itemcontainer=document.getElementById('itemcategoriescontainer');
            itemcontainer.innerHTML=`
            <p class="descriptionItemName">${data.categories[13].strCategory}</p>
            <p>${data.categories[13].strCategoryDescription}</p>`
        }catch(error){
            console.error("Error fetching data:",error)
        }
    }
    itemfetchdata()
    Goatcardsfetchdata()
}

const Goatcardsfetchdata = async ()=>{
    try{
        const datafetch = await fetch("https://themealdb.com/api/json/v1/1/filter.php?c=Goat");
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
// Goat Categories Ending
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