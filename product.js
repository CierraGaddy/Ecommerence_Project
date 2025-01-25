/* This DOM event listener listens for the HTML to be completely loaded
and then executed the function*/
document.addEventListener("DOMContentLoaded", function () {
  /*This checks that the page's path matches the products.html page  */
  if (window.location.pathname === "/products.html") {
    /*Uses fetch method to connect to product.json */
    fetch("product.json")
      .then((response) => response.json())
      .then((data) => {
        /* Dom is used to get the element by its id */

        let productList = document.getElementById("product-list");

        /* This variable holds the JSON array for my products*/
        data.forEach((product) => {
          /*This DOM creates a new element and connects it to the class "product-item" */
          let productDiv = document.createElement("div");
          productDiv.classList.add("product-item");

          /* Connects to HTML each objects through string interpolation to
          insert the information into the elements to create the products on the page */
          productDiv.innerHTML = `
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>${product.price}</p>
<p>${product.description}</p>
`;
          /* adds product.div as child to productlist element. 
          To modify the HTML by by adding the child to the parent
          like putting a smaller box in a big one */

          productList.appendChild(productDiv);
        });
      });
  }
});
