let p=[{ rank: 1, amout: 1 },
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


let l =(list,playerName)=>{
    let nowlist=[]
    list.forEach((element) => {
        for(let i = element.amout ;i > 0 ;i--){
            nowlist.push({"rank":element.rank,"playerName":playerName})}})
    return nowlist
}