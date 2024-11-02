$('section.courses .carousel').slick({
    slidesToShow: 4,
    dots: false,
    arrows: true,
    touchMove: false,
    prevArrow: $('section.courses .left_arrow'),
    nextArrow: $('section.courses .right_arrow'),
    infinite: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})

$('section.teachers .carousel').slick({
    slidesToShow: 4,
    dots: false,
    arrows: true,
    touchMove: false,
    prevArrow: $('section.teachers .left_arrow'),
    nextArrow: $('section.teachers .right_arrow'),
    infinite: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})


$('.gallery .carousel').slick({
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    appendDots: $('.gallery .navigation .dots'),
    appendArrows: $('.gallery .wrap'),
    prevArrow: '<img class="left_arrow" src="images/gallery_left.svg">',
    nextArrow: '<img class="right_arrow" src="images/gallery_right.svg">',
    infinite: true,
    autoplay: true,
    touchMove: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
})

$('.course_about .tabs_content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: false,
    rows: 0
})

$('.course_about .tabs_content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var NextSlideDom = $(slick.$slides.get(nextSlide)),
        slide_index = NextSlideDom.index()
    current_tab = $('.course_about .tabs_caption > *:eq('+ slide_index +')')
    current_tab.addClass('active')
    current_tab.siblings().removeClass('active')
})

$('.course_about .tabs_caption > *').click(function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    var slideIndex = $(this).index()
    $('.course_about .tabs_content').slick('slickGoTo', parseInt(slideIndex))
})