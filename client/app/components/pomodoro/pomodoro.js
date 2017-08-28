import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import pomodoroComponent from './pomodoro.component';

let pomodoroModule = angular.module('pomodoro', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('pomodoro', {
      url: '/',
      component: 'pomodoro'
    });
})

.component('pomodoro', pomodoroComponent)

.name;

export default pomodoroModule;
