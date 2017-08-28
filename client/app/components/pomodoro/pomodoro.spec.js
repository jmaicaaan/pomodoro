import PomodoroModule from './pomodoro';
import PomodoroController from './pomodoro.controller';
import PomodoroComponent from './pomodoro.component';
import PomodoroTemplate from './pomodoro.html';

describe('Pomodoro', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PomodoroModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PomodoroController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PomodoroTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PomodoroComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PomodoroTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PomodoroController);
    });
  });
});
