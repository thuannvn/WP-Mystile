window._t = window._t || {};
_t.hasjQuery = !!window.jQuery;

// scrollClass
_t.scrollClass = function (data) {
    console.log(data);
};


if (_t.hasjQuery) {
    jQuery(document).ready(function () {
        jQuery(window).scroll(function (e) {
            _t.scrollClass(e.target);
        });
    });


} // _t.hasjQuery