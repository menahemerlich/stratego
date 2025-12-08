import input from 'analiza-sync';
import { isInBoard, isAssociated, isEmpty, motionLogic, updatePosition } from './motionLogic.js';
import { battle } from './battle.js';

export function turn(board, displayBoard, position, newPosition){
    if(!(isEmpty(board,newPosition))){
        let decision = battle(board,position,newPosition)
    if (decision == "a"){
        updatePosition(board,position,newPosition)
        updatePosition(displayBoard,position,newPosition)
    }else if(decision == "b"){
        board[position[0]][position[1]] = '_'
        displayBoard[position[0]][position[1]] = '_'
    }else if(decision == "draw"){
        board[position[0]][position[1]] = '_'
        board[newPosition[0]][newPosition[1]] = '_'
        displayBoard[position[0]][position[1]] = '_'
        displayBoard[newPosition[0]][newPosition[1]] = '_'
    }else if(decision == "win"){
        updatePosition(board,position,newPosition)
        updatePosition(displayBoard,position,newPosition)
        return true
        
    }
    }else{
        updatePosition(board, position, newPosition)
        updatePosition(displayBoard, position, newPosition)
        
    }
    console.table(displayBoard);
    return false
}