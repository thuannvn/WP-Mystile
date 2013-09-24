/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'TAG001\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-tag-hibiscus' : '&#xe009;',
			'icon-tag-home' : '&#xe008;',
			'icon-library' : '&#xe005;',
			'icon-books' : '&#xe004;',
			'icon-book' : '&#xe000;',
			'icon-headphones' : '&#xe002;',
			'icon-music' : '&#xe001;',
			'icon-film' : '&#xe003;',
			'icon-camera' : '&#xe006;',
			'icon-play' : '&#xe007;',
			'icon-envelop' : '&#xe00a;',
			'icon-mobile' : '&#xe00b;',
			'icon-mobile-2' : '&#xe00c;',
			'icon-tablet' : '&#xe00d;',
			'icon-screen' : '&#xe00e;',
			'icon-laptop' : '&#xe00f;',
			'icon-print' : '&#xe010;',
			'icon-calendar' : '&#xe011;',
			'icon-download' : '&#xe012;',
			'icon-map' : '&#xe013;',
			'icon-map-2' : '&#xe014;',
			'icon-users' : '&#xe015;',
			'icon-user' : '&#xe016;',
			'icon-remove' : '&#xe017;',
			'icon-remove-2' : '&#xe018;',
			'icon-download-2' : '&#xe019;',
			'icon-cloud-download' : '&#xe01a;',
			'icon-cloud-upload' : '&#xe01b;',
			'icon-upload' : '&#xe01c;',
			'icon-upload-2' : '&#xe01d;',
			'icon-disk' : '&#xe01e;',
			'icon-plus' : '&#xe01f;',
			'icon-minus' : '&#xe020;',
			'icon-checkbox-checked' : '&#xe021;',
			'icon-checkbox-unchecked' : '&#xe022;',
			'icon-checkbox-partial' : '&#xe023;',
			'icon-radio-checked' : '&#xe024;',
			'icon-radio-unchecked' : '&#xe025;',
			'icon-google-plus' : '&#xe026;',
			'icon-facebook' : '&#xe027;',
			'icon-google-plus-2' : '&#xe028;',
			'icon-facebook-2' : '&#xe029;',
			'icon-facebook-3' : '&#xe02a;',
			'icon-twitter' : '&#xe02b;',
			'icon-twitter-2' : '&#xe02c;',
			'icon-twitter-3' : '&#xe02d;',
			'icon-pinterest' : '&#xe02e;',
			'icon-pinterest-2' : '&#xe02f;',
			'icon-skype' : '&#xe030;',
			'icon-close' : '&#xe031;',
			'icon-checkmark' : '&#xe032;',
			'icon-checkmark-2' : '&#xe033;',
			'icon-spam' : '&#xe034;',
			'icon-cancel-circle' : '&#xe035;',
			'icon-checkmark-circle' : '&#xe036;',
			'icon-images' : '&#xe037;',
			'icon-image' : '&#xe038;',
			'icon-image-2' : '&#xe039;',
			'icon-wordpress' : '&#xe03a;',
			'icon-wordpress-2' : '&#xe03b;',
			'icon-linkedin' : '&#xe03c;',
			'icon-stumbleupon' : '&#xe03d;',
			'icon-reddit' : '&#xe03e;',
			'icon-lastfm' : '&#xe03f;',
			'icon-lastfm-2' : '&#xe040;',
			'icon-delicious' : '&#xe041;',
			'icon-stumbleupon-2' : '&#xe042;',
			'icon-file-pdf' : '&#xe043;',
			'icon-file-word' : '&#xe044;',
			'icon-file-excel' : '&#xe045;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};