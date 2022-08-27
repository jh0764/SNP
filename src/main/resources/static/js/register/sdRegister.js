const grade = document.getElementById("grade");
const gradeLv = document.getElementsByName('glv');
const gradeSelect = document.getElementById('gradeLv');
const gradeSelect2 = document.getElementById('gradeLv2');



// 초,중,고 선택시 학년 선택 변경
    function selectChange(){
        const gradeValue = parseInt(grade.options[grade.selectedIndex].value);
        if (gradeValue >= 2){
            console.log('start2');
            gradeSelect.style.display = "none";
            gradeSelect2.style.display = "block";

        }else {
            gradeSelect.style.display = "block";
            gradeSelect2.style.display = "none";
        }
    }
    grade.addEventListener("select", selectChange);





