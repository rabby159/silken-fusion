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