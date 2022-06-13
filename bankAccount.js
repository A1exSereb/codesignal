// gives 100, 50, 20, 10

const getMoney = (ammount) => {
    if(ammount <= 0) return 'Hey! Enter new amount, boy'
    const total = {'100':0,'50':0,'20':0,'10':0};
    const avilableNotes = [100,50,20,10];
    for(let i = 0; i < avilableNotes.length; i++) {
        let note = avilableNotes[i];
        while(ammount - note >= 0) {
            ammount -= note
            total[note]++
        }
    }
    return total
}

console.log(getMoney(1670))
