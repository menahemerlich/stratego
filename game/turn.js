import {motionLogic,updatePosition} from "../game/motionLogic.js"
import {battle} from "../game/battle.js"
import input from "analiza-sync";
import {creatBoard} from "../utils/board.js"



function turn(board){
    // display(board)
    position = input("Choose a soldier")
    let choice = motionLogic(board,position)
    if(!(isempty(board,choice))){
    let decision = battle(board,position,choice)
    if (decision == "a"){
        updatePosition(board,position,choice)
    }else if(decision == "b"){
        board[position[0]][position[1]] = '_'
    }else if(decision == "draw"){
        board[position[0]][position[1]] = '_'
        board[choice[0]][choice[1]] = '_'
    }else{
        return false
    }
    // display(board)
    }
}
turn(creatBoard())