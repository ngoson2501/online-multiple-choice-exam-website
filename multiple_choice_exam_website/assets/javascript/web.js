








$(document).ready(function() {
  // Chọn phần tử có id là "header" và tải nội dung từ "header.html" vào phần tử đó.
  $(".header").load("/assets/html/header/header.html");
  $(".main").load("/assets/html/main/main.html");
  $(".document").load("/assets/html/tai_lieu_tham_khao/block_tai_lieu.html")
  $(".footer").load("/assets/html/footer/footer.html");

  
  
  

});






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










document.querySelector("#pageNav").addEventListener("click", function() {
// Thực hiện chuyển hướng đến trang HTML khác
window.location.href = "assets/html/on_luyen_THPT/on_luyen_THPT.html";
});








