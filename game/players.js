function CreatPlayers(name){
let player_a = {"name" : name}
let player_b = {"name":"ai"}
return {player_a ,player_b}
}
let players=CreatPlayers("david")
console.log(players);


