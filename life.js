
// Set up the slider

function init() {

 /* slideImage[0] = 0  slideImage[1] = 100%  
slideImage[2] = 200%  slideImage[3] = 300% 
 slideImage[4] = 400%  slideImage[5] = 500%
 */
 
 slideImage.forEach((img, i)
=> { img.style.left = i * 100 + "%";


 })

}

// So the first thing to do, is to find a way to use javascript to take hold of the icons.
// And this is done so that we can find a way to interact with them.

const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

// Directional arrows shown only when image is hovered over
slideImage.addEventListener("mouseover", () => {
  nextBtn.style.display = "block";
  prevBtn.style.display = "block";
}





