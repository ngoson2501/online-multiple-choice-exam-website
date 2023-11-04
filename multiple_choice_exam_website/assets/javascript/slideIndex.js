let slideIndex = 0
const slides = document.querySelectorAll(".slide")
const slider = document.querySelector(".slider")

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++
  } else {
    slideIndex = 0
  }
  showSlide(slideIndex)
}

setInterval(nextSlide, 3000)// Automatic sliding, change every 2 seconds
