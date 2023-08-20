function accessoriesPart1(){

    const kPart1Price = getProductValue('kpart-1-price');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + kPart1Price;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('K.Accessories Package 1');
    makePurchaseButtonActive();
};

function accessoriesPart2(){

    const kPart2Price = getProductValue('kpart-2-price');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + kPart2Price;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    
    addProductName('K.Accessories Package 2');
    makePurchaseButtonActive();
};

function homeCooker(){

    const homeCookerPrice = getProductValue('home-cooker-price');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + homeCookerPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))


    addProductName('Home Cooker');

    makePurchaseButtonActive();
};

function sportsBackCap(){

    const sportsBackCapPrice = getProductValue('sports-Back-Cap-price');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + sportsBackCapPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Sports Back Cap');

    makePurchaseButtonActive();
};

function fullJerseySets(){

    const fullJerseySetsPrice = getProductValue('full-jersey-sets');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + fullJerseySetsPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Full Jersey Sets');
    makePurchaseButtonActive();
};

function sportsCates(){

    const sportsCatesPrice = getProductValue('sports-cates');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + sportsCatesPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Sports cates');
    makePurchaseButtonActive();
};

function singleRelaxChair(){

    const singleRelaxChairPrice = getProductValue('single-relax-chair');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + singleRelaxChairPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Single Relax Chair');
    makePurchaseButtonActive();
};

function childrenPlay(){

    const childrenPlayPrice = getProductValue('children-play');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + childrenPlayPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Children play');
    makePurchaseButtonActive();
};

function flexibleSofa(){

    const flexibleSofaPrice = getProductValue('flexible-sofa');

    const lastTotalPrice = getProductValue('total-price')

    const totalPrice = lastTotalPrice + flexibleSofaPrice;
    setTextElementValueById('total-price', totalPrice.toFixed(2))

    addProductName('Flexible Sofa');
    makePurchaseButtonActive();
};

