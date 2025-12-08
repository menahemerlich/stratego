
export function creatBoard(boardSize = 10, fill = '_') {
    const board = [];
    for (let i = 0; i < boardSize; i++) {
        board.push(Array(boardSize).fill(fill))
    }
    return board
}

export function deployTroops(board, displayBoard, soldiers) {
    let index = null
    while (soldiers.length > 0) {
        for (let i = 0; i < board.length; i++) {
            index = Math.floor(Math.random() * board.length)
            if (board[board.length -1][index] == '_') {
                board[board.length -1][index] = soldiers.pop();
                displayBoard[board.length -1][index] = 'X'
            }
        }
    }
    index = Math.floor(Math.random() * board.length)
    let soldier = Math.floor(Math.random() * 8) + 1
    board[0][index] = soldier
    displayBoard[0][index] = soldier
}
