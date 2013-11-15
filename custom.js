;var bgF = {
    doc: document.documentElement, 
    docHasClass: false,
    bg: document.getElementsByClassName('page-background')[0],
    maxScroll: 120,
    init: function () {
        window.onscroll = function () {
        	if (window.scrollY < 0 || window.scrollY > bgF.maxScroll) return false;
            else bgF.Scroll(window.scrollY);
        };
    },

	Scroll: function (scrlPos) {
    		
		// Back to top
		if ( scrlPos == 0 ) {
			bgF.bg.style.backgroundPosition = '0 0, 0 0';
			if ( bgF.docHasClass ) {  
				bgF.doc.className = bgF.doc.className.replace(/ blur/g, ''); 
				bgF.docHasClass = false;
			}
		}

		// Scrolling
		else {
			bgF.bg.style.backgroundPosition = '0 ' + (scrlPos*-1) + 'px, 0 0';
			
			if ( !bgF.docHasClass ) { 
				bgF.doc.className += ' blur';
				bgF.docHasClass = true;
			} 
		}

		//console.log(scrlPos);
   }
};
bgF.init();