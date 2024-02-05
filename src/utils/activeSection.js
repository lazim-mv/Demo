// utils/scrollHelper.js

export function activeSection() {
  let scrollPosition;
  let mainBoxElement;
  let aboutElement;
  let productElement;
  let serviceElement;
  let sectionText;

  if (typeof window !== "undefined") {
    scrollPosition = window.scrollY;

    mainBoxElement = document.getElementById("mainBox");
    aboutElement = document.getElementById("about");
    productElement = document.getElementById("products");
    serviceElement = document.getElementById("services");
  }

  if (!mainBoxElement || !aboutElement) {
    return null;
  }

  const mainBoxOffset = mainBoxElement.getBoundingClientRect().top + window.scrollY;
  const aboutOffset = aboutElement.getBoundingClientRect().top + window.scrollY - 200;
  const productOffset = productElement.getBoundingClientRect().top + window.scrollY - 200;
  const serviceOffset = serviceElement.getBoundingClientRect().top + window.scrollY - 200;


  console.log("Scroll Position:", scrollPosition);
  console.log("Main Box Offset:", mainBoxOffset);
  console.log("About Offset:", aboutOffset);

  if (scrollPosition < aboutOffset) {
    // sectionText = "Home";
    return "#mainBox";
  } else if (scrollPosition >= aboutOffset && scrollPosition < productOffset) {
    // sectionText = "About";
    return "#about";
  } else if (scrollPosition >= productOffset && scrollPosition < serviceOffset) {
    // sectionText = "Products";
    return "#products";
  } else {
    // sectionText = "Services";
    return "#services";
  }
}
