// Products Data

const products = [

{
id:1,
name:"Gaming Laptop",
price:65000,
category:"electronics",
image:"https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMHBybyUyMG0zfGVufDB8fDB8fHww"

},

{
id:2,
name:"Wireless Headphones",
price:2999,
category:"electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},

{
id:3,
name:"Smart Watch",
price:4999,
category:"electronics",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
},

{
id:4,
name:"Casual T-Shirt",
price:799,
category:"fashion",
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
},

{
id:5,
name:"Running Shoes",
price:2499,
category:"fashion",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
},

{
id:6,
name:"Denim Jacket",
price:1899,
category:"fashion",
image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"
},

{
id:7,
name:"JavaScript Guide",
price:699,
category:"books",
image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600"
},

{
id:8,
name:"HTML & CSS Mastery",
price:499,
category:"books",
image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600"
}

];


// DOM Elements

const productContainer =
document.getElementById("productContainer");

const search =
document.getElementById("search");

const category =
document.getElementById("category");

const sort =
document.getElementById("sort");

const cartCount =
document.getElementById("cartCount");

const darkBtn =
document.getElementById("darkBtn");

const topBtn =
document.getElementById("topBtn");


// Local Storage

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];


// Display Products

function displayProducts(items){

productContainer.innerHTML = "";

items.forEach(product=>{

productContainer.innerHTML += `

<div class="card">

<img src="${product.image}" alt="${product.name}">

<div class="card-content">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<p>${product.category}</p>

<div class="card-buttons">

<button
class="cart-btn"
onclick="addToCart(${product.id})">

Add To Cart

</button>

<button
class="wishlist-btn"
onclick="addToWishlist(${product.id})">

❤

</button>

</div>

</div>

</div>

`;

});

}

displayProducts(products);


// Add To Cart

function addToCart(id){

const product =
products.find(item => item.id === id);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(product.name + " added to cart");

}


// Wishlist

function addToWishlist(id){

const product =
products.find(item => item.id === id);

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

alert(product.name + " added to wishlist ❤️");

}


// Cart Counter

function updateCartCount(){

cartCount.innerText = cart.length;

}

updateCartCount();


// Search

search.addEventListener("input", ()=>{

const value =
search.value.toLowerCase();

const filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);

displayProducts(filtered);

});


// Category Filter

category.addEventListener("change", ()=>{

if(category.value === "all"){

displayProducts(products);
return;

}

const filtered =
products.filter(product=>

product.category === category.value

);

displayProducts(filtered);

});


// Sorting

sort.addEventListener("change", ()=>{

let sorted = [...products];

if(sort.value === "low"){

sorted.sort(
(a,b)=>a.price-b.price
);

}

if(sort.value === "high"){

sorted.sort(
(a,b)=>b.price-a.price
);

}

displayProducts(sorted);

});


// Dark Mode

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark");

}

darkBtn.addEventListener("click", ()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem(
"theme",
"dark"
);

}else{

localStorage.setItem(
"theme",
"light"
);

}

});


// Back To Top

window.addEventListener("scroll", ()=>{

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", ()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});


// Contact Form

const form =
document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Message Sent Successfully ✅"
);

form.reset();

});


// Console Welcome Message

console.log(
"🚀 SmartShop Loaded Successfully"
);