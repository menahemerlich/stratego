import { creatBoard, deployTroops } from "./utils/board.js";
import { creatSoldiersList, shuffle , soldersAmout} from "./utils/solders.js";
import { playRun } from "./game/play.js";

const board = creatBoard(10)
const displayBoard = creatBoard(10)

const soldiersP = shuffle(creatSoldiersList(soldersAmout, 'p1'))
const soldiersAI = shuffle(creatSoldiersList(soldersAmout, 'AI'))

deployTroops(board, displayBoard, soldiersP, 'X', board.length - 1);
deployTroops(board, displayBoard, soldiersAI, '⭕', 3);
console.table(board);
console.table(displayBoard);
let win = false
let position = []
while (!(win)) {
    win = playRun(board, displayBoard, position, 'p1')
    console.log(win);
    
    win = playRun(board, displayBoard, position, 'AI')
}  console.log(win);

