'use strict';

import UserEnv from 'UserEnv';
import PageAnimation from './PageAnimation/';

$(function() {
  setChapterLink();
});

export function setChapterLink() {
  const prevChap = parseInt($('.article-container').attr('data-prev'));
  const nextChap = parseInt($('.article-container').attr('data-next'));

  if (prevChap === -1) $('.chapter-link-prev').addClass('off');
  else $('.chapter-link-prev').removeClass('off').attr('href', `/tutorial/chapter${prevChap}/`);

  if (nextChap === -1) $('.chapter-link-next').addClass('off');
  else $('.chapter-link-next').removeClass('off').attr('href', `/tutorial/chapter${nextChap}/`)
}