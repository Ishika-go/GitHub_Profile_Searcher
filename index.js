const searchTxt = document.querySelector("#search");
const searchResults = document.querySelector("#results");
searchTxt.addEventListener("input", function (event) {
  const searchValue = event.target.value;

  getProductsFromAPI(searchValue);
});

async function getProductsFromAPI(searchInput) {
  const APIResponseData = await fetch(
    `https://api.github.com/users/${searchInput}`
  );

  const apiSearchResults = await APIResponseData.json();
  // console.log(apiSearchResults);
  displayProducts(apiSearchResults);
}

function displayProducts(products) {
  // searchResults.innerHTML = "";

  searchResults.innerHTML = `

  <div class="card">
  <div class="content">
  <div class="container">
 
  <div class="row g-2">
    <div  class="col-md-4 col-sm-12  ">
   <img style ="height:10rem;" src="${products.avatar_url}" class="card-img-top img-fluid"  alt="...">
   </div>
   
<div class="col-md-8 col-sm-12"> 
<div class="card-body">
<div id = "moon">
  <div class = "row">
<h5 style="font-size:20px;">${products.name}</h5>
<h6 style="font-size:15px;">${products.bio}</h6> </div></div>
<div class="row g-2 m-0">
    <div class="col-4 m-0 p-0 ">
<h6 style="font-size:15px;"> Follower: ${products.followers}</h6> </div>
<div class="col-4  m-0 p-0">
<h6 style="font-size:15px;">Following: ${products.following}</h6></div>
<div class="col-4 m-0 p-0">
<h6 style="font-size:15px;">Repos: ${products.public_repos}</h6>
</div>
</div>
<div class="row m-0 p-0">
<div class="col-6 m-0 p-0">
<h6 style="font-size:15px;">Twitter: ${products.twitter_username}</h6></div>
<div class="col-6 m-0 p-0">
<h6 style="font-size:15px;">Location: ${products.location}</h6> </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`;
}
