$('#fig-2').fadeOut()
$('#change-pic').click(function(){
    if($('#fig-2').css('display') == 'none'){
        $('#fig-1').fadeOut()
        window.setTimeout(function(){$('#fig-2').fadeIn()}, 700)
        
    } else {
        $('#fig-2').fadeOut()
        window.setTimeout(function(){$('#fig-1').fadeIn()}, 700)
        
    }
})

$('.menu-btn').click(function (){
    if($('.menu').hasClass('hidden')){
        $('.menu').removeClass('hidden')
    } else {
        $('.menu').addClass('hidden')
    }
})