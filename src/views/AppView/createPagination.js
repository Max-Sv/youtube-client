export default function createPagination() {
  const pagination = document.createElement('div');
  // const current = document.createElement('div');
  // const prev = document.createElement('div');
  // const next = document.createElement('div');
  const currentLink = document.createElement('a');
  const prevLink = document.createElement('a');
  const nextLink = document.createElement('a');
  pagination.classList.add('pagination');
  // currentLink.setAttribute('href', '`#`');
  // prevLink.setAttribute('href', '#');
  // nextLink.setAttribute('href', '#');
  // current.classList.add('pagination__current');
  // prev.classList.add('pagination__prev');
  // next.classList.add('pagination__next');
  currentLink.classList.add('pagination__current');
  prevLink.classList.add('pagination__prev');
  nextLink.classList.add('pagination__next');
  // currentLink.textContent = '1';
  prevLink.textContent = '<<';
  nextLink.textContent = '>>';
  pagination.appendChild(prevLink);
  pagination.appendChild(currentLink);
  pagination.appendChild(nextLink);
  prevLink.style.display = 'none';
  return pagination;
}
