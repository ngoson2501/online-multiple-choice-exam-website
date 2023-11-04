   // Lắng nghe sự kiện click trên nút "Bắt đầu thi"
   var startButtons = document.querySelectorAll('.start-exam-button');
   startButtons.forEach(function(button) {
     button.addEventListener('click', function() {
       var examTime = this.parentElement.parentElement.querySelector('.exam-time');
       examTime.style.display = 'none'; // Ẩn thẻ exam-time
       var examInfoBlock = this.parentElement;
       var examContent = document.createElement('div');
       examContent.classList.add('exam-content');
       examContent.innerHTML = '<div>Đề thi</div>' +
         '<input type="button" class="start-button" value="Bắt đầu">' +
         '<input type="button" class="cancel-button" value="Cancel">';
       examInfoBlock.style.display = 'none';
       examInfoBlock.parentElement.appendChild(examContent);


       // Lắng nghe sự kiện click trên nút "Cancel" trong khối "exam-content"
      var cancelButton = examContent.querySelector('.cancel-button');
      cancelButton.addEventListener('click', function() {
        examTime.style.display = 'block'; // Hiển thị lại thẻ exam-time
        examInfoBlock.style.display = 'block';  // Hiển thị lại nội dung ban đầu
        examContent.remove(); // Loại bỏ khối "exam-content"



      });


     });
   });
