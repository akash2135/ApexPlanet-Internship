const products = [

{
name:"MacBook Pro M3",
category:"Laptop",
price:124999,
rating:4.9,
description:"Powerful Apple laptop with M3 chip and Retina Display.",
image:"https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMHBybyUyMG0zfGVufDB8fDB8fHww"
},

{
name:"Dell XPS 15",
category:"Laptop",
price:98999,
rating:4.7,
description:"Premium ultrabook for professionals.",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},

{
name:"HP Pavilion",
category:"Laptop",
price:66999,
rating:4.5,
description:"Perfect laptop for students and developers.",
image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600"
},

{
name:"iPhone 15",
category:"Phone",
price:79999,
rating:4.9,
description:"Latest Apple smartphone with Dynamic Island.",
image:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600"
},

{
name:"Samsung Galaxy S24",
category:"Phone",
price:74999,
rating:4.8,
description:"Flagship Android experience with AI features.",
image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600"
},

{
name:"OnePlus 12",
category:"Phone",
price:64999,
rating:4.7,
description:"Fast performance and premium design.",
image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600"
},

{
name:"Sony WH1000XM5",
category:"Headphone",
price:24999,
rating:4.9,
description:"Industry-leading noise cancellation.",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},

{
name:"JBL Tune 760NC",
category:"Headphone",
price:6999,
rating:4.4,
description:"Affordable wireless ANC headphones.",
image:"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600"
},

{
name:"Boat Rockerz 550",
category:"Headphone",
price:2999,
rating:4.2,
description:"Budget-friendly wireless headphones.",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},

{
name:"Apple Watch Series 9",
category:"Watch",
price:42999,
rating:4.8,
description:"Smartwatch with health monitoring features.",
image:"https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600"
},

{
name:"Samsung Galaxy Watch 6",
category:"Watch",
price:28999,
rating:4.7,
description:"Stylish smartwatch with fitness tracking.",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
},

{
name:"iPad Air",
category:"Tablet",
price:59999,
rating:4.8,
description:"Lightweight tablet with M1 performance.",
image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600"
}

];

const productContainer =
document.getElementById("productContainer");

const categoryFilter =
document.getElementById("categoryFilter");

const sortOption =
document.getElementById("sortOption");

const modal =
document.getElementById("productModal");

const closeBtn =
document.querySelector(".close");

function displayProducts(data){

productContainer.innerHTML = "";

data.forEach((product,index)=>{

productContainer.innerHTML += `

<div class="card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.category}</p>

<div class="price">
₹${product.price.toLocaleString('en-IN')}
</div>

<div class="rating">
⭐ ${product.rating}
</div>

<button
class="btn"
onclick="showDetails(${index})">

View Details

</button>

</div>

`;

});

}

function showDetails(index){

const p = products[index];

document.getElementById("modalImage").src =
p.image;

document.getElementById("modalTitle").innerText =
p.name;

document.getElementById("modalDesc").innerText =
p.description;

document.getElementById("modalPrice").innerText =
"₹" + p.price.toLocaleString('en-IN');

document.getElementById("modalRating").innerHTML =
"⭐ " + p.rating;

modal.style.display = "block";

}

closeBtn.onclick = function(){

modal.style.display = "none";

}

window.onclick = function(event){

if(event.target == modal){

modal.style.display = "none";

}

}

function filterAndSort(){

let filtered = [...products];

const category =
categoryFilter.value;

const sort =
sortOption.value;

if(category !== "all"){

filtered = filtered.filter(
product => product.category === category
);

}

if(sort === "low"){

filtered.sort(
(a,b)=>a.price-b.price
);

}

if(sort === "high"){

filtered.sort(
(a,b)=>b.price-a.price
);

}

if(sort === "rating"){

filtered.sort(
(a,b)=>b.rating-a.rating
);

}

displayProducts(filtered);

}

categoryFilter.addEventListener(
"change",
filterAndSort
);

sortOption.addEventListener(
"change",
filterAndSort
);

displayProducts(products);