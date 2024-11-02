ymaps.ready(function(){
    var map = new ymaps.Map('map', {
        center: JSON.parse( coord ),
        zoom: 16,
        controls: ["zoomControl"]
    })
    var placemark = new ymaps.Placemark(JSON.parse( coord ), {
        hintContent: 'Офис продаж',
        balloonContent: `
            <span>адрес:</span>
            <h4>` + adress + `</h4>
            <span>Телефон:</span>
            <h4><a href="tel:` + phone + `">` + phone + `</a></h4>
            <span>Почта:</span>
            <h4><a href="mailto:` + email + `">` + email + `</a></h4>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: './images/map_pin.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [-30, -45]
    });
    map.geoObjects.add(placemark);
    map.behaviors.disable('scrollZoom')
})