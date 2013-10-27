; var bgrEffect = { 
	bgr: document.querySelector('.page-background'),
	bgrTop: 0,
	init: function() {
		window.onscroll = function() {
			bgrEffect.bgrStyle(window.scrollY);
		};
	},
	bgrStyle: function(scrlPos){
		if (scrlPos > 120 || scrlPos === this.bgrTop ) return false;
		var _top = scrlPos, filtr = _top/5;
		bgrEffect.bgr.setAttribute('style', 'top:-' + _top + 'px;-webkit-filter: blur(' + filtr + 'px);-mos-filter: blur(' + filtr + 'px);-o-filter: blur(' + filtr + 'px);-ms-filter: blur(' + filtr + 'px);filter: blur(' + filtr + 'px);');
		bgrEffect.bgrTop = _top;
	}
};
bgrEffect.init();
