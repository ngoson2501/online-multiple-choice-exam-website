var arrayExams = [];

var getData;


$(document).ready(function() {
  // Chọn phần tử có id là "header" và tải nội dung từ "header.html" vào phần tử đó.
  $(".header").load("/assets/html/header/header.html");
  $(".main").load("/assets/html/main/main.html");
  $(".document").load("/assets/html/tai_lieu_tham_khao/block_tai_lieu.html")
  $(".footer").load("/assets/html/footer/footer.html");

  
  

/* 
// Kiểm tra xem đã lưu trạng thái trước đó trong localStorage chưa
var storedContent = localStorage.getItem("thpt_qg_mon_toan_content");

if (storedContent) {
  // Nếu có trạng thái trước đó, hiển thị nó trong .main
  $(".main").html(storedContent);
} else {
  // Nếu không có trạng thái trước đó, mặc định hiển thị nội dung rỗng
  $(".main").html('');
} */
  
  

});







function displayExams (exams){
  exams.forEach(function(exam){

      $("#content").append(`<div class="exam exam-${exam.id}">
                              <h2> <a href="#">${exam.title}</a></h2>
                              <p>${exam.info}</p>
                              <p>${exam.time} </p>
                              <div>
                                <p>${exam.question_number}</p>
                                <button type="submit">Bắt đầu thi</button>
                              </div>
                          </div>`
                          )
  })
}


function getData(){
  
  $.ajax({
    url:'https://6526a969917d673fd76cbd60.mockapi.io/Product/THPT_QG_Mon_Toan',
    type: 'GET',
    success:function(response){
        


       displayExams(response)
    },
    error:function(error){
        console.log(error)
    }
})


}

getData()








/* function handleShow_thpt_qg_mon_toan(){
  getData();
  $(".main").load("/assets/html/nav_THI_THPT_QG/THI_THPT_QG_Mon_Toan.html")
  console.log(getData)
} */









  