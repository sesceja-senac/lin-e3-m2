$('#fig-2').fadeOut()
$('#change-pic').click(function () {
    if ($('#fig-2').css('display') == 'none') {
        $('#fig-1').fadeOut()
        window.setTimeout(function () { $('#fig-2').fadeIn() }, 700)

    } else {
        $('#fig-2').fadeOut()
        window.setTimeout(function () { $('#fig-1').fadeIn() }, 700)

    }
})

$('.menu-btn').click(function () {
    if ($('.menu').hasClass('hidden')) {
        $('.menu').removeClass('hidden')
    } else {
        $('.menu').addClass('hidden')
    }
})

// reposicionamento do botao do menu

$(window).scroll(function () {

    var topPos = $(this).scrollTop();

    // if user scrolls down..
    if (topPos > 100) {
        $('.menu-btn').css("top", "20px");
        $('.menu').css("top", "10px");

    } else {
        $('.menu-btn').css("top", "125px");
        $('.menu').css("top", "115px");
    }

}); // scroll END

// galeria de artistas
$('.modal-galeria').fadeOut()
$('.galeria-container').hover(function(){
    $(this).children('.modal-galeria').fadeIn()
}, function(){
    $(this).children('.modal-galeria').fadeOut()
})
if(window.innerWidth<1000){$('.modal-galeria').fadeIn()}