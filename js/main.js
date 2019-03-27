$(window).load(function() {
	$(".before-after").twentytwenty({
		before_label: 'без скинали', // Set a custom before label
		after_label: 'со скинили' // Set a custom after label
	});
	$('.before-slider').slick({
		draggable: false,
		dots: true,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
});
$('.menu-button').on('click', function(){
	$('.menu').toggleClass('menu_active');

});

/* select settings*/
	$('.select_checked').on('click', function() {
		$('.select__dropdown').toggleClass('select__dropdown_open');
	});
$('.select__option').on('click', function(){
		var value = $(this).attr('data-value');
		$('#select-type').val(value);
		$('.select_checked').text(value);
		$('.select__dropdown').toggleClass('select__dropdown_open');
	});
});