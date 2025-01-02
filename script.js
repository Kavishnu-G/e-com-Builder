document.addEventListener("DOMContentLoaded", () => {
  let navEnabled = false;
  let bannerEnabled = false;
  let productsEnabled = false;
  let footerEnabled = false;


  let navContent = "<nav class='navbar'><div class='logo'>MySite</div><ul class='nav-links'><li><a href='#home'>Home</a></li><li><a href='#shop'>Shop</a></li><li><a href='#contact'>Contact</a></li></ul></nav>";
  let bannerContent = "<div class='banner-slider'><div class='slides'><img src='banner.jpg' alt='Banner 1'></div></div>";
  let productsContent = "<section class='products'><h2>Our Products</h2><div class='product'><img src='product.jpeg' alt='Product 1'><h3>Product 1</h3><p>150.00Rs</p></div><div class='product'><img src='product.jpeg' alt='Product 2'><h3>Product 2</h3><p>150.00Rs</p></div><div class='product'><img src='product.jpeg' alt='Product 3'><h3>Product 3</h3><p>150.00Rs</p></div></section>";
  let footerContent = "<footer><p>&copy; 2024 E-Commerce. All rights reserved.</p><p><a href='#privacy'>Privacy Policy</a> | <a href='#terms'>Terms of Service</a></p></footer>";


  document.getElementById("nav").addEventListener("click", () => {
    navEnabled = !navEnabled;
    if (navEnabled) {
      alert("Navigation Enabled");
    } else {
      alert("Navigation Disabled");
    }
  });


  document.getElementById("banner").addEventListener("click", () => {
    bannerEnabled = !bannerEnabled;

    if (bannerEnabled) {
      alert("Sliding Banner Enabled")
    } else {
      alert("Sliding Banner Disabled")
    }
  });

  document.getElementById("products").addEventListener("click", () => {
    productsEnabled = !productsEnabled;
    if (productsEnabled) {
      alert("Prduct Section  Enabled")
    } else {
      alert("Prduct Section  Disabled")
    }
  });

  document.getElementById("footer").addEventListener("click", () => {
    footerEnabled = !footerEnabled;
    if (footerEnabled) {
      alert("Footer section Enabled")
    } else {
      alert("Footer section Disabeld")
    }
  });

  document.getElementById("generate-site").addEventListener("click", () => {
    let generatedContent = "";


    if (navEnabled) generatedContent += navContent;
    if (bannerEnabled) generatedContent += bannerContent;
    if (productsEnabled) generatedContent += productsContent;
    if (footerEnabled) generatedContent += footerContent;


    localStorage.setItem("generatedSite", generatedContent);

    document.getElementById("open-file").style.display = "inline-block";

    alert("Site generated successfully!");
  });


  document.getElementById("open-file").addEventListener("click", () => {
    const filePath = "http://127.0.0.1:5500/site.html";
    window.open(filePath, "_blank");
  });

});
