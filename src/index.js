const TARGET_DATE = 'Jul 17, 2021';
const ref = {
    day: document.querySelector('.value[data-value="days"]'),
    hour: document.querySelector('.value[data-value="hours"]'),
    minute: document.querySelector('.value[data-value="mins"]'),
    second: document.querySelector('.value[data-value="secs"]'),
}
class CountdownTimer {
    constructor({ selector, targetDate, updateTimer }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.updateTimer = updateTimer;
    }
    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate.getTime() - currentTime;
            const time = this.getReadableTime(deltaTime);
            this.updateTimer(time);
        }, 1000);
    }

    getReadableTime(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(TARGET_DATE),
    updateTimer: updateTimerFn
});

function updateTimerFn({ days, hours, mins, secs }) {
    ref.day.textContent = days;
    ref.hour.textContent = hours;
    ref.minute.textContent = mins;
    ref.second.textContent = secs;
}




timer.start();