"use strict";

$(window).on("load",function(){
    $(".img-frame").hover(function () {
        // console.log("hover");
        $(this).addClass("img-animate");
    },function () {
        $(this).removeClass("img-animate");
    })
})