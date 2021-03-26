// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
        
    }
    return gifts;
}

wrapGifts(gifts);



const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = "surprise";


function writeCards(names, event) {
    let cards = []
    for(let n = 0; n < names.length; n++) {
    cards.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`);
    
    }
    
    return cards;
}



function countDown(num) {
    while (num > -1) {
        console.log(num);
        num--;
    }
    
}