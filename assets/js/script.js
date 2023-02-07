$('#fig-2').fadeOut()
$('#change-pic').click(function () {
    $('.modal-slideshow').fadeOut()
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
        if(window.innerWidth<809){$('.menu').css('top', '100px')}else{$('.menu').css("top", "10px");}

    } else {
        $('.menu-btn').css("top", "125px");
        if(window.innerWidth<809){$('.menu').css('top', '180px')}else{$('.menu').css("top", "115px");}
        
        
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

$('.cartaMemoria').hover(function(){
    if($(this).hasClass('flip')){
        $(this).removeClass('flip')
    }else{
        $(this).addClass('flip')
    }
})

if(window.location.search=='?page=4'){
    $('.menu-btn').hide()
}