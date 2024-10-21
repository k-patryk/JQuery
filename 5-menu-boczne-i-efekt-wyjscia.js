$(document).ready(function() {
    $('.hamburger').click(function(){
        $('.main-menu').toggleClass('open');
    });

    $('.main-menu-item a').click(function(a){
        a.preventDefault();
        $('body').fadeOut(800, function(){
            window.location.href = $(a.target).attr('href');
        })
    })
});
