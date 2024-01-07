

const sudokuGame = {

    cellCount: 81,
    boardElement: document.getElementById('board'),
    selectedCell: null,

    createBoard() {

        for (let i=0; i<this.cellCount; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            this.boardElement.appendChild(cell);

            cell.addEventListener('click', () => {

                document.querySelectorAll('.cell').forEach((cell) => {

                    cell.classList.remove('selected');

                });

                cell.classList.add('selected');
                this.selectedCell = cell;
            })
        
        }

    }
    

};

const timer = {
    seconds: 0,
    minutes: 0,
    timerInterval: null,
    sudokuElement: document.getElementById('sudoku'),

    createTimer() {
        const timerElement = document.createElement('div');
        timerElement.id = 'timer';
        this.sudokuElement.appendChild(timerElement);
    },

    startTimer() {
        this.timerInterval = setInterval(() => this.updateTimer(), 1000);
    },

    updateTimer() {
        this.seconds++;

        if (this.seconds >= 60) {
            this.seconds -= 60;
            this.minutes++;
        }

        const formattedTime = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;

        const timerElement = document.getElementById('timer');

        timerElement.innerText = formattedTime;
        
    },

    addPenalty() {
        this.seconds += 30;
    },

    stopTimer() {
        clearInterval(this.timerInterval);
    },

    resetTimer() {
        this.stopTimer();
        this.seconds = 0;
        this.minutes = 0;
        document.getElementsByClassName('timer').innerText = '00:00';
    }

}

sudokuGame.createBoard();

document.addEventListener('keydown', function(event) {
    if (!event.repeat && sudokuGame.selectedCell) {

        const isNumberKey = event.key >= '1' && event.key <= '9';

        if (isNumberKey) {
            sudokuGame.selectedCell.innerText = event.key;
        } else if (event.key === 'Backspace') {
            sudokuGame.selectedCell.innerText = '';
        }
    }
});



timer.createTimer();
timer.startTimer();
