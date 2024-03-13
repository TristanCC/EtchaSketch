
const container = document.querySelector(".container")
function generateGrid(input) {
    const container = document.querySelector(".container")
    for (i=0; i<input; i++) {
        let columns = document.createElement('div')
        columns.className = "column"
        container.appendChild(columns)
    }
    
    const columns = document.querySelectorAll(".column")
    columns.forEach((column) => {
        for (i=0; i<input; i++) {
            let square = document.createElement('div')
            square.className = 'squares'
            column.appendChild(square)
        }
    })
    
    const squares = document.querySelectorAll('.squares')
    
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            square.classList.add('hover')
        })
    })


}

generateGrid(16)
const button = document.querySelector('button')
button.addEventListener('click', (e) => {
const input = window.prompt("Input your desired number of squares per row: " ,"16")
container.innerHTML = ''
generateGrid(input)
})
