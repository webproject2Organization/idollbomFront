$(function(){


    $(".gnb").on("mouseover",function(){
     $("#header").stop().animate({height: 270});
    });
    $("#header").on("mouseleave",function(){
     $("#header").stop().animate({height: 100});
    });

 
 
 });