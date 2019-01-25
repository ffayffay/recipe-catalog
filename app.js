let galleryWrap = document.querySelector('.gallery-wrap');
let recipes = [
	{
		title: "Red Lentil Spinach Soup"
		,image: "https://mywholefoodlife.com/wp-content/uploads/2016/12/Red-Lentil-and-Spinach-Soup-My-Whole-Food-Life-680x1024.jpg"
		,link: "https://mywholefoodlife.com/2016/12/29/red-lentil-and-spinach-soup/"
	}
	,{
		title: "Garlic Roasted Potatoes"
		,image: "https://cafedelites.com/wp-content/uploads/2017/10/Crispy-Garlic-Roasted-Potatoes-IMAGE-27.jpg"
		,link: "https://cafedelites.com/crispy-garlic-roasted-potatoes/"
	}
	,{
		title: "Baked Sweet Potato Fries"
		,image: "https://cookieandkate.com/images/2010/12/crispy-baked-sweet-potato-fries-with-ketchup-1-550x824.jpg"
		,link: "https://cookieandkate.com/2018/baked-sweet-potato-fries/"
	}
	,{
		title: "Spicy Collard Greens"
		,image: "http://divascancook.com/wp-content/uploads/2012/12/IMG_8898_2.jpg"
		,link: "http://divascancook.com/vegetarian-southern-collard-greens-recipe-healthy/"
	}
	,{
		title: "Vegetarian Baked Beans"
		,image: "https://avirtualvegan.com/wp-content/uploads/2016/01/smoky-barbecue-baked-beans-5-copy-678x1024.jpg"
		,link: "https://avirtualvegan.com/vegan-barbecue-baked-beans/"
	}
	,{
		title: "Roasted Vegetables"
		,image: "https://www.thechunkychef.com/wp-content/uploads/2018/08/Sheet-Pan-Roasted-Vegetables-2-680x879.jpg"
		,link: "https://www.thechunkychef.com/sheet-pan-oven-roasted-vegetables/"
	}
	,{
		title: "Roasted Parmesan Brussel Sprouts"
		,image: "https://i2.wp.com/togetherasfamily.com/wp-content/uploads/2017/09/oven-roasted-parmesan-brussel-sprouts-3.jpg"
		,link: "https://togetherasfamily.com/oven-roasted-parmesan-brussel-sprouts/"
	}
	,{
		title: "Grilled Asparagus"
		,image: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/09/2048x1362/gallery-1519654895-delish-grilled-asparagus.jpg"
		,link: "https://www.delish.com/cooking/recipe-ideas/recipes/a58383/best-grilled-asparagus-recipe/"
	}
	,{
		title: "Spicy Grilled Corn"
		,image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/26/640x958/gallery-1498849222-delish-bang-bang-corn-pinterest-2.jpg"
		,link: "https://www.delish.com/cooking/recipe-ideas/recipes/a53994/bang-bang-corn-recipe/"
	}
	,{
		title: "Zucchini and Cauliflower Skewers with Feta"
		,image: "https://hips.hearstapps.com/del.h-cdn.co/assets/15/35/1600x1066/gallery-1440699930-cauliflower-zucchini-kebab-delish.jpg"
		,link: "https://www.delish.com/cooking/recipe-ideas/recipes/a43682/zucchini-cauliflower-skewers-feta-recipe/"
	}
	,{
		title: "Mixed Balsamic Grilled Vegetables"
		,image: "https://ifoodreal.com/wp-content/uploads/2018/04/grilled-vegetables.jpg"
		,link: "https://ifoodreal.com/balsamic-grilled-vegetables/"
	}
	,{
		title: "Grilled Fajita Veggie Skewers"
		,image: "https://www.aspicyperspective.com/wp-content/uploads/2016/06/grilled-fajita-vegetable-skewers-15.jpg"
		,link: "https://www.aspicyperspective.com/grilled-fajita-vegetable-skewers/"
	}
	,{
		title: "Grilled Vegetables with Basil Viniagrette"
		,image: "https://www.averiecooks.com/wp-content/uploads/2016/07/grilledvegetables-6.jpg"
		,link: "https://www.averiecooks.com/grilled-vegetables-basil-vinaigrette/"
	}
]

// gallery^^^^
// user should be able to click next or prev and view the next image
// user should be able to view one image at a time
// user should be able to click on image to visit website

let currentRecipeIndex = 0;
let currentRecipe = recipes[currentRecipeIndex];

function nextArrow() {
	if (currentRecipeIndex > recipes.length - 1) {
		currentRecipeIndex = 0
	}else {
		currentRecipeIndex += 1;
	}
	currentRecipe = recipes[currentRecipeIndex]
	renderGallery(currentRecipe)
}

function prevArrow() {
	if (currentRecipeIndex <= 0) {
		currentRecipeIndex = recipes.length - 1
	} else{
		currentRecipeIndex -= 1;
	}
	currentRecipe = recipes[currentRecipeIndex]
	renderGallery(currentRecipe)
}

function renderGallery(currentRecipe) {
	const template = `
	<div class="recipe">
		<div onclick="prevArrow()">
			<i class="fas fa-angle-left fa-3x"></i>
		</div>
		<div class="recipe-body">
			<div class="recipe-img">
				<img src="${currentRecipe.image}">
			</div>
			<div class="recipe-title photo-overlay">
					<a href="${currentRecipe.link}">
						${currentRecipe.title}
					</a>
			</div>
		</div>
		<div onclick="nextArrow()">
			<i class="fas fa-angle-right fa-3x"></i>
		</div>
	</div>
	`


	galleryWrap.innerHTML = template
}
renderGallery(currentRecipe)

// user inputs recipe name they would like to search for
// user clicks the search button and is taken to the searched recipe



let searchBtn = document.querySelector('.search-btn');
// let searchInput = document.getElementById("search-input").value

searchBtn.addEventListener("click", e => renderListView(e))




function matchSearch(array) {
	const searchInput = document.getElementById("search-input").value
	
	const filterTitles = i => i.title.toLowerCase().includes(searchInput.toLowerCase()) 
	const searchedRecipe = recipes.filter(filterTitles)
		return searchedRecipe
}

//list view detailed view gallery view

function createListTemplate(searchResult) {
	const template = `
	<div class="list-view-wrap">
		<a href="${searchResult.link}">
			${searchResult.title}
		</a>
	</div>
	`
	galleryWrap.insertAdjacentHTML("beforeend", template)
}

function renderListView(searchResult) {
	searchResult = matchSearch(recipes)
	console.log(searchResult)
	galleryWrap.innerHTML = "";
	searchResult.forEach(i => createListTemplate(i))
	
}


