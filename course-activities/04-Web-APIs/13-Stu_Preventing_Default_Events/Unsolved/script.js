var totalBillStr = document.getElementById('totalPriceInput');

var tipPercentageStr = document.getElementById('tipAmountInput');

var submitBtn = document.getElementById('submit');

//console.log(totalBill,tipPercentage);

submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    var totalBill = parseInt(totalBillStr.value, 10);
    var tipPercentage = parseInt(tipPercentageStr.value, 10);
    var tipAmount = (tipPercentage * totalBill)/100;
    document.getElementById('tip-amount').textContent = tipAmount;
    var totalBillWithTip = totalBill + tipAmount;
    document.getElementById('new-total').textContent = totalBillWithTip;
    
    //get split nos
    var splitNumber = +(document.getElementById('split').value) || 1;
    var splitAmount = totalBillWithTip / splitNumber ;
    document.getElementById('split-amount').textContent = splitAmount.toFixed(2);
    
    console.log(tipAmount);
})
