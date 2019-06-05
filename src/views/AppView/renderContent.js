import createClip from './createClip';
import createPaginaton from './createPagination';
import SlideShow from '../../controllers/SlideShow';

export default class Content {
  constructor(data) {
    this.header = document.querySelector('.header');
    this.input = document.querySelector('.search-form__input');
    this.button = document.querySelector('.search-form__button');
    this.main = document.querySelector('.main');
    this.section = document.createElement('section');
    this.data = data;

    this.section.classList.add('content');
  }

  renderContent(data) {
    this.header.style.height = '10vh';
    this.input.style.fontSize = '1.6em';
    this.button.style.marginTop = '5px';
    this.button.style.lineHeight = '28px';

    data.items.forEach(item => this.section.appendChild(createClip(item)));
    this.main.appendChild(this.section);
    this.main.appendChild(createPaginaton());
    const slide = new SlideShow(this.main);
    slide.actions();
  }
}
