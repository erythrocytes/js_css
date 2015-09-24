$(document).ready(function() {
	no = 16;
	fr = $('#frame');
	magic = function() {
		for (var i =1; i <= no; i++) {
			for (var j = 1; j <= no; j++) {
				fr.append('<div class="square"></div>');
			};
			fr.append('<br>');
		};
	};
	magic();
	s = $('.square');
	s.hover(function(){
		$(this).addClass('hide');
	});
	b = $('#button');
	b.click(function(){
		s.removeClass('hide');
		fr.empty();
		no = prompt("set new width in squares");
		var w = (640 / 32)-1;
		
		magic();
	});
});