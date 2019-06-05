import getResponseUrl from '../models/getResponseUrl';
import createItem from '../views/AppView/createClip';

export default class SlideShow {
  constructor(main) {
    this.main = main;
    this.content = this.main.querySelector('.content');
    this.clip = this.main.querySelector('.content__clip');
    this.clips = this.main.querySelectorAll('.content__clip');
    this.previous = this.main.querySelector('.pagination__prev');
    this.current = this.main.querySelector('.pagination__current');
    this.next = this.main.querySelector('.pagination__next');
    this.index = 1;
    this.current.textContent = this.index;
    this.total = 15;
    this.numClips = Math.floor(this.main.clientWidth / this.clip.clientWidth);
    this.x0 = null;
  }

  actions() {
    this.next.addEventListener('click', this.clickNext.bind(this), false);
    this.previous.addEventListener('click', this.clickPrev.bind(this), false);
    document.addEventListener('mousedown', this.lock.bind(this), false);
    document.addEventListener('touchstart', this.lock.bind(this), false);
    document.addEventListener('mouseup', this.move.bind(this), false);
    document.addEventListener('touchend', this.move.bind(this), false);
  }

  lock(e) {
    function unify(a) {
      return a.changedTouches ? a.changedTouches[0] : a;
    }
    this.x0 = unify(e).clientX;
  }

  move(e) {
    function unify(b) {
      return b.changedTouches ? b.changedTouches[0] : b;
    }
    if (this.x0 || this.x0 === 0) {
      const dx = unify(e).clientX - this.x0;
      const s = Math.sign(dx);
      // eslint-disable-next-line no-console
      console.log(`${s}swipe!!`);
      if (s === -1) this.clickNext();
      if (s === 1) this.clickPrev();
      this.x0 = null;
    }
  }

  slideTo(pointer) {
    const currentSlide = this.clips[pointer];
    this.content.style.left = `-${currentSlide.offsetLeft}px`;
  }

  clickNext() {
    this.index += 1;
    this.previous.style.display = 'inline-block';
    this.current.textContent = this.index;
    if (this.total - (this.index * this.numClips) <= this.numClips) {
      getResponseUrl(getResponseUrl.value, getResponseUrl.token)
        .then((data) => {
          data.items.forEach(elem => this.content.appendChild(createItem(elem)));
          this.total += 15;
          this.clips = this.main.querySelectorAll('.content__clip');
        });
    }
    this.slideTo(this.numClips * (this.index - 1));
  }

  clickPrev() {
    if (this.index === 1) {
      this.previous.style.display = 'none';
    } else {
      this.index -= 1;
      this.current.textContent = this.index;
      this.previous.style.display = 'inline-block';
      this.slideTo(this.numClips * (this.index - 1));
      if (this.index === 1) this.previous.style.display = 'none';
    }
  }
}
