let defaultColor = "black";
let click = true;

function boardSize(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    totalArea = (size * size)
    for(let i = 0; i < totalArea; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor - 'aqua';
        board.insertAdjacentElement('beforeend', square);
    }
}

function changeSize(input) {
    let error = "Please Enter Number Between 2 and 100"
    if(input >= 2 && input <= 100) {
        boardSize(input);
    } else {
        alert(error);
    }
}

function colorSquare() { 
    if(click) {
        if ((defaultColor === "random")) {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = defaultColor;
        }
    }
}

function changeColor(choice) {
    defaultColor = choice;
}

function reset() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.style.backgroundColor ='white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
        click = !click;
        if(click) {
            document.querySelector('.mode').textContent = "You Are Currently Drawing"
        } else {
            document.querySelector('.mode').textContent = "You Are NOT Drawing"
    }   
    }
})
    