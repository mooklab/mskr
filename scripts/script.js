// Изменение размыеров текстового поля
var textarea = function(){
    this.style.height = '1px'
    this.style.height = this.scrollHeight + 'px'
}
function resizeTextAreas(){ 
    $('textarea').each( textarea ) 
}
$('textarea').on('input change', textarea )
$(window).resize( resizeTextAreas )

$('input[name=Телефон]').mask("+7 (999) 999-99-99")
$('input[name=Телефон]').on('click', function(){
    $(this).focus()
})


$('.faq .item .question').on("click", function () {
    $(this).toggleClass("opened")
    content = $(this).next()

    if (content.height() > 0) {
        content.css("max-height", 0);
    } else {
        content.css("max-height", content.prop("scrollHeight"));
    }
});

$('.course_about .item .block').on("click", function () {
    $(this).parent().toggleClass("opened")
    content = $(this).next()

    if (content.height() > 0) {
        content.css("max-height", 0);
    } else {
        content.css("max-height", content.prop("scrollHeight"));
    }
})



$('[modal=menu] .content > ul > li').on("click", function () {
    $(this).toggleClass("opened")
    content = $(this).find('ul')

    if (content.height() > 0) {
        content.css("max-height", 0);
    } else {
        content.css("max-height", content.prop("scrollHeight"));
    }
})


$('form').submit(function(event){
    event.preventDefault()
    msg = $(this).serialize()
    $(this).get(0).reset()
    $.ajax({
        type: 'POST',
        url: './send_mail.html',
        data: msg,
        success: function(result){
            createModal( "confirm" )
            console.log( result )
        }
    });
    return false;
    
})