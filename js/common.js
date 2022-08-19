function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);

    setTextElementValueById('total-price', finalAmount);
       
}


document.getElementById('discount-field').addEventListener('keyup', function(event){
    const discountText = event.target.value;
    console.log(discountText);
    discountButton = document.getElementById('discount-btn');
    if(discountText === 'discount'){
        discountButton.removeAttribute('disabled');
    }
    else{
        discountButton.setAttribute('disabled',true);
    }
    discountButton.addEventListener('click', function(){
        const totalPrice = document.getElementById('total-price').innerText;
        const discountPrice = totalPrice * 0.8;
        document.getElementById('discount-price').innerText = '$'+discountPrice;
    });
});

