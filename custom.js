;var bgF = {
    doc: document.documentElement, 
    docHasClass: false,
    bg: document.getElementsByClassName('page-background')[0],
    maxScroll: 200,
    init: function () {
        window.onscroll = function () {
            var scrlPos = window.scrollY;
            if ( scrlPos < bgF.maxScroll ) window.setTimeout(bgF.Scroll(scrlPos),200);
        };
    },

	Scroll: function (scrlPos) {
    		
		// Back to top
		if ( scrlPos < 30 ) {
			//bgF.bg.style.backgroundPosition = '0 0, 0 0';
			if ( bgF.docHasClass ) {  
				bgF.doc.className = bgF.doc.className.replace(/ blur/g, ''); 
				bgF.docHasClass = false;
			}
		}

		// Scrolling
		else {
			//bgF.bg.style.backgroundPosition = '0 ' + scrlPos*-1.4 + 'px, 0 0';
			
			if ( !bgF.docHasClass ) { 
				bgF.doc.className += ' blur';
				bgF.docHasClass = true;
			} 
		}

		//console.log(scrlPos);
   }
};
bgF.init();