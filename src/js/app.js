$(document).ready(function() {
	$("#menu").click(function() {
		var aside =  $('aside').css('max-width');

		if(aside === '350px') {
			$('aside').css('max-width', '64px');
			$('.itemList').css('display', 'none');
      $('#selo-qlik-partner').css('visibility', 'hidden');
      
			/*$('aside ul li').hover(function() {
				$(this).css('padding-left', '20px');
			});*/

			$('#menu>i').css('transform', 'rotate(90deg)');
			$('aside>h5').css('visibility', 'hidden');
		} else {
			$('aside').css('max-width', '350px');
			$('.itemList').css('display', 'block');
			$('#selo-qlik-partner').css('visibility', 'visible');
			/*$('aside ul li').hover(function() {
				$(this).css('padding-left', '40px');
			}, function() {
				$(this).css('padding-left', '20px');
			});*/
			$('#menu>i').css('transform', 'rotate(0deg)');
			$('aside>h5').css('visibility', 'visible');
		}
	});

	$("#botaoLogin").click(function() {
		var load = $('.lds-hourglass').css('display');

		if(load === 'none') {
			$('.lds-hourglass').css('display', 'flex');
			$('#botaoLogin span').css('display', 'none');
			$('#botaoLogin').css('width', '40px');
		} else {
			$('.lds-hourglass').css('display', 'none');
			$('#botaoLogin span').css('display', 'flex');
			$('#botaoLogin').css('width', 'auto');
			$('#botaoLogin').css('width', '100%');
		}

	});
});

