
const calc=()=>{

    let amount=document.getElementById("bill-amount").value;
    if(amount=="" ||amount==0){
        alert("You Have Not Mentioned 'Bill Amount'")
    }
    
    let tipPer=document.getElementById("tip-perc").value;
    if(tipPer=="" || tipPer==0){
        confirm("Continue Without giving Any Tip?")
    }

    let tip=amount*( tipPer/100);
    tip=tip.toFixed(2);
    
    let total=Number (tip)+ Number (amount);
    
    


   document.getElementById("tip-amount").value=tip;
   
   

   document.getElementById("total-bill").value=total;

}
