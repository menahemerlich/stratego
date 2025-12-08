import { creatBoard, deployTroops } from "./utils/board.js";
import input from 'analiza-sync';

import { isInBoard, isAssociated, isEmpty, motionLogic, updatePosition } from "./game/motionLogic.js";
import { battle } from "./game/battle.js";
import { turn } from "./game/turn.js";

const board = creatBoard(4)


const displayBoard = creatBoard(4)
const soldiers = [{ rank: 1 , playerName: 'p1'}, { rank: 2, playerName: 'p1' }, 
    { rank: 3, playerName: 'p1' }, { rank: 4, playerName: 'p1' } 
    // { rank: 5, playerName: 'p1' }, { rank: 6, playerName: 'p1' }, 
    // { rank: 7, playerName: 'p1' }, { rank: 8, playerName: 'p1' },
    // { rank: 9, playerName: 'p1' }, { rank: 'flag', playerName: 'p1' }
    ]
    deployTroops(board, displayBoard, soldiers);
console.table(board);
console.table(displayBoard);
while (true) {
    
    let position = input("Choose a soldier: ").split(' ').map(Number)
    let newPosition =  motionLogic(board, position);
    turn(board, displayBoard, position, newPosition)
}    

