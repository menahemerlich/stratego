
export function battle(board,position,newPosition){
    if(board[position[0]][position[1]].rank == 9 && board[newPosition[0]][newPosition[1]].rank == 1){
        console.log(`rank ${board[position[0]][position[1]].playerName}: ${board[position[0]][position[1]].rank}`);
        console.log(`rank ${board[newPosition[0]][newPosition[1]].playerName}: ${board[newPosition[0]][newPosition[1]].rank}`);
        console.log(`${board[newPosition[0]][newPosition[1]].playerName} (${board[newPosition[0]][newPosition[1]].rank}) win ${board[position[0]][position[1]].playerName} (${board[position[0]][position[1]].rank})`);
        return "b"

    }else if( board[newPosition[0]][newPosition[1]].rank == 9 && board[position[0]][position[1]].rank == 1){
        console.log(`rank ${board[position[0]][position[1]].playerName}: ${board[position[0]][position[1]].rank}`);
        console.log(`rank ${board[newPosition[0]][newPosition[1]].playerName}: ${board[newPosition[0]][newPosition[1]].rank}`);
        console.log(`${board[position[0]][position[1]].playerName} (${board[position[0]][position[1]].rank}) win ${board[newPosition[0]][newPosition[1]].playerName} (${board[newPosition[0]][newPosition[1]].rank})`);
        return "a"

    }else if(board[position[0]][position[1]].rank > board[newPosition[0]][newPosition[1]].rank){
        console.log(`rank ${board[position[0]][position[1]].playerName}: ${board[position[0]][position[1]].rank}`);
        console.log(`rank ${board[newPosition[0]][newPosition[1]].playerName}: ${board[newPosition[0]][newPosition[1]].rank}`);
        console.log(`${board[position[0]][position[1]].playerName} (${board[position[0]][position[1]].rank}) win ${board[newPosition[0]][newPosition[1]].playerName} (${board[newPosition[0]][newPosition[1]].rank})`);
        return "a"

    }else if(board[newPosition[0]][newPosition[1]].rank > board[position[0]][position[1]].rank){
        console.log(`rank ${board[position[0]][position[1]].playerName}: ${board[position[0]][position[1]].rank}`);
        console.log(`rank ${board[newPosition[0]][newPosition[1]].playerName}: ${board[newPosition[0]][newPosition[1]].rank}`);
        console.log(`${board[newPosition[0]][newPosition[1]].playerName} (${board[newPosition[0]][newPosition[1]].rank}) win ${board[position[0]][position[1]].playerName} (${board[position[0]][position[1]].rank})`);
        return "b"

    }else if(board[newPosition[0]][newPosition[1]].rank == "flag"){
        console.log(`rank ${board[position[0]][position[1]].playerName}: ${board[position[0]][position[1]].rank}`);
        console.log(`rank ${board[newPosition[0]][newPosition[1]].playerName}: ${board[newPosition[0]][newPosition[1]].rank}`);
        console.log(`${board[position[0]][position[1]].playerName} (${board[position[0]][position[1]].rank}) is the winner!!`);
        return "win" 

    }else{
        console.log(`rank ${board[position[0]][position[1]].playerName}: ${board[position[0]][position[1]].rank}`);
        console.log(`rank ${board[newPosition[0]][newPosition[1]].playerName}: ${board[newPosition[0]][newPosition[1]].rank}`);
        console.log(`Draw, both soldiers died. `);
        
        return "draw"
    }
    }
