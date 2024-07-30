const clubName  = 'Manchester United'

function sum(first,second){
    return first+second
}

class Player{
    constructor(name){
        this.name = name
    }
}

// export multiple & alias in export
export {clubName as club, sum, Player} 