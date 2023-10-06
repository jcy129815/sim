$('header .nav > li > .sub').hide()
$('header .nav').on('mouseover',function(){
    $('header .nav > li > .sub').stop().slideDown()
})
$('header .nav').on('mouseout',function(){
    $('header .nav > li > .sub').stop().slideUp()
})