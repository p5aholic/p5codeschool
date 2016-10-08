$(function() {
  var $naviBtn = $("#naviBtn");
  var $line1 = $("#naviBtn .line1");
  var $line2 = $("#naviBtn .line2");
  var $line3 = $("#naviBtn .line3");

  $naviBtn.on("mouseenter", function() {
    $naviBtn.addClass("hover");
  });
  $naviBtn.on("mouseleave", function() {
    $naviBtn.removeClass("hover");
  });
  $naviBtn.on("click", function() {
    if ( $naviBtn.hasClass("cross") ) {
      $naviBtn.removeClass("cross").removeClass("hover");
      $("body").removeClass("navi-open");
    } else {
      $naviBtn.addClass("cross").removeClass("hover");
      $("body").addClass("navi-open");
    }
  });

  $(window).on("load", function() {
    $("body").addClass("ready");

    if ($(window).width() >= 1320) {
      setTimeout(function() {
        $naviBtn.addClass("cross");
        $("body").addClass("navi-open");
      }, 1000);
    }
  });

  $(window).on("scroll", function() {
    $("body").addClass("is-scroll");
  });

  resizeIframe();
  $(window).on("resize", function() {
    resizeIframe();
  });

  function resizeIframe() {
    $(".sample-sketch").each(function() {
      var $this = $(this);
      $this.height(Math.ceil($this.width() * 0.46666));
    });
  }
});
