var element = $(".loader-flag");
var widthPercent = 1;
var color = ["#ff9933", "#ffffff", "#128807"];

function loadingFunc() {
    loadingPercent = widthPercent + "%";
    element.width(loadingPercent);
    colorText = widthPercent % 3;
    $(".loading-percent>span").html(loadingPercent).css("color", color[colorText]);
    widthPercent++;
    if (widthPercent <= 100) {
        setTimeout(loadingFunc, 100);
    } else {
        $(".loader-flag").hide(500);
        $("body").css("background-image", "linear-gradient(to bottom, #01baef 0%, #7ee8fa 75%, #63d471 100%)");
        $(".loading-percent>span").html("");
        $(".main-page").css("display", "block");
    }
}

loadingFunc();

$("document").ready(function () {
    $('.ribbon').click(function () {
        $('.flag-container .flag').addClass('loaded');
        $('.ribbon').css({ 'visibility': 'hidden', 'opacity': 0 });
        var opacityOfFoldedFlag = 0;
        setTimeout(function () {
            $('.folded-flag').css({ 'visibility': 'hidden', 'opacity': 0 });
            opacityOfFoldedFlag = $('.folded-flag').css('opacity');
            if (opacityOfFoldedFlag == 1) {
                $('.flag-container .flag').css({ 'display': 'block', 'left': 0, 'top': 0, 'position': 'initial' });
                $("h1").css('opacity', 1);
                $('.waving-flag').css({ 'visibility': 'visible', 'opacity': 1 });
                var playNationalAnthem = document.getElementById("national-anthem");
                playNationalAnthem.play();
            }
        }, 1000);
    });
});