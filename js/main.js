const classNames = {
    cell: 'cell',
    cellContent: 'cellContent',
    populated: 'populated'
}

const user = {
    x: 'X',
    o: 'O'
}

const winningResult = {
    0: [[1,2],[3,6],[4,8]],
    1: [[0,2],[4,7]],
    2: [[0,1],[5,8],[4,6]],
    3: [[0,6],[4,5]],
    4: [[3,5],[1,7],[0,8]],
    5: [[3,4],[2,8]],
    6: [[7,8],[0,3],[2,4]],
    7: [[6,8],[1,4]],
    8: [[6,7],[2,5],[0,4]]

}

let cellValues = ['', '', '', '', '', '', '', '', '']
let xNext = true
let winnerUser;

const cell = document.querySelectorAll(`.${classNames.cell}`)

const calculateWinner = (chosenIndex) => {
    const winningRanges = winningResult[chosenIndex]

    for(let i = 0; i <winningRanges.length;i++){
        const currentEntry = cellValues[chosenIndex]
        const firstOption = cellValues[winningRanges[i][0]]
        const secondOption = cellValues[winningRanges[i][1]]

        if(currentEntry === firstOption && firstOption === secondOption){
            winnerUser = currentEntry
            alert('Winner')
            return true
        }
    }
    return false
}

cell.forEach((c,i) => {
    c.addEventListener('click', () =>{

        if(!cellValues[i]){
            cellValues[i] = xNext ? user.x : user.o;
            xNext = !xNext

            const cellContent = c.querySelector(`.${classNames.cellContent}`)
            cellContent.innerHTML = cellValues[i];
            cellContent.classList.add(classNames.populated)
        }
    })
})