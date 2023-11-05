
const subjectSelect = document.getElementById("subject");
const partSection = document.getElementById("math_topic");
const partSelect = document.getElementById("topic");

// Danh sách các phần của Toán
const mathParts = [
    { 
        value: "",
        label: "" 
    },
    { 
        value: "Toán Hình",
        label: "Toán Hình" 
    },
    { 
        value: "Toán Đại",
        label: "Toán Đại" 
    }
];

const chemistryPart = [
    { 
        value: "",
        label: "" 
    },
    { 
        value: "Hóa vô cơ",
        label: "Hóa vô cơ" 
    },
    { 
        value: "Hóa hữu cơ",
        label: "Hóa hữu cơ" 
    }
]



const chu_de_hoa_huu_co = [
    { 
        value: "",
        label: "" 
    },
    { 
        value: "Este và chất béo",
        label: "Este và chất béo"
    },
    { 
        value: "Protein",
        label: "protein" 
    },
    { 
        value: "Polime",
        label: "Polime" 
    }
]


const chu_de_hoa_vo_co = [
    { 
        value: "",
        label: "" 
    },
    { 
        value: "Sắt",
        label: "Sắt"
    },
    { 
        value: "Nhận biết một số chất khí",
        label: "Nhận biết một số chất khí" 
    }
]




const chu_de_toan_dai = [
    { 
        value: "",
        label: "" 
    },
    { 
        value: "Nguyên hàm",
        label: "Nguyên hàm" 
    },
    { 
        value: "Tích phân",
        label: "Tích phân" 
    },
    { 
        value: "Cực trị của hàm số",
        label: "Cực trị của hàm số" 
    }
];


const chu_de_toan_hinh = [
    { 
        value: "",
        label: "" 
    },
    { 
        value: "Mặt nón",
        label: "Mặt nón"
    },
    { 
        value: "Mặt trụ",
        label: "Mặt trụ"
    },
    { 
        value: "Mặt cầu",
        label: "Mặt cầu"
    }
];





// Lắng nghe sự kiện thay đổi lựa chọn Môn học
subjectSelect.addEventListener("change", function () {
    const selectedSubject = subjectSelect.value;

    

    if (selectedSubject === "Toán") {
        // Hiển thị menu "Phần" và cập nhật các tùy chọn
       /*  partSection.style.display = "block"; */
        partSelect.innerHTML = mathParts.map(function(part) {
            
            return `<option value="${part.value}">${part.label}</option>`
        }).join('');
        
    }else if (selectedSubject === "Hóa") {
        // Hiển thị menu "Phần" và cập nhật các tùy chọn
       /*  partSection.style.display = "block"; */
        partSelect.innerHTML = chemistryPart.map(function(part) {
            
            return `<option value="${part.value}">${part.label}</option>`
        }).join('');
        
    }
    
    /* else {
        
        partSection.style.display = "none";
        partBox.style.display = "none";
    } */
});





const partBox = document.getElementById("ToanHinh_topic");
const Select = document.getElementById("topic_Hinh");

partSelect.addEventListener("change", function () {
    const giaTri = partSelect.value;


    if (giaTri === "Toán Hình") {
        // Hiển thị menu "Phần" và cập nhật các tùy chọn
        /* partBox.style.display = "block"; */
        Select.innerHTML = chu_de_toan_hinh.map(function(part) {
            
            return `<option value="${part.value}">${part.label}</option>`
        }).join('');
        
    }else if (giaTri === "Toán Đại") {
        // Hiển thị menu "Phần" và cập nhật các tùy chọn
        /* partBox.style.display = "block"; */
        Select.innerHTML = chu_de_toan_dai.map(function(part) {
            
            return `<option value="${part.value}">${part.label}</option>`
        }).join('');
        
    }else if (giaTri === "Hóa vô cơ") {
        // Hiển thị menu "Phần" và cập nhật các tùy chọn
        /* partBox.style.display = "block"; */
        Select.innerHTML = chu_de_hoa_vo_co.map(function(part) {
            
            return `<option value="${part.value}">${part.label}</option>`
        }).join('');
        
    }else if (giaTri === "Hóa hữu cơ") {
        // Hiển thị menu "Phần" và cập nhật các tùy chọn
        /* partBox.style.display = "block"; */
        Select.innerHTML = chu_de_hoa_huu_co.map(function(part) {
            
            return `<option value="${part.value}">${part.label}</option>`
        }).join('');
        
    }
    
    /* else{
        // Ẩn menu "Phần"
        partBox.style.display = "none";
    } */
});








const form = document.getElementById("topicFilterForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn gửi lại biểu mẫu

    const selectedSubject = subjectSelect.value;
    const selectedPart = partSelect.value;
    const selectedChuDe = Select.value;
    const selectedLevel = document.getElementById("level").value;

    /* console.log("Môn học:", typeof selectedSubject);
    console.log("Phần:", typeof selectedPart);
    console.log("Chủ đề:", typeof selectedChuDe);
    console.log("Cấp độ:", typeof selectedLevel); */
    const formData = {
        subject: selectedSubject,
        part: selectedPart,
        chuDe: selectedChuDe,
        level: selectedLevel,
    };
    
    console.log(formData);


    // Nếu bạn muốn thực hiện hành động khác dựa trên giá trị biểu mẫu, bạn có thể thực hiện nó ở đây.

    // Ví dụ: gửi dữ liệu đến máy chủ hoặc hiển thị kết quả trên trang web.
});











/* subjectSelect.addEventListener("change", function () {
    const selectedSubject = subjectSelect.value;

    if (selectedSubject === "Toán") {
        partSection.style.display = "block";
        partSelect.innerHTML = mathParts.map(part => `<option value="${part.value}">${part.label}</option>`).join('');

        // Ẩn các phần khác (Toán Hình và Toán Đại)
        toanHinhTopics.style.display = "none";
        toanDaiTopics.style.display = "none";
    } else if (selectedSubject === "Toán Hình") {
        partSection.style.display = "block";
        partSelect.innerHTML = chu_de_toan_hinh.map(part => `<option value="${part.value}">${part.label}</option>`).join('');

        // Hiển thị chọn chủ đề Toán Hình
        toanHinhTopics.style.display = "block";
        toanDaiTopics.style.display = "none";
    } else if (selectedSubject === "Toán Đại") {
        partSection.style.display = "block";
        partSelect.innerHTML = chu_de_toan_dai.map(part => `<option value="${part.value}">${part.label}</option>`).join('');

        // Hiển thị chọn chủ đề Toán Đại
        toanHinhTopics.style.display = "none";
        toanDaiTopics.style.display = "block";
    } else {
        partSection.style.display = "none";

        // Ẩn các phần khác (Toán Hình và Toán Đại)
        toanHinhTopics.style.display = "none";
        toanDaiTopics.style.display = "none";
    }
}); */
