import Barba from 'barba.js';
import TweenLite from 'TweenLite';
import CSSPlugin from 'gsap.plugins/CSSPlugin.js';
// import { init } from '../common.js';

Barba.Pjax.init();
Barba.Prefetch.init();

const FadeInOutTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    const deferred = Barba.Utils.deferred();

    TweenLite.to(this.oldContainer, 0.2, {
      opacity: 0,
      x: -60,
      onComplete: () => {
        deferred.resolve();
      }
    });

    return deferred.promise;
  },

  fadeIn: function() {
    this.done();

    TweenLite.fromTo(this.newContainer, 0.2,
      {
        opacity: 0,
        x: 60
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.4
      }
    );
  }
});

Barba.Pjax.getTransition = function() {
  // console.log(Barba.HistoryManager.prevStatus());
  // console.log(Barba.HistoryManager.currentStatus());
  return FadeInOutTransition;
};