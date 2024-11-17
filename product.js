document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/products.html") {
    fetch("product.json")
      .then((response) => response.json())
      .then((data) => {
        let productList = document.getElementById("product-list");
        data.forEach((product) => {
          let productDiv = document.createElement("div");
          productDiv.classList.add("product-item");
          productDiv.innerHTML = `
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<p>${product.price}</p>
<p>${product.description}</p>
`;
          productList.appendChild(productDiv);
        });
      });
  }
});
