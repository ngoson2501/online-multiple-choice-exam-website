var arrayExams = [];



  function displayExams (exams){
    var listExamsBlock = document.querySelector('#content')
    var htmls = exams.map(function(exam){
        return `<div class="exam exam-${exam.id}">
                    <h2> <a href="#">${exam.info.title}</a></h2>
                    <p>${exam.info.address}</p>
                    <p class="exam-date-${exam.id}">${exam.info.date} </p>
                    <div class="block-info-questions-${exam.id}">
                      <p>${exam.info.question_number}</p>
                      <button class="start-exam-button" type="submit" onclick="hideElements(${exam.id})" >Bắt đầu thi</button>
                    </div>


                    <div class="exam-questions exam-questions-${exam.id}"  style="display: none">
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
                        <div class="box-function-buttons box-function-buttons-${exam.id}">
                          <input type="button" class="start-button start-button-${exam.id}" onclick="showInstruct(${exam.id})" value="BẮT ĐẦU">
                          <input type="button" class="cancel-button" onclick="hideExam(${exam.id})" value="CANCEL">
                        </div>
                    </div>



                </div>`
    });
  
    listExamsBlock.innerHTML = htmls.join('')
  }
  
  
  
  
  function hideElements(id) {

    var examDateElements = $(`.exam-date-${id}`);
    var blockInfoElements = $(`.block-info-questions-${id}`);

  examDateElements.detach();
  blockInfoElements.detach();
  
   $('.nav-link').append(` <p>/</p>
                           <p><a href="#">Lịch Sử</a></p>`)
  
    showBlockInfo(id);
  
  }




  



  
  function showBlockInfo(id) {
   
    var blockInfoElements = document.querySelectorAll(`.exam-questions-${id}`);

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
  
      // Ghi nhớ vị trí cuộn hiện tại
  var scrollTop = $(window).scrollTop();

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
    location.reload();


     // Thiết lập lại vị trí cuộn về đầu trang
   $(window).scrollTop(0);
  
  
  
  }



function showInstruct(id){
  var questions = $(`.box-questions-${id}`);
  var buttons = $(`.start-button-${id}`);
  var boxInput = $(`.box-function-buttons-${id}`);

  // Ghi nhớ vị trí cuộn hiện tại
  var scrollTop = $(window).scrollTop();

 questions.empty();
 buttons.remove();

 boxInput.prepend(`<input type="button" class="start-exam start-exam-${id}" onclick="TurnOnTheTest(${id})"  value="BẮT ĐẦU THI">`)

 questions.append(`<div class="box-instruct box-instruct-${id}">
                        <h2>Hướng dẫn làm bài trắc nghiệm</h2>
                        
                   </div>`);

   // Thiết lập lại vị trí cuộn về đầu trang
   $(window).scrollTop(0);


}







function TurnOnTheTest(id) {
  let boxQuestions = $('#content')
  // Sử dụng jQuery để chọn tất cả các phần tử có class .exam-${id} và xóa nội dung của chúng
  // Ghi nhớ vị trí cuộn hiện tại
  var scrollTop = $(window).scrollTop();

  boxQuestions.empty();
  boxQuestions.append(`<div class="box-take-the-exam box-take-the-exam-${id}">


                       </div>`)
   // Thiết lập lại vị trí cuộn về đầu trang
   $(window).scrollTop(0);
}
  

  
  
  
  function start(){
    getData(displayExams)
    /* getData(showQuestions) */
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
  var examAPI = 'http://localhost:3000/THI_THPT_QG_Mon_Lich_Su'
  
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
  