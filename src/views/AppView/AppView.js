import InputView from './InputView';
import eventListener from '../../controllers/eventListener';

export default class AppView {
  constructor() {
    this.input = new InputView();
    this.main = document.createElement('main');
    this.section = document.createElement('section');
    this.pagination = document.createElement('div');
  }

  render() {
    this.main.classList.add('main');
    this.section.classList.add('content');
    this.pagination.classList.add('pagination');

    document.body.appendChild(this.input.header);
    document.body.appendChild(this.main);
    this.main.appendChild(this.section);
    this.main.appendChild(this.pagination);

    document.addEventListener('keydown', eventListener);
    document.querySelector('#button').addEventListener('click', eventListener);
  }
}
