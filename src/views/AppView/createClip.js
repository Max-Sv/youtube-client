export default function createClip(item) {
  const main = document.querySelector('.main');
  const clip = document.createElement('div');
  const title = document.createElement('a');
  const description = document.createElement('p');
  const image = document.createElement('div');
  const chanel = document.createElement('span');
  const creationDate = document.createElement('span');
  const numberOfViews = document.createElement('span');

  clip.classList.add('content__clip');

  title.classList.add('content__title');
  title.setAttribute('href', `https://www.youtube.com/watch?v=${item.id}`);
  title.setAttribute('target', '_blank');
  title.textContent = `${item.snippet.title}`;

  image.classList.add('content__image');
  image.style.backgroundImage = `url('${item.snippet.thumbnails.medium.url}')`;

  chanel.classList.add('content__chanel');
  chanel.textContent = `${item.snippet.channelTitle}`;

  description.classList.add('content__description');
  description.textContent = `${item.snippet.localized.description}`;

  creationDate.classList.add('content__creationDate');
  creationDate.textContent = `${new Date(Date.parse(item.snippet.publishedAt)).toLocaleDateString()}`;

  numberOfViews.classList.add('content__numberOfViews');
  numberOfViews.textContent = `${item.statistics.commentCount}`;

  image.appendChild(title);
  image.appendChild(chanel);
  image.appendChild(creationDate);
  image.appendChild(numberOfViews);
  clip.appendChild(image);
  clip.appendChild(description);
  const numClips = Math.floor(main.clientWidth / 300);
  const free = (main.clientWidth - (numClips * 300)) / (numClips * 2);
  clip.style.margin = `${free}px`;
  return clip;
}
