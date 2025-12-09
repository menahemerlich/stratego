import { creatBoard, deployTroops } from "./utils/board.js";
import input from 'analiza-sync';
import { isInBoard, isAssociated, isEmpty, motionLogic, updatePosition, isMovable} from "./game/motionLogic.js";
import { turn } from "./game/turn.js";
import { creatSoldiersList, shuffle , soldersAmout} from "./utils/solders.js";

const board = creatBoard(10)
const displayBoard = creatBoard(10)

const soldiersP = shuffle(creatSoldiersList(soldersAmout, 'p1'))
const soldiersAI = shuffle(creatSoldiersList(soldersAmout, 'AI'))

deployTroops(board, displayBoard, soldiersP, 'X', board.length - 1);
deployTroops(board, displayBoard, soldiersAI, 'O', 3);


function play1(board, displayBoard, position, playerName){
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
            
            position = input("Choose a soldier: ").split(' ').map(Number)
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

function playAI(board, displayBoard, position, playerName){
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
            
            position = [Math.floor(Math.random() * board.length) - 1, Math.floor(Math.random() * board.length) - 1]
        }
        
        if (board[position[0]][position[1]].playerName == playerName) {
            
            
            let newPosition =  motionLogic(board, position);
            if (newPosition != 0) {
                
                play = turn(board, displayBoard, position, newPosition)
                flag = false
            }else{position = []} 
        }else{position = []} 
    }
}

console.table(displayBoard);
let play = false
let position = []
while (!(play)) {
    let p1 = play1(board, displayBoard, position, 'p1')

    let AI = playAI(board, displayBoard, position, 'AI')
    

}  

