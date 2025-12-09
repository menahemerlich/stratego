import { creatBoard, deployTroops } from "./utils/board.js";
import input from 'analiza-sync';

import { isInBoard, isAssociated, isEmpty, motionLogic, updatePosition, isMovable} from "./game/motionLogic.js";
import { battle } from "./game/battle.js";
import { turn } from "./game/turn.js";

const board = creatBoard(10)


const displayBoard = creatBoard(10)
const soldiersP = [
    { rank: 1 , playerName: 'p1'}, 
    { rank: 2, playerName: 'p1' }, 
    { rank: 3, playerName: 'p1' }, 
    { rank: 4, playerName: 'p1' },
    { rank: 5, playerName: 'p1' }, 
    { rank: 6, playerName: 'p1' }, 
    { rank: 7, playerName: 'p1' }, 
    { rank: 8, playerName: 'p1' },
    { rank: 9, playerName: 'p1' }, 
    { rank: 'flag', playerName: 'p1' },
    { rank: 31 , playerName: 'p1'}, 
    { rank: 32, playerName: 'p1' }, 
    { rank: 33, playerName: 'p1' }, 
    { rank: 34, playerName: 'p1' },
    { rank: 35, playerName: 'p1' }, 
    { rank: 36, playerName: 'p1' }, 
    { rank: 37, playerName: 'p1' }, 
    { rank: 38, playerName: 'p1' },
    { rank: 39, playerName: 'p1' }, 
    { rank: '3flag', playerName: 'p1' },
    { rank: 11 , playerName: 'p1'}, 
    { rank: 12, playerName: 'p1' }, 
    { rank: 13, playerName: 'p1' }, 
    { rank: 14, playerName: 'p1' },
    { rank: 15, playerName: 'p1' }, 
    { rank: 16, playerName: 'p1' }, 
    { rank: 17, playerName: 'p1' }, 
    { rank: 18, playerName: 'p1' },
    { rank: 19, playerName: 'p1' }, 
    { rank: '1flag', playerName: 'p1' },
    { rank: 21 , playerName: 'p1'}, 
    { rank: 22, playerName: 'p1' }, 
    { rank: 23, playerName: 'p1' }, 
    { rank: 24, playerName: 'p1' },
    { rank: 25, playerName: 'p1' }, 
    { rank: 26, playerName: 'p1' }, 
    { rank: 27, playerName: 'p1' }, 
    { rank: 28, playerName: 'p1' },
    { rank: 29, playerName: 'p1' }, 
    { rank: '2flag', playerName: 'p1' }
]

const soldiersAI = [
    { rank: 1 , playerName: 'p2'}, 
    { rank: 2, playerName: 'p2' }, 
    { rank: 3, playerName: 'p2' }, 
    { rank: 4, playerName: 'p2' },
    { rank: 5, playerName: 'p2' }, 
    { rank: 6, playerName: 'p2' }, 
    { rank: 7, playerName: 'p2' }, 
    { rank: 8, playerName: 'p2' },
    { rank: 'boom', playerName: 'p2' }, 
    { rank: 'flag', playerName: 'p2' },
    { rank: 31 , playerName: 'p2'}, 
    { rank: 32, playerName: 'p2' }, 
    { rank: 33, playerName: 'p2' }, 
    { rank: 34, playerName: 'p2' },
    { rank: 35, playerName: 'p2' }, 
    { rank: 36, playerName: 'p2' }, 
    { rank: 37, playerName: 'p2' }, 
    { rank: 38, playerName: 'p2' },
    { rank: 39, playerName: 'p2' }, 
    { rank: '3flag', playerName: 'p2' },
    { rank: 11 , playerName: 'p2'}, 
    { rank: 12, playerName: 'p2' }, 
    { rank: 13, playerName: 'p2' }, 
    { rank: 14, playerName: 'p2' },
    { rank: 15, playerName: 'p2' }, 
    { rank: 16, playerName: 'p2' }, 
    { rank: 17, playerName: 'p2' }, 
    { rank: 18, playerName: 'p2' },
    { rank: 19, playerName: 'p2' }, 
    { rank: '1flag', playerName: 'p2' },
    { rank: 21 , playerName: 'p2'}, 
    { rank: 22, playerName: 'p2' }, 
    { rank: 23, playerName: 'p2' }, 
    { rank: 24, playerName: 'p2' },
    { rank: 25, playerName: 'p2' }, 
    { rank: 26, playerName: 'p2' }, 
    { rank: 27, playerName: 'p2' }, 
    { rank: 28, playerName: 'p2' },
    { rank: 29, playerName: 'p2' }, 
    { rank: '2flag', playerName: 'p2' }
]


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

