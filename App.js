const billInput=document.querySelector('.bill-input');
const tip=document.getElementById('tip-amount');
const totalTip=document.getElementById('total-amount');
const tips=document.querySelectorAll('.tips');
const tipCustom=document.querySelector(".tip-custom");
const resetBtn=document.querySelector(".reset");




billInput.addEventListener("input",billInputFun);
tips.forEach(function(val){
    val.addEventListener('click',handleClick)
});

tipCustom.addEventListener("input", tipInputFun);
resetBtn.addEventListener("click", reset);


billInput.value= (0.0);
tip.innerHTML="$ "+(0.0).toFixed(2);
totalTip.innerHTML="$ "+(0.0).toFixed(2);

let billValue=0.0;
let tipValue=0.15;

function billInputFun(){
    billValue=parseFloat(billInput.value);
    calculateTip();
    
}
function tipInputFun(){
    tipValue=parseFloat(tipCustom.value/100);
    tips.forEach(function(val){
        val.classList.remove("active-tip");
    })
calculateTip();
}





function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip");
        if(event.target.innerHTML==val.innerHTML){
            val.classList.add("active-tip");
            tipValue=parseFloat(val.innerHTML)/100;
        }
    });
    calculateTip();
    
}


function calculateTip(){
    let tipAmount=(billValue*tipValue);
    let total=(billValue+tipAmount);
    tip.innerHTML="$ "+tipAmount.toFixed(2);
    totalTip.innerHTML="$ "+total.toFixed(2);
}

function reset(){
    billInput.value="0";
    billInputFun();
    tipCustom.value="";
    }
