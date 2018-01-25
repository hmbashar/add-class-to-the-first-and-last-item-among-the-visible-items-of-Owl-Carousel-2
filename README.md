# How can I add class to the first and last item among the visible items of Owl Carousel 2

Owl carousel adds a class active to all the visible items. So as you can see I have written a script below to loop through all the owl-item with class active and then using the 0th and last index, I am adding two different classes.  Use the code in your project and you will get the classes added.

##Demo http://plnkr.co/edit/t9URfKq9Mwh9jO705h7u?p=preview

```
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
```
Credit: https://stackoverflow.com/questions/40105651/how-can-i-add-class-to-the-first-and-last-item-among-the-visible-items-of-owl-ca
