/*let  focusButton = document.getElementById('focus')
let buttons = document.querySelectorAll('.btn')
let shortBreakButton = document.getElementById('short-break')
let longBreakButton = document.getElementById('long-break')
let startBtn = document.getElementById('btn-start')
let pause = document.getElementById('btn-pause')
let time = document.getElementById('time');
let reset = document.getElementById('reset')
let set;
let active = 'focus';
let Count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
};
reset.addEventListener(
    'click',
    (resetTime = () =>{
        pauseTimer();
        switch(active){
          case 'long':
          minCount = 14;
          break;
          case 'short':
            minCount = 4;
            break;
        }
        Count = 59;
         minCount = 24;
         time.textContent = `${minCount +1}:00`;
    })
);
const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove('btn-focus')
    })
};
focusButton.addEventListener('click', () => {
    removeFocus();
    focusButton.classList.add('btn-focus')
    pauseTimer();
    minCount = 24;
    Count = 59;
    time.textContent = `${minCount +1}:00`;
});
shortBreakButton.addEventListener('click', () => {
    active = 'short'
    removeFocus();
    shortBreakButton.classList.add('btn-focus');
    pauseTimer();
    minCount = 4;
    Count = 59;
    time.textContent = `${appendZero(minCount +1)}:00`;
});
longBreakButton.addEventListener('click', () => {
    active = 'long'
      removeFocus();
      longBreakButton.classList.add('btn-focus');
      pauseTimer();
      minCount =14;
      Count = 59;
      time.textContent = `${appendZero(minCount +1)}:00`; 
});
pause.addEventListener(
    'click',
    (pauseTimer = () => {
        paused = true;
        clearInterval(set);
        startBtn.classList.remove('hide');
        pause.classList.remove('show');
        reset.classList.remove('show');
    }) 
);
startBtn.addEventListener('click', () => {
    reset.classList.add('show');
    pause.classList.add('show');
    startBtn.classList.add('hide');
    startBtn.classList.remove('show');
    if (paused) {
        paused = false;
        time.textContent = `${appendZero
        (minCount)}: ${appendZero(Count)}`;
        set = setInterval(() =>{
            Count--;
            time.textContent = `${appendZero(minCount)}: ${appendZero(Count)}`;
            if (Count == 0) {
                if (minCount != 0) {
                    minCount --;
                    Count = 60;

                } else{
                    clearInterval(set);
                }
            }
        }, 1000);
    }
});*/










let focusButton = document.getElementById('focus');
let buttons = document.querySelectorAll('.btn');
let shortBreakButton = document.getElementById('short-break');
let longBreakButton = document.getElementById('long-break');
let startBtn = document.getElementById('btn-start');
let pause = document.getElementById('btn-pause');
let reset = document.getElementById('btn-reset');
let time = document.getElementById('time');
let set;
let active = 'focus';
let Count = 59;
let minCount = 24;
let paused = true;

time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
};

reset.addEventListener('click', () => {
    pauseTimer();
    switch(active) {
        case 'long': minCount = 14; break;
        case 'short': minCount = 4; break;
        default: minCount = 24;
    }
    Count = 59;
    time.textContent = `${minCount + 1}:00`;
});

const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove('btn-focus');
    });
};

focusButton.addEventListener('click', () => {
    removeFocus();
    focusButton.classList.add('btn-focus');
    pauseTimer();
    minCount = 24;
    Count = 59;
    time.textContent = `${minCount + 1}:00`;
});

shortBreakButton.addEventListener('click', () => {
    active = 'short';
    removeFocus();
    shortBreakButton.classList.add('btn-focus');
    pauseTimer();
    minCount = 4;
    Count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener('click', () => {
    active = 'long';
    removeFocus();
    longBreakButton.classList.add('btn-focus');
    pauseTimer();
    minCount = 14;
    Count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
});

pause.addEventListener('click', () => {
    pauseTimer();
});

startBtn.addEventListener('click', () => {
    startTimer();
});

function pauseTimer() {
    clearInterval(set);
    paused = true;
    startBtn.classList.remove('hide');
    pause.classList.remove('show');
}

function startTimer() {
    reset.classList.add('show');
    pause.classList.add('show');
    startBtn.classList.add('hide');
    
    if (paused) {
        paused = false;
        time.textContent = `${appendZero(minCount)}: ${appendZero(Count)}`;

        set = setInterval(() => {
            Count--;
            time.textContent = `${appendZero(minCount)}: ${appendZero(Count)}`;
            
            if (Count === 0) {
                if (minCount !== 0) {
                    minCount--;
                    Count = 60;
                } else {
                    clearInterval(set);
                }
            }
        }, 1000);
    }
}