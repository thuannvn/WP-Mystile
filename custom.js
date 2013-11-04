;var bgEff = {
    bg: document.getElementsByClassName('page-background')[0],
    hasBlur: false,
    maxValue: 120,
    bgTop: 0,
    init: function () {
        window.onscroll = function () {
            bgEff.bgrApply(window.scrollY);
        };
    },

    bgrApply: function (scrlPos) {
        //if (scrlPos > bgEff.maxValue && bgEff.bgTop === bgEff.maxValue) return false;
        //bgEff.bgTop = scrlPos > bgEff.maxValue ? bgEff.maxValue : scrlPos;
        //bgEff.bg.style.top = bgEff.bgTop/-1 + 'px';
        if (scrlPos === 0) { 
            document.documentElement.className = document.documentElement.className.replace(/ blur/g, ''); 
            //bgEff.hasBlur = false; 
        }
        else { // if (!bgEff.hasBlur) { 
            document.documentElement.className += " blur"; 
            //bgEff.hasBlur = true; 
        }
        //console.log(scrlPos);
    }
};
bgEff.init();

