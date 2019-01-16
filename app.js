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


function createTemplate(array) {
	let template = `
		<div class="recipe">
			<div class="recipe-img">
				<i class="fas fa-angle-left"></i>
				<img src="${array.image}">
				<i class="fas fa-angle-right"></i>
				<div class="recipe-title photo-overlay">
				<a href="${array.link}">
				<h3>${array.title}</h3>
			</div>
			</div>
		</div>
	`
	return template
} 

function insertHtml(array) {
	for(let i = 0; i < array.length; i++) {
		galleryWrap.insertAdjacentHTML("beforeend", createTemplate(array[i]))
	}
}

insertHtml(recipes)