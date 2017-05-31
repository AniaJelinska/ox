import { Controller } from 'cerebral';
import application from './application';

const controller = Controller({
  modules: {
    application
  }
});

export default controller;
