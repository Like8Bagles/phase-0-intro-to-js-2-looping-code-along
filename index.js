// Code your solutions in this file
function writeCards(names, event) {
    let newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return newArray
}


function countDown(number = 10) {
    while (number > -1) {
        console.log(number--)
    }
}