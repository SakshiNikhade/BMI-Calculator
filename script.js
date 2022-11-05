
const BMI_HEADS = document.querySelectorAll('.bmi-head');
const BMI_USC = document.getElementById('bmi-usc');
const BMI_SI = document.getElementById('bmi-si');
const CALC_BTN = document.getElementById('calc-btn');
const CLR_BTN = document.getElementById('clr-btn');
let activeForm;

// event listeners
window.addEventListener('DOMContentLoaded', () => {
    BMI_USC.classList.add('show-bmi');
    activeForm = "bmi-usc";
});

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('Gender')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

let button = document.getElementById('btn');


button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const Age=document.getElementById('Age').value;
 
    const result = document.getElementById('output');
    let height_status=false, weight_status=false,Age_status=false;





    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

if(Age=="" || isNaN(Age) || Age<=1 || Age>120){
    document.getElementById('Age_error').innerHTML='Age should be between 2-120'
}else{
    document.getElementById('Age_error').innerHTML = '';
    Age_status=true;
}

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status && Age_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 16){
            result.innerHTML = 'Severe Thinness : ' + bmi;
        }else if(bmi >= 16 && bmi <17){
            result.innerHTML = 'Moderate Thinness : ' + bmi;
        }else if(bmi >= 17 && bmi <18.5){
            result.innerHTML = 'Mild Thinness : ' + bmi;
        }
        else if(bmi >= 18.5 && bmi <25){
            result.innerHTML = 'Your BMI  : ' + bmi;
        }
        else if(bmi >= 25 && bmi <30){
            result.innerHTML = 'Your BMI  : ' + bmi;
        }else if(bmi >= 30 && bmi <35){
            result.innerHTML = 'Your BMI  : ' + bmi;
        }else if(bmi >= 35 && bmi <=40){
            result.innerHTML = 'Your BMI  : ' + bmi;
        }
        else if(bmi > 40 ){
            result.innerHTML = 'Your BMI : ' + bmi;
        }
        else{
            result.innerHTML = 'Over weight : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});