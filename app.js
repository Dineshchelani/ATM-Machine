
function countCurrency(event) {
    event.preventDefault()
    let preferdNote = +document.querySelector('input[name="note"]:checked').value;
    let amount = document.getElementById('amount').value
    
    if (amount < 100) {
        alert("Minimum amount should be 100 \nPlease re enter the amount")
    } else if (amount > 100000) {
        alert("Maximum amount can be 100000 \nPlease re enter the amount")
    } else {
        calculateNotes(preferdNote, amount)
    }

}

//function to calculate the total number of currency notes
function calculateNotes(preferdNote, amount) {
    let notes = [500, 100, 50, 20, 10, 5, 1];
    //noteCounter used to store no of notes against each note in the array 'notes'
    let noteCounter = Array(7).fill(0);
    
    //To calculate the number of preferd currency notes
    PNI = notes.indexOf(preferdNote) //PNI = Preferd Note Index
    if (amount >= notes[PNI]) {
        noteCounter[PNI] = Math.floor(amount / notes[PNI]);
        if (noteCounter[PNI] > 200) {
            noteCounter[PNI] = 200
        }
    }
    amount = amount - (noteCounter[PNI] * notes[PNI]);
    
    //To calculate the number of currency notes
    for (let i = 0; i < 7; i++) {
        if (amount >= notes[i] && i !== PNI) {
            noteCounter[i] = Math.floor(amount / notes[i]);
            amount = amount - (noteCounter[i] * notes[i]);
        }
    }
    if(amount !==0 && notes[PNI] == 1){
        x = 5-amount;
        noteCounter[PNI]-=x;
        i = notes.indexOf(5);
        noteCounter[i]+=1
    }
    printNotes(notes,noteCounter)
}

//function to display the total number of currency notes
function printNotes(notes,noteCounter){
    // Print notes
    document.getElementById("resultScreen").style.display = "block";
    const Div = document.getElementById("result");
    Div.innerHTML = "";
    let h2 = Div.appendChild(document.createElement("h2"));
    h2.innerText = `Currency Note : Number`;

    //Printing the calculated no of notes stored in the array noteCounter using loop
    for (let i = 0; i < 7; i++) {
        if (noteCounter[i] != 0) {
            let h3 = Div.appendChild(document.createElement("h3"));
            h3.innerText = `${notes[i]}  :  ${noteCounter[i]} `
        }
    }

}


