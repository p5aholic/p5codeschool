$(function() {
    $(window).on("load", function() {
        $("body").addClass("ready");
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
