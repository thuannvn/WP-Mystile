var toggleBodyClass = function (scrlPos) {
    if (document.body.className.indexOf('scroll') !== -1) {
        document.body.className = document.body.className.replace(/\s?(scroll)[0-9]*/i, "");
    }
    scrlPos = (scrlPos > 900) ? 900 : scrlPos;
    document.body.className += " scroll" + scrlPos;
};
window.onscroll = function (e) {
    //console.log(window.scrollY);
    toggleBodyClass(window.scrollY);
}

