$(window).on('load',function(){
$('.cake').css({
	'width': '40%'
})
// var cw = ($('.cake').width()/$('.cake').closest('.cake_area').height())*100;
var cw = $('.cake').width();
$('.cake').css({
    'height': cw + 'px'
});

$('.ingredient').css({
	'width': '10%'
})
	$('.ingredient').css({
		'height': '90%'
	})

// var iw = Math.min($('.ingredient').width(),$('.ingredient').height());
	var iw = $('.ingredient').height();
	$('.ingredient').css({
		'width': iw + 'px'
	})
// $('.ingredient').css({
// 	'height': iw + 'px'
// })
})