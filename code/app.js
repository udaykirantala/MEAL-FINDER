
// Slider Functionality Starting

function showSlider(){
    const silder = document.querySelector('.header_heading_slider');
    silder.style.display='flex';
}
function hiddenSlider(){
    const silder = document.querySelector('.header_heading_slider');
    silder.style.display='none';
}

// Slider Functionality Ending

// Categories Container Content

const containerContent = document.getElementById('categoriesContainerContent');
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