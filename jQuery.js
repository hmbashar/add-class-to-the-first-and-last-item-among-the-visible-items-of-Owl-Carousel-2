jQuery(document).ready(function($) {

    var carousel = $(".latest-work-carousel");
    carousel.owlCarousel({
        loop : true,
        items : 3,
        margin:0,
        nav : true,
        dots : false,
    });

    checkClasses();
    carousel.on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses(){
        var total = $('.latest-work-carousel .owl-stage .owl-item.active').length;

        $('.latest-work-carousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('.latest-work-carousel .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                // this is the first one
                $(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total>1) {
                // this is the last one
                $(this).addClass('lastActiveItem');
            }
        });
    }


});
