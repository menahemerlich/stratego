import { creatBoard, deployTroops } from "./utils/board.js";
import input from 'analiza-sync';

import { isInBoard, isAssociated, isEmpty, motionLogic, updatePosition } from "./game/motionLogic.js";
import { battle } from "./game/battle.js";
import { turn } from "./game/turn.js";

const board = creatBoard(10)


const displayBoard = creatBoard(10)
const soldiers = [{ rank: 1 , playerName: 'p1'}, { rank: 2, playerName: 'p1' }, 
<<<<<<< HEAD
    { rank: 3, playerName: 'p1' }, { rank: 4, playerName: 'p1' } ,
    { rank: 5, playerName: 'p1' }, { rank: 6, playerName: 'p1' }, 
    { rank: 7, playerName: 'p1' }, { rank: 8, playerName: 'p1' },
    { rank: 9, playerName: 'p1' }, { rank: 'flag', playerName: 'p1' }]

    deployTroops(board, displayBoard, soldiers);
=======
    { rank: 3, playerName: 'p1' }, 
    { rank: 4, playerName: 'p1' },
    { rank: 5, playerName: 'p1' }, { rank: 6, playerName: 'p1' }, 
    { rank: 7, playerName: 'p1' }, { rank: 8, playerName: 'p1' },
    { rank: 9, playerName: 'p1' }, 
    { rank: 'flag', playerName: 'p1' }
]
deployTroops(board, displayBoard, soldiers);
>>>>>>> afae368df4cdd06cbd4d405907841930e0272315
console.log(board);
console.table(displayBoard);
let play = false
let position = []
while (!(play)) {
    while (!(position.length === 2 
        && Number.isInteger(position[0]) 
        && Number.isInteger(position[1]) 
        && isInBoard(board, position) 
        && !(isEmpty(displayBoard, position)))) {
        position = input("Choose a soldier: ").split(' ').map(Number)
    }
    let newPosition =  motionLogic(board, position);
    play = turn(board, displayBoard, position, newPosition)
    
}    

