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

    const bombe = generateBombe();

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

            cella.addEventListener('click', function () {
                this.classList.add("clicked")
            })
        }

    }
}
