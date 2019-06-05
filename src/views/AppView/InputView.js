export default class InputView {
  constructor() {
    this.header = document.createElement('header');
    this.form = document.createElement('form');
    this.input = document.createElement('input');
    this.button = document.createElement('button');
    this.main = document.createElement('main');

    this.header.classList.add('header');

    this.form.classList.add('search-form');

    this.button.classList.add('search-form__button');
    this.button.setAttribute('type', 'button');
    this.button.setAttribute('id', 'button');
    this.button.textContent = 'Search';

    this.input.classList.add('search-form__input');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('placeholder', 'Enter what video you want to find...');
    this.input.setAttribute('id', 'input');
    this.input.setAttribute('autocomplete', 'off');

    this.form.appendChild(this.input);
    this.form.appendChild(this.button);
    this.header.appendChild(this.form);
  }
}
