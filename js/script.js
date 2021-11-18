document.getElementById('play').addEventListener('click', function () {
    play()
})

function play() {

    document.querySelector('.container').innerHTML = '';

    const levelSelected = parseInt(document.getElementById('level').value);
    console.log(levelSelected);

    let cellsNumber, cellForSide;
    const bombeNumber = 16;

    switch (levelSelected) {
        case 1:
            cellsNumber = 100;
            cellForSide = 10;
            break;
        case 2:
            cellsNumber = 81;
            cellForSide = 9;
            break;
        case 3:
            cellsNumber = 49;
            cellForSide = 7;
    }



    function generateBombe() {
        const arraybombe = [];

        while (arraybombe.length < bombeNumber) {
            const numeroRandom = Math.floor((Math.random() * cellsNumber) + 1);
            if (!arraybombe.includes(numeroRandom)) {
                arraybombe.push(numeroRandom);
            }
        }
        return arraybombe;


    }


    function inserisciBombe() {
        const quadratiArray = document.getElementsByClassName("square");
        const bombe = generateBombe();
        console.log(bombe);
        for (let i = 0; i < bombe.length; i++) {
            const bomba = bombe[i];
            console.log(bomba);
            quadratiArray[bomba].classList.add("bomb");

        }
    }

    function clickQuadrato() {
        const quadratiArray = document.getElementsByClassName("square");
        for (let i = 0; i < quadratiArray.length; i++) {
            quadratiArray[i].addEventListener('click', function () {
                if (this.classList.contains('bomb')) {
                    this.classList.add("clicked-gameover");
                } else {
                    this.classList.add("clicked");
                }
            })
        }

    }

    generatePlaygorund();
    function generatePlaygorund() {

        const box = document.querySelector(".container");
        const size = `calc(100% / ${cellForSide}) `;

        for (let i = 1; i <= cellsNumber; i++) {
            const cella = document.createElement('div');
            cella.classList.add('square');
            cella.innerHTML = i;
            cella.style.width = size;
            cella.style.height = size;
            box.appendChild(cella);
        }
        inserisciBombe();
        clickQuadrato();

    }

}