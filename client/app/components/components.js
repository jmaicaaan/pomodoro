import angular from 'angular';
import Home from './home/home';
import Pomodoro from './pomodoro/pomodoro';

let componentModule = angular.module('app.components', [
  Home,
  Pomodoro
])

.name;

export default componentModule;
