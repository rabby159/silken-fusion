// get product value and replace parseFloat
function getProductValue(textId){
    const inputText = document.getElementById(textId);
    const inputTextString = inputText.innerText;
    const givenInputText = parseFloat(inputTextString);
    return givenInputText;
};

// set product name and value
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
};


// add product name nad item number in cart
function addProductName(name){
    const productName = document.getElementById('product-name');

    const count = productName.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${name} `;
    productName.appendChild(p)
};


// apply coupon condition and set total and discount value
document.getElementById('apply-btn').addEventListener('click', function(){
        const couponCode = document.getElementById('coupon-code');
        const couponCodeText = couponCode.value;
        if(couponCodeText === 'SELL200'){
            const totalPrice = getProductValue('total-price');
            const getDiscountPrice = totalPrice * 0.2;
            const updateTotalPrice = totalPrice - getDiscountPrice;
            setTextElementValueById('total', updateTotalPrice.toFixed(2));
            setTextElementValueById('discount', getDiscountPrice.toFixed(2));
        }
        else{
            alert('Please provide valid coupon code');
        }
})

// apply button enable condition 
function makePurchaseButtonActive(){
    const totalPrice = getProductValue('total-price');
    const makePurchase = document.getElementById('make-purchase');
    const applyBtn = document.getElementById('apply-btn');
    
    if(totalPrice > '0'){
        makePurchase.disabled = false;
    }
    else{
        makePurchase.disabled = true;
    }
    if(totalPrice >= '200'){
        applyBtn.disabled = false;
    }
    else{
        applyBtn.disabled = true;
    }
};

// modal go home button with reload website 
document.getElementById('go-home').addEventListener('click',function(){
    window.location.reload();
})

