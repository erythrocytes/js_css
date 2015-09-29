$(document).ready(function() {
	n = 16;
	fr = $('#frame');
	//Here goes the function for drawing the screen
	draw = function() { 
		for (var i =1; i <= n; i++) {
			for (var j = 1; j <= n; j++) {
				fr.append('<div class="square"></div>');
			};
			fr.append('<br>');
		};
		var w = (640 / n) - 1;
		var sq = $('.square');
		var wpx = w + "px";
		sq.css('width', wpx);
		sq.css('height', wpx);
	};
	draw();
	magic = function () {
		fr.empty();
		n = prompt("set new width in squares");
		draw();
		//test—works!
		s = $('.square');
		s.mouseenter(function(){
			$(this).addClass('hide');
		});		
	}
	s = $('.square');
	s.mouseenter(function(){
		$(this).addClass('hide');
	});

});
