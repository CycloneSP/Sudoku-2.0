

const sudokuGame = {

    cellCount: 81,
    boardElement: document.getElementById('board'),

    createBoard() {

        for (let i=0; i<this.cellCount; i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            this.boardElement.appendChild(cell);
        
        }

    }
    

};

const timer = {
    seconds: 0,
    minutes: 0,
    timerInterval: null,

    startTimer() {
        this.timerInterval = setInterval(() => this.updateTimer(), 1000);
    },

    updateTimer() {
        this.seconds++;

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }

        const formattedTime = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
        
        document.getElementById('timer').textContent = formattedTime;
    },

    stopTimer() {
        clearInterval(this.timerInterval);
    },

    resetTimer() {
        this.stopTimer();
        this.seconds = 0;
        this.minutes = 0;
        document.getElementById('timer').textContent = '00:00';
    }

}

sudokuGame.createBoard();
