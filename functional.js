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


function discountApply(){

    const couponCode = document.getElementById('coupon-code');
    const couponCodeText = couponCode.value;

    const applyBtn = document.getElementById('apply-btn');
    const totalPrice = getProductValue('total-price');
    const discount = getProductValue('discount');
    const total = getProductValue('total');
       
    if(couponCodeText === 'SELL200' && totalPrice >= '200'){    
        applyBtn.disabled = false;      
        const getDiscountPrice = totalPrice * 0.2;
        const updateTotalPrice = totalPrice - getDiscountPrice;
        setTextElementValueById('total', updateTotalPrice.toFixed(2));
        setTextElementValueById('discount', getDiscountPrice.toFixed(2));
    }
    else{
        applyBtn.disabled = true;
    }
    
};

function makePurchaseButtonActive(){
    const totalPrice = getProductValue('total-price');
    const makePurchase = document.getElementById('make-purchase');
    
    if(totalPrice > '0'){
        makePurchase.disabled = false;
    }
    else{
        makePurchase.disabled = true;
    }
}

