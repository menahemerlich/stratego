export let soldersAmout = [
{ rank: 1, amout: 1 },
{ rank: 2, amout: 8 },
{ rank: 3, amout: 5 },
{ rank: 4, amout: 4 },
{ rank: 5, amout: 4 },
{ rank: 6, amout: 4 },
{ rank: 7, amout: 3 },
{ rank: 8, amout: 2 },
{ rank: 9, amout: 1 },
{ rank: 10, amout: 1 },
{ rank: 'boom', amout: 6 },
{ rank: 'flag', amout: 1 }]


export function creatSoldiersList(list, playerName) {
    let soldiers = []
    list.forEach((element) => {
        for (let i = element.amout; i > 0; i--) {
            soldiers.push({ "rank": element.rank, "playerName": playerName })
        }
    })
    return soldiers
}

export function shuffle(list){
    let count = 0;
    while (count < 1000) {
        let index1 = Math.floor(Math.random() * list.length);
        let index2 = Math.floor(Math.random() * list.length);
        
        if (index1 != index2) {
            let temp1 = list[index1]
            let temp2 = list[index2]
            list[index1] = temp2
            list[index2] = temp1
            count++;
            
        }
    }
    return list
}

