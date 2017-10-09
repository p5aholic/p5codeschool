'use strict';

import UserEnv from 'UserEnv';
import PageAnimation from './PageAnimation/';

document.addEventListener('DOMContentLoaded', ()=> {
  setChapterLink();
});

export function setChapterLink() {
  const container = document.querySelector('.article-container');
  const prevLink = document.querySelector('.chapter-link-prev');
  const nextLink = document.querySelector('.chapter-link-next');

  if (!prevLink || !nextLink) return;

  const prevChap = parseInt( container.getAttribute('data-prev') );
  const nextChap = parseInt( container.getAttribute('data-next') );

  if (prevChap === -1) {
    prevLink.classList.add('off');
  } else {
    prevLink.classList.remove('off');
    prevLink.setAttribute('href', `/tutorial/chapter${prevChap}/`);
  }

  if (nextChap === -1) {
    nextLink.classList.add('off');
  } else {
    nextLink.classList.remove('off');
    nextLink.setAttribute('href', `/tutorial/chapter${nextChap}/`);
  }
}