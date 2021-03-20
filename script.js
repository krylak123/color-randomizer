//pobranie h1 i zawinięcie każdej litery z osobna w spana
const title = document.querySelector('.header__title');
title.innerHTML = title.textContent.replace(/\S/g, `<span>$&</span>`);

//pobranie owinietych spanami liter z h1
const titleLetters = [...document.querySelectorAll('.header__title span')];

//funkcja losująca kolory w systemie szesnastkowym
const colorRandom = () => {
    const colors = `0123456789abcdef`;
    let color = ``;
    for (let i = 0; i < 6; i++) {
        const number = Math.floor(Math.random() * colors.length);
        color += colors[number];
    }
    return color;
}

//pętla kolorująca litery h1
titleLetters.forEach(letter => {
    letter.style.color = `#${colorRandom()}`;
    letter.style.textShadow = `0 0 2px #000`;
})

//pętla tworząca divy
for (let i = 0; i < 15; i++) {
    const divElement = document.createElement('div');
    const color = colorRandom()
    divElement.style.backgroundColor = `#${color}`;
    divElement.textContent = `#${color}`
    document.querySelector('.color-board').appendChild(divElement)
}

const divsColor = () => {
    const divs = document.querySelectorAll('.color-board div')
    divs.forEach(item => {
        const color = colorRandom()
        item.style.backgroundColor = `#${color}`;
        item.textContent = `#${color}`
    })
}

document.querySelector('.header__btn').addEventListener('click', divsColor)