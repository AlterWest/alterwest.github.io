$(document).ready(function(){
	
	$('#slider ul').jcarousel({
		scroll: 2,
		initCallback: carousel_init,
		buttonNextHTML: null,
		buttonPrevHTML: null,
		wrap: 'both'
	});
	
	$('.big-image').jcarousel({
		scroll: 1,
		initCallback: big_carousel_init,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});
	
});

function carousel_init(carousel) {
    $('#slider .buttons .next').bind('click', function() {
        carousel.next();
        return false;
    });

    $('#slider .buttons .prev').bind('click', function() {
        carousel.prev();
        return false;
    });
};

function big_carousel_init(carousel){
	
	$('#slider ul li a').click(function(){
		var index = $(this).parent().parent().find('li a').index(this) + 1;
		carousel.scroll(index);
		return false;
	});
}