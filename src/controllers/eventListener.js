import getResponseUrl from '../models/getResponseUrl';
import Content from '../views/AppView/renderContent';

export default function eventListener(event) {
  if (event.type === 'click' || event.code === 'Enter') {
    event.preventDefault();
    const input = document.querySelector('#input');
    const { value } = input;

    if (value) {
      const main = document.querySelector('.main');
      const content = document.querySelector('.content');
      const pagination = document.querySelector('.pagination');

      main.removeChild(content);
      main.removeChild(pagination);

      getResponseUrl.value = value;
      getResponseUrl(value)
        .then((data) => {
          const clips = new Content(data);
          clips.renderContent(data);
        });
      input.value = '';
      input.blur();
    }
  }
}
