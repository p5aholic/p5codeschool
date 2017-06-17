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

    TweenLite.to('.barba-container', 1.0, {
      opacity: 0,
      onComplete: () => {
        deferred.resolve();
      }
    });

    return deferred.promise;
  },

  fadeIn: function() {
    this.done();
    // init();
    TweenLite.fromTo('.barba-container', 1.0,
      {
        opacity: 0
      },
      {
        opacity: 1,
      }
    );
  }
});

Barba.Pjax.getTransition = function() {
  // console.log(Barba.HistoryManager.prevStatus());
  // console.log(Barba.HistoryManager.currentStatus());
  return FadeInOutTransition;
};