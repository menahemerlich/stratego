
export function creatBoard(boardSize = 10, fill = '_') {
    const board = [];
    for (let i = 0; i < boardSize; i++) {
        board.push(Array(boardSize).fill(fill))
    }
    return board
}

export function deployTroops(board, displayBoard, soldiers, ch = 'X', start) {
    let index = null
    while (soldiers.length > 0) {
        for (let row = 0; row < 4; row++) {
            for (let i = 0; i < board.length; i++) {
                index = Math.floor(Math.random() * board.length)                
                if (board[start - row][index] == '_') {
                    let soldier = soldiers.pop()
                    board[start - row][index] = soldier
                    if (soldier.playerName === 'p1'){
                        displayBoard[start - row][index] = ch
                    }else{
                        displayBoard[start - row][index] = soldier.rank
                    }
                }
            }
        }
    }   
}
