//Typing effect for section About

$(document).ready(function() {
    var options = new Typed('.element', {
        stringsElement: '#typed-strings',
        typeSpeed: 40
    });

    //Typing effect resets when section About is scrolled to
    $(window).scroll(function() {
       var hT = $('#about').offset().top,
           hH = $('#about').outerHeight(),
           wH = $(window).height(),
           wS = $(this).scrollTop();
       if (wS > (hT+hH-wH)){
           options.reset();
       }
    });
    //Typing effect resets when user hits About on Nav bar
    $("#aboutbn").click(function(){
        options.reset();
});


});
