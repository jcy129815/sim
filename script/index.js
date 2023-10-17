$('header .nav').on('mouseover',function(){
    $('header .sub_bg ').stop().slideDown()
    $('header .sub_bg ').css('backgroundColor', '#000')
    // $('header').css('backgroundColor', '#000')
})
$('main').on('mouseover',function(){
    $('header .sub_bg').stop().slideUp()
    $('header').css('backgroundColor', 'rgba(0, 0, 0, 0.40)')
})
$('header .nav #main_nav1').on('mouseover',function(){
    $('header .sub_bg #sub1').stop().slideDown()
    $('header .sub_bg #sub2').hide()
    $('header .sub_bg #sub3').hide()
})
$('header .nav #main_nav2').on('mouseover',function(){
    $('header .sub_bg #sub1').hide()
    $('header .sub_bg #sub2').stop().slideDown()
    $('header .sub_bg #sub3').hide()
})
$('header .nav #main_nav3').on('mouseover',function(){
    $('header .sub_bg #sub1').hide()
    $('header .sub_bg #sub2').hide()
    $('header .sub_bg #sub3').stop().slideDown()
})