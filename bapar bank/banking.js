// document.getElementById('deposit-button').addEventListener('click', function(){
//    const depositInput = document.getElementById('deposit-input');
//    const getDepositInputValue = depositInput.value;
//    previousValueInput = parseFloat(getDepositInputValue);

//    const depositTotal = document.getElementById('deposit-total');
//    const getDeposiTotalValue = depositTotal.innerText;
//    previousValueTotal = parseFloat(getDeposiTotalValue);
// depositTotal.innerText = previousValueInput + previousValueTotal; 
// depositInput.value = '';

    
    
    
// const blanceTotal = document.getElementById('balance-total');
// const getBlanceTotal = blanceTotal.innerText;
// previousgetBlanceTotal = parseFloat(getBlanceTotal);

// blanceTotal.innerText = previousgetBlanceTotal + previousValueInput;

// })

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    previouswithdrawInputValue = parseFloat(withdrawInputValue);

   const withdrawTotal = document.getElementById('withdraw-total');
   const withdrawTotalValue = withdrawTotal.innerText;
   previouswithdrawTotalValue = parseFloat(withdrawTotalValue);

   withdrawTotal.innerText = previouswithdrawInputValue + previouswithdrawTotalValue; 
   withdrawInput.value = '';

 const blanceTotal = document.getElementById('balance-total');
 const getBlanceTotal = blanceTotal.innerText;
 previousgetBlanceTotal = parseFloat(getBlanceTotal);

 blanceTotal.innerText = previousgetBlanceTotal - previouswithdrawInputValue;

 

})