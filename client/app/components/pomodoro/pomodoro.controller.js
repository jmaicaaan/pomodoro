class PomodoroController {
  constructor($state, $stateParams, $interval) {
    "ngInject";
    this.name = 'pomodoro';
    this.$interval = $interval;
    this.countdown = {
      hour: 0,
      minute: 0,
      second: 0
    };
    this.__interval;
  }

  startTimer = () => {
    if (angular.isDefined(this.__interval)) {
      // if there's an existing;
      console.log('A running timer is already existing');
      return;
    }
    this.countdown = {
      hour: 2,
      minute: 0,
      second: 5
    };
    this.__interval = this.$interval(() => {
      this.countdown.second -= 1;
      if (this.countdown.second === 0 && this.countdown.minute === 0 && this.countdown.hour > 0) {
        this.countdown.hour -= 1;
        this.resetMinutes();
        this.resetSeconds();
      }
      if (this.countdown.second === 0 && this.countdown.minute > 0) {
        this.countdown.minute -= 1;
        this.resetSeconds();
      }
      if (this.countdown.second <= 0 && this.countdown.minute <= 0 && this.countdown.hour <= 0) {
        this.stopTimer();
      }
    }, 1000);
  };

  stopTimer = () => {
    this.$interval.cancel(this.__interval);
    this.__interval = undefined;
  };

  resetMinutes = () => {
    this.countdown.minute = 60;
  };
  
  resetSeconds = () => {
    this.countdown.second = 60;
  };
}

export default PomodoroController;
