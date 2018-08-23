var timer = setTimeout(function (){
	$('.inner').addClass('init');
},200);

$('.itme').on('click', function() {
	$(this).addClass('active').removeClass('die');
	$('.wrapper').addClass('wrapper_active');
})
$('.close').on('click',function(e) {
	e.stopPropagation();
	$('.itme').removeClass('active').addClass('die');
	$('.wrapper').removeClass('wrapper_active');

})