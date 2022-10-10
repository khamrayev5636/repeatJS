

// ===================== FizzBuzz ======================

var elForm = document.querySelector(".fizzbuzz__form");
var elInput = elForm.querySelector(".fizzbuzz__input");
var elAlert = document.querySelector(".fizzbuzz__alert");

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();
    
    var elInputValue = Number(elInput.value);
    
    if(elInputValue % 3 == 0 && elInputValue % 5 == 0){
        elAlert.textContent = "FizzBuzz";
        elAlert.classList.add("bg-info");
    }else if(elInputValue % 3 == 0){
        elAlert.textContent = "Fizz";
        elAlert.classList.add("bg-warning")
    }else if(elInputValue % 5 == 0){
        elAlert.textContent = "Buzz"
        elAlert.classList.add("bg-white")
    }else{
        elAlert.textContent = elInputValue + " 3 ga ham 5 ga bo'linmaydi!!!"
        elAlert.classList.add("bg-danger");
    }
    
    elInput.value = "";
    
})




//  =============================== Currency Converter =========================

var elFormCurrency = document.querySelector(".currency__form");
var elInputCurrency = elFormCurrency.querySelector(".currency__input ");
var elSelectCurrency = elFormCurrency.querySelector(".currency__select");
var elAlertCurrency = document.querySelector(".currency-text-js");


elFormCurrency.addEventListener("submit" , function(evt){
    evt.preventDefault();
    
    var elInputCurrencyValue = elInputCurrency.value;
    var elSelectCurrencyValue = elSelectCurrency.value;
    
    elAlertCurrency.textContent = elInputCurrencyValue * elSelectCurrencyValue;
    
    elInputCurrency.value = "";
})


// ================================== Find the Number ==================================


var elFromNumber = document.querySelector(".number__form");
var elInputNumber = elFromNumber.querySelector(".number__input");
var elBtnNumber = elFromNumber.querySelector(".number__btn");
var elCountNumber = document.querySelector(".number__count");
var elResultNumber = document.querySelector(".number__result");
var elTrueNumber = document.querySelector(".number__true");

var x = Math.floor(Math.random() * 100);

var maxAttemptsNumber = 6;

elCountNumber.textContent = `Urinishlar soni: ${maxAttemptsNumber}`

elFromNumber.addEventListener("submit" , function(evt){
    evt.preventDefault();
    
    var elInputNumberValue = elInputNumber.value;
    
    maxAttemptsNumber--;
    
    elCountNumber.textContent = `Urinishlar soni: ${maxAttemptsNumber}`
    
    if(elInputNumberValue > x){
        elResultNumber.textContent = "Kiritilgan raqamingiz x dan katta";
        elResultNumber.classList.add("bg-danger")
    }else if(elInputNumberValue < x){
        elResultNumber.textContent = "Kiritilgan raqamingiz x dan kichik";
        elResultNumber.classList.remove("bg-danger");
        elResultNumber.classList.add("bg-warning")
    }else{
        elResultNumber.textContent = "Urra siz topdingiz!!!";
        elTrueNumber.textContent = `Siz izlagan son: ${x}`;
        elTrueNumber.classList.add("bg-primary");
        elResultNumber.classList.remove("bg-warning");
        elResultNumber.classList.remove("bg-danger");
        elResultNumber.classList.add("bg-success");
        elInputNumber.setAttribute("disabled" , true);
        elBtnNumber.setAttribute("disabled" , true);
    }

    if(maxAttemptsNumber == 0) {
        elCountNumber.textContent = "Urinishlar soni tugadi!!!!";
        elTrueNumber.textContent = `Siz izlagan son: ${x}`;
        elTrueNumber.classList.add("bg-primary");
        elCountNumber.classList.add("bg-danger");
        elCountNumber.classList.add("text-white");
        elInputNumber.setAttribute("disabled" , true);
        elBtnNumber.setAttribute("disabled" , true);
    }
    
    elInputNumber.value = "";
    
})



// ============================= STRING METHOD =======================================


// ========================= 1-Misol ==============

 var elFormString = document.querySelector(".string__form");
 var elInputString = elFormString.querySelector(".string__input");
 var elBtnString = elFormString.querySelector(".string__btn ");

 elFormString.addEventListener("submit" , function(evt){
    evt.preventDefault();

    var elInputStringValue = elInputString.value;

    console.log(elInputStringValue.replaceAll(" " , ""));

    elInputString.value = "";
 })


//  ======================= 2-Misol ======================

var elFormText = document.querySelector(".string__form-textarea");
var elInputText = elFormText.querySelector(".string__form-input ");
var elBtnText = elFormText.querySelector(".btn__textarea");
var elTextarea = elFormText.querySelector(".string__textarea");

elFormText.addEventListener("submit" , function(evt){
    evt.preventDefault();

    var elInputTextValue = elInputText.value;
    var elTextareaValue = elTextarea.value.trim();

    console.log(elTextareaValue.indexOf(elInputTextValue));
    console.log(elTextareaValue.includes(elInputTextValue));


})


// ============================== 3-Misol ==============================

var elFormSlice = document.querySelector(".string__slice");
var elInputFirst = elFormSlice.querySelector(".slice__input-first");
var elInputSecond = elFormSlice.querySelector(".slice__input-second");
var elTextSlice = document.querySelector(".slice__text");
var elBtnSlice = document.querySelector(".slice__btn");


elFormSlice.addEventListener("submit" , function(evt){
    evt.preventDefault();
    
    var elInputFirstValue = elTextSlice.textContent.indexOf(elInputFirst.value.trim()); 
    var elInputSecondValue = elTextSlice.textContent.indexOf(elInputSecond.value.trim());

    console.log(elTextSlice.textContent.slice(elInputFirstValue, elInputSecondValue));
})


// ================================= 4-Miso ====================

var textFirst = "Jamshid";
var textSecond = "Xamrayev";

console.log(textFirst.slice(0 , 3) + textSecond.slice( 5 , 9 ));

// ========================== 5-Misol ===================

var text = "Xamrayev Jamshid"
var text2 = "Jamshid"
console.log(text.includes(text2));