// utils/scrollHelper.js

export function activeSection() {
  let scrollPosition;
  let mainBoxElement;
  let aboutElement;
  let productElement;
  let sectionText;

  if (typeof window !== "undefined") {
    scrollPosition = window.scrollY;

    mainBoxElement = document.getElementById("mainBox");
    aboutElement = document.getElementById("about");
    productElement = document.getElementById("products");
  }

  if (!mainBoxElement || !aboutElement) {
    // Return null if elements are not found
    return null;
  }

  const mainBoxOffset = mainBoxElement.getBoundingClientRect().top + window.scrollY;
  const aboutOffset = aboutElement.getBoundingClientRect().top + window.scrollY;
  const productOffset = productElement.getBoundingClientRect().top + window.scrollY;

  console.log("Scroll Position:", scrollPosition);
  console.log("Main Box Offset:", mainBoxOffset);
  console.log("About Offset:", aboutOffset);

  if (scrollPosition < aboutOffset) {
    sectionText = "Home";
    return "#mainBox";
  } else if (scrollPosition >= aboutOffset && scrollPosition < productOffset) {
    sectionText = "About";
    return "#about";
  } else {
    sectionText = "Products";
    return "#products";
  }
}
