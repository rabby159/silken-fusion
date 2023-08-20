// calculation total price and called need function 
function accessoriesPart1(){

    const kPart1Price = getProductValue('kpart-1-price');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + kPart1Price;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('K.Accessories Pack 1');
    makePurchaseButtonActive();
};

// calculation total price and called need function 
function accessoriesPart2(){

    const kPart2Price = getProductValue('kpart-2-price');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + kPart2Price;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    
    addProductName('K.Accessories Pack 2');
    makePurchaseButtonActive();
};

// calculation total price and called need function 
function homeCooker(){

    const homeCookerPrice = getProductValue('home-cooker-price');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + homeCookerPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))


    addProductName('Home Cooker');

    makePurchaseButtonActive();
};

// calculation total price and called need function 
function sportsBackCap(){

    const sportsBackCapPrice = getProductValue('sports-Back-Cap-price');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + sportsBackCapPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Sports Back Cap');

    makePurchaseButtonActive();
};

// calculation total price and called need function 
function fullJerseySets(){

    const fullJerseySetsPrice = getProductValue('full-jersey-sets');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + fullJerseySetsPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Full Jersey Sets');
    makePurchaseButtonActive();
};

// calculation total price and called need function 
function sportsCates(){

    const sportsCatesPrice = getProductValue('sports-cates');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + sportsCatesPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Sports cates');
    makePurchaseButtonActive();
};

// calculation total price and called need function 
function singleRelaxChair(){

    const singleRelaxChairPrice = getProductValue('single-relax-chair');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + singleRelaxChairPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Single Relax Chair');
    makePurchaseButtonActive();
};

// calculation total price and called need function 
function childrenPlay(){

    const childrenPlayPrice = getProductValue('children-play');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + childrenPlayPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Children play');
    makePurchaseButtonActive();
};

// calculation total price and called need function 
function flexibleSofa(){

    const flexibleSofaPrice = getProductValue('flexible-sofa');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + flexibleSofaPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Flexible Sofa');
    makePurchaseButtonActive();
};

