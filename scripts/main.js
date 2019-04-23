$(function(){
	$('body').on('click','.head__navbar-list li a', function(e){
		e.preventDefault();
		$(this).parent().addClass('active').siblings().removeClass('active');
});


$('.head__navbar-list li a').click(function(){
	$('html, body').animate({
		scrollTop: $('#' + $(this).data('value')).offset().top
	}, 1000);
});

	
});

