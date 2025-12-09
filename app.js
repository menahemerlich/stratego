import { creatBoard, deployTroops } from "./utils/board.js";
import input from 'analiza-sync';

import { isInBoard, isAssociated, isEmpty, motionLogic, updatePosition, isMovable} from "./game/motionLogic.js";
import { battle } from "./game/battle.js";
import { turn } from "./game/turn.js";
import { creatSoldiersList, shuffle , soldersAmout} from "./utils/solders.js";

const board = creatBoard(10)
const displayBoard = creatBoard(10)

const soldiersP = shuffle(creatSoldiersList(soldersAmout, 'p1'))
const soldiersAI = shuffle(creatSoldiersList(soldersAmout, 'AI'))

deployTroops(board, displayBoard, soldiersP, 'X', board.length - 1);
deployTroops(board, displayBoard, soldiersAI, 'O', 3);
console.log(board);
console.table(displayBoard);
let play = false
let position = []
while (!(play)) {
    while (!(position.length === 2 
        && Number.isInteger(position[0]) 
        && Number.isInteger(position[1]) 
        && isInBoard(board, position) 
        && !(isEmpty(displayBoard, position))
        && (isMovable(board, position)))) {
            
        position = input("Choose a soldier: ").split(' ').map(Number)
    }
    let newPosition =  motionLogic(board, position);
    if (newPosition != 0) {
        
        play = turn(board, displayBoard, position, newPosition)
    }else{position = []} 
}  

