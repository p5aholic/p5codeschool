import Barba from 'barba.js';
import TweenLite from 'TweenLite';
import CSSPlugin from 'gsap.plugins/CSSPlugin.js';
import { setChapterLink } from '../main.js';

Barba.Pjax.Dom.wrapperId = 'contentsWrapper';
Barba.Pjax.Dom.containerClass = 'article-container';
Barba.Pjax.ignoreClassLink = 'no-transition';
Barba.Pjax.init();
Barba.Prefetch.init();


const FadeInOutTransition = Barba.BaseTransition.extend({
  direction: 1,

  start: function() {
    this.setDirection();

    Promise
    .all([this.newContainerLoading, this.fadeOut()])
    .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    const deferred = Barba.Utils.deferred();

    TweenLite.to(this.oldContainer, 0.3, {
      opacity: 0,
      x: -40 * this.direction,
      ease: Power1.easeIn,
      onComplete: () => {
        window.scroll(0, 0);
        deferred.resolve();
      }
    });

    return deferred.promise;
  },

  fadeIn: function() {
    this.done();
    setChapterLink();

    TweenLite.fromTo(this.newContainer, 0.3,
      {
        opacity: 0,
        x: 40 * this.direction
      },
      {
        opacity: 1,
        x: 0,
        ease: Power1.easeOut,
      }
    );
  },

  setDirection: function() {
    const oldChap = Barba.HistoryManager.prevStatus().url.split('/').slice(-2, -1)[0].replace('chapter', '');
    const newChap = Barba.HistoryManager.currentStatus().url.split('/').slice(-2, -1)[0].replace('chapter', '');
    this.direction = newChap - oldChap;
  }
});

Barba.Pjax.getTransition = function() {
  return FadeInOutTransition;
};