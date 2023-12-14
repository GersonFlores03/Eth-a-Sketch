const gridContainer = document.querySelector('.grid')
const removeDatos = document.querySelector('.remove')
const spacing = document.querySelector('.data')
const txtNumber = document.querySelector('.counter_number')
const colorBoton = document.querySelector('.ColorButton')

let widthContainer = 637
let counterClicks = 0
let resultado;
//637

const colorsArray = ["#F8F226", '#F8B826', '#26F8B5', '#9526F8', '#26E8F8']
const ramdonColor = colorsArray[(Math.random() * colorsArray.length) | 0]

function createDiv(size) {
    const div = document.createElement('div')
    div.classList.add('box')
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    return div
}
spacing.addEventListener('click', () => {
    resultado = parseInt(prompt("Ingrese un rango de 0 al 30"))
    if (!isNaN(resultado) && resultado >= 0 && resultado <= 30) {
        lopGrid(resultado)
        setInterval(() => { window.scrollBy(0, 1) }, 10)
        txtNumber.textContent = `${resultado} x ${resultado}`

        if (counterClicks === counterClicks) {
            Removebox();
            ClickMouse();
            lopGrid(resultado);
            txtNumber.textContent = `${resultado} x ${resultado}`
        }

    } else {
        setInterval(() => { window.scrollBy(0, -5) }, 10)
        alert("Rango no valido")
    }
    counterClicks++

})





function lopGrid(resultados) {
    for (let i = 1; i < resultados; i++) {
        for (let j = 1; j < resultados; j++) {
            gridContainer.appendChild(createDiv((widthContainer / resultados)))
        }
    }
}


removeDatos.addEventListener("click", () => {
    alert("Caja vacia")
    Removebox()

})


function Removebox() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }
}


function ClickMouse() {
    gridContainer.addEventListener('mouseover', function (e) {

        if (e.target.matches('.box')) {
            e.target.style.backgroundColor = `${ramdonColor}`;

        }


    });




}




gridContainer.addEventListener('click', () => ClickMouse())





