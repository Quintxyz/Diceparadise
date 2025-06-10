const sImage = document.getElementById('showImage');
const sText = document.getElementById('showText');
const brand = document.getElementById('brandom');
const brese = document.getElementById('breset');

const choice = ['1', '2', '3', '4', '5', '6'];

const ctranslate = {
    '1': 'หนึ่ง',
    '2': 'สอง',
    '3': 'สาม',
    '4': 'สี่',
    '5': 'ห้า',
    '6': 'หก'
};

function getRandomChoice(){
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

brand.addEventListener('click', function(){
    const myChoice = getRandomChoice();
    const ChoiceT = ctranslate[myChoice];
    sImage.src = 'img/' + myChoice + '.png';
    sText.innerHTML = 'ได้ลูกเต๋า: ' + ChoiceT;

    brand.style.display = 'inline';
    brese.style.display = 'inline';
});

brese.addEventListener('click', function(){
    sImage.src = 'img/dice.png';
    sText.innerHTML = 'กดปุ่ม "กดเพื่อทอย" เพื่อเริ่มใหม่';

    brand.style.display = 'inline';
    brese.style.display = 'inline';
});