export function battle(board,Soldier_a,Soldier_b){
    if(board[Soldier_a].rank == 9 && board[Soldier_b].rank == 1){
        console.log(board[Soldier_b].playername ,board[Soldier_b].rank ,"win" ,board[Soldier_a].playername ,board[Soldier_a].rank);
        return "b"

    }else if( board[Soldier_b].rank == 9 && board[Soldier_a].rank == 1){
            console.log(board[Soldier_a].playername ,board[Soldier_a].rank ,"win",board[Soldier_b].playername ,board[Soldier_b].rank);
        return "a"

    }else if(board[Soldier_a].rank > board[Soldier_b].rank){
            console.log(board[Soldier_a].playername ,board[Soldier_a].rank ,"win" ,board[Soldier_b].playername ,board[Soldier_b].rank);
        return "a"

    }else if(board[Soldier_b].rank > board[Soldier_a].rank){
        console.log(board[Soldier_b].playername ,board[Soldier_b].rank ,"win" ,board[Soldier_a].playername ,board[Soldier_a].rank);
        return "b"

    }else if(board[Soldier_b].rank == "flag"){
        console.log(board[Soldier_a].playername ,board[Soldier_a].rank ,"winner" ,board[Soldier_b].playername ,board[Soldier_b].rank);
        return "win" 

    }else{
        return "draw"
    }
    }
    