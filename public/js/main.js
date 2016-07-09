$(function() {
    // position main navigation
    var $mainNavigation = $("#mainNavigation");
    var $layer1 = $("#layer1");

    $mainNavigation.css("left", -200).addClass("off");
    $layer1.css("left", 20);

    // animate main navigation
    $("#naviControll").click(function() {
        if ($mainNavigation.hasClass("off")) {
            $mainNavigation
            .animate({ left: "0"}, 300).removeClass("off");
            $layer1.animate({ left: "-20px" }, 300);
        } else {
            $mainNavigation
            .animate({ left: "-200" }, 300).addClass("off");
            $layer1.animate({ left: "20px" }, 300);
        }
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
