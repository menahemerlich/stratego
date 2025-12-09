import input from 'analiza-sync';
import { isInBoard, isEmpty, motionLogic, isMovable} from './motionLogic.js';
import { turn } from './turn.js';


export function playRun(board, displayBoard, position, playerName, play){
    let flag = true
    console.log(playerName);
    while (flag) {
        while (!(position.length === 2 
            && Number.isInteger(position[0]) 
            && Number.isInteger(position[1]) 
            && isInBoard(board, position) 
            && !(isEmpty(displayBoard, position))
            && (isMovable(board, position)))
        ) {
            if (playerName === 'AI') {
                position = [Math.floor(Math.random() * board.length) - 1, Math.floor(Math.random() * board.length) - 1]

            }else{position = input("Choose a soldier: ").split(' ').map(Number)}
            
        }
        if (board[position[0]][position[1]].playerName == playerName) {
            
            let newPosition =  motionLogic(board, position, playerName);
            if (newPosition != 0) {
                
                play = turn(board, displayBoard, position, newPosition)
                flag = false
            }else{position = []} 
        }else{position = []} 
    }
}