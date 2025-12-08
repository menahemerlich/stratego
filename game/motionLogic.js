import input from 'analiza-sync';

export function isInBoard(board, position) {
    if (board[position[0]] && board[position[0]][position[1]]) {
        return true
    }
    return false
}

export function isEmpty(board, position) {
    if (board[position[0]] && board[position[0]][position[1]] === '_') {
        return true
    }
    return false
}

export function isAssociated(board, position, option) {
    if (board[position[0]] && board[option[0]] && board[option[0]][option[1]] === '_') {
        return true
    } else if (board[position[0]] && board[option[0]] && board[position[0]][position[1]].playerName != board[option[0]][option[1]].playerName) {
        return true
    }
    return false
}

export function motionLogic(board, position) {
    const options = [[position[0], position[1] + 1], [position[0], position[1] - 1], [position[0] + 1, position[1]], [position[0] - 1, position[1]]]
    let motuonOptions = []
    for (const option of options) {
        if (isInBoard(board, option) && isAssociated(board, position, option)) {
            motuonOptions.push(option)
        }
    } console.log('Motuon Options:');
    for (let i = 0; i < motuonOptions.length; i++) {
        console.log(`${i + 1}: ${motuonOptions[i]}`);
    }
    let choice = input('Your choice: ')
    return motuonOptions[choice - 1]
}

export function updatePosition(board, position, newPosition) {
    let soldier = board[position[0]][position[1]]
    console.log(soldier);
    
    board[position[0]][position[1]] = '_'
    board[newPosition[0]][[newPosition[1]]] = soldier
}





