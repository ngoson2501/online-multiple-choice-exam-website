var arrayExams = [];

/* var getData; */


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
  var listExamsBlock = document.querySelector('#content')
  var htmls = exams.map(function(exam){
      return `<div class="exam exam-${exam.id}">
                  <h2> <a href="#">${exam.info.title}</a></h2>
                  <p>${exam.info.address}</p>
                  <p class="exam-date-${exam.id}">${exam.info.date} </p>
                  <div class="block-info-questions-${exam.id}">
                    <p>${exam.info.question_number}</p>
                    <button class="start-exam-button" type="submit" onclick="hideElements(${exam.id})">Bắt đầu thi</button>
                  </div>


                  <div class="exam-questions exam-questions-${exam.id}" style="display: none">
                      <div class="box-basic-info">
                          <div>
                            <span>
                              <img src="/assets/images/check.png" alt="clock">
                              <p>${exam.info.question_number}</p>
                            </span>
                            <span>
                              <img src="/assets/images/clock.png" alt="clock">      
                              <p>${exam.info.examTime}</p>
                            </span>
                          </div>
                      </div>
                      <div class="box-questions box-questions-${exam.id}">
                        
                      </div>
                      <div class="box-function-buttons">
                        <input type="button" class="start-button" value="BẮT ĐẦU">
                        <input type="button" class="cancel-button" onclick="hideExam(${exam.id})" value="CANCEL">
                      </div>
                  </div>



              </div>`
  });

  listExamsBlock.innerHTML = htmls.join('')
}




function hideElements(id) {
  var examDateElements = document.querySelectorAll(`.exam-date-${id}`);
  var blockInfoElements = document.querySelectorAll(`.block-info-questions-${id}`);

  examDateElements.forEach(function (element) {
    element.style.display = "none";
    
  });

  blockInfoElements.forEach(function (element) {
    element.style.display = "none";
  });

 

  showBlockInfo(id);

}


function showBlockInfo(id) {
  // Lấy tất cả các phần tử có class ".block-info-questions-${id}"
  var blockInfoElements = document.querySelectorAll(`.exam-questions-${id}`);
      /* blockInfoElements.style.display = "block"; */
  // Hiển thị các phần tử
  blockInfoElements.forEach(function (element) {
    element.style.display = "block";
  });
  showQuestions(id)
}




function showQuestions(id) {
    // Hiển thị câu hỏi trong khối ".exam-questions-${id}"
    var Questions = arrayExams.find(Exam => Exam.id === id).questions;
    var questionsBlock = document.querySelector(`.box-questions-${id}`);
    questionsBlock.innerHTML = Questions.map(function (question) {
      return `<ul>
                <li>
                  <strong>Câu ${question.id}. ${question.question_text}</strong>
                  <ul type="A">
                    <li>A. ${question.answers[0].text}</li>
                    <li>B. ${question.answers[1].text}</li>
                    <li>C. ${question.answers[2].text}</li>
                    <li>D. ${question.answers[3].text}</li>
                  </ul>
                  
                </li>
              </ul>`;
    }).join('');


}




function hideExam(id){
  var blockExamQuestions = document.querySelectorAll(`.exam-questions-${id}`);
  var examDateElements = document.querySelectorAll(`.exam-date-${id}`);
  var blockInfoElements = document.querySelectorAll(`.block-info-questions-${id}`);

  blockExamQuestions.forEach(function (element) {
    element.style.display = "none";
    
  });

  examDateElements.forEach(function (element) {
    element.style.display = "block";
    
  });

  blockInfoElements.forEach(function (element) {
    element.style.display = "block";
  });

  start()
  /* location.reload(); */



}








function start(){
  getData(displayExams)
  getData(showQuestions)
}
start()





function getData(callback){
  
  /* $.ajax({
    url:'https://6526a969917d673fd76cbd60.mockapi.io/Product/THPT_QG_Mon_Toan',
    type: 'GET',
    success:function(response){
        


       displayExams(response)
    },
    error:function(error){
        console.log(error)
    }
}) */
var examAPI = 'http://localhost:3000/THI_THPT_QG_Mon_Toan'

fetch(examAPI)
    .then(function (response){
        return response.json();
    })
    /* .then(callback) */
    .then(function (data) {
      arrayExams = data; // Gán kết quả trả về từ API vào biến arrayExams
      callback(arrayExams); // Gọi hàm callback và truyền dữ liệu vào đó
      
      
    
    })

    .catch(function (error){
      console.log(error)
    })

}











/* function handleShow_thpt_qg_mon_toan(){
  getData();
  $(".main").load("/assets/html/nav_THI_THPT_QG/THI_THPT_QG_Mon_Toan.html")
  console.log(getData)
} */









  