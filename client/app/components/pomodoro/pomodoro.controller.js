class PomodoroController {
  constructor($state, $stateParams, $interval, Config) {
    "ngInject";
    this.name = 'pomodoro';
    this.$interval = $interval;
    this.Config = Config;
    this.countdown = {
      minute: this.Config.minutes,
      second: 0 // zero because it is not right to countdown from 60secs at start
    };
    this.__interval;
    this.isTimerStarted = false;
  }

  startTimer = () => {
    this.isTimerStarted = true;
    if (angular.isDefined(this.__interval)) {
      // if there's an existing;
      console.log('A running timer is already existing');
      return;
    }
    this.__interval = this.$interval(() => {
      if (this.countdown.second > 0) this.countdown.second -= 1;
      if (this.countdown.second === 0 && this.countdown.minute > 0) {
        this.countdown.minute -= 1;
        this.resetSeconds();
      }
      if (this.countdown.second <= 0 && this.countdown.minute <= 0) {
        this.stopTimer();
      }
    }, 200);
  };

  stopTimer = () => {
    this.isTimerStarted = false;
    this.$interval.cancel(this.__interval);
    this.__interval = undefined;
  };

  resetTimer = () => {
    this.stopTimer();
    this.resetMinutes();
    this.resetSeconds();
  };

  resetMinutes = () => {
    this.countdown.minute = this.Config.minutes;
  };
  
  resetSeconds = () => {
    this.countdown.second = 60;
  };
}

export default PomodoroController;
