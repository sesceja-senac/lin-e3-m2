window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.preloader').fadeOut(300);
    AOS.init();
    AOS.refresh();
})
window.setTimeout(function(){AOS.refresh()}, 1000)