function getProductValue(textId){
    const inputText = document.getElementById(textId);
    const inputTextString = inputText.innerText;
    const givenInputText = parseFloat(inputTextString);
    return givenInputText;
};

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
};

function addProductName(name){
    const productName = document.getElementById('product-name');

    const count = productName.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${name} `;
    productName.appendChild(p)
};


document.getElementById('coupon-code').addEventListener('keyup', function(){
    const couponCode = document.getElementById('coupon-code');
    const couponCodeText = couponCode.value;
    
    const totalPrice = getProductValue('total-price');
    
    const applyBtn = document.getElementById('apply-btn');

    if(couponCodeText === 'SELL200' && totalPrice >= '200'){
        applyBtn.disabled = false; 
    }
    else{
        applyBtn.disabled = true;
    }
})

document.getElementById('apply-btn').addEventListener('click', function(){
        const totalPrice = getProductValue('total-price');
        const getDiscountPrice = totalPrice * 0.2;
        const updateTotalPrice = totalPrice - getDiscountPrice;
        setTextElementValueById('total', updateTotalPrice.toFixed(2));
        setTextElementValueById('discount', getDiscountPrice.toFixed(2));
})

function makePurchaseButtonActive(){
    const totalPrice = getProductValue('total-price');
    const makePurchase = document.getElementById('make-purchase');
    
    if(totalPrice > '0'){
        makePurchase.disabled = false;
    }
    else{
        makePurchase.disabled = true;
    }
};
