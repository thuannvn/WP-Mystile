<?php
/*-----------------------------------------------------------------------------------*/
/* include('functions-TAG.php'); in the functions.php */
/* You can add custom functions below */
/*-----------------------------------------------------------------------------------*/
// Examples
// echo "Hello World";

// global $woo_options;

// http://codex.wordpress.org/Function_Reference/the_post_thumbnail
add_theme_support( 'post-thumbnails' );


//add_hoock(woo_head)
add_action('woo_head', 'tag_background_style');

// Requires Plugin Advanced Custom Fields - http://www.advancedcustomfields.com/
function tag_background_style() {
  if( get_field('page-background') ) {
?>
    <style type="text/css" media="screen">
	.page-background { background-image: url("<?php the_field('page-background'); ?>"), url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2NkYGAwBuKzQAwGjDAGNgGwSgwVAFCGAgUGpiTrAAAAAElFTkSuQmCC"); }
    </style>
<?php	
  }
}


// add_hoock(woo_head)
add_hoock( 'woo_head', 'add_ltie7_icon_filla' );

function add_ltie7_icon_filla() {
    $base_url = defined('WP_CONTENT_URL')? WP_CONTENT_URL : '';
    echo '<!--[if lte IE 7]><script type="text/javascript" src="' . $base_url . '/themes/mystile/typefaces/lte-ie7.js"></script><![endif]-->';
}

//add_hoock(woo_top)
add_action('woo_top', 'add_page_background');

function add_page_background() {
    echo '<div class="page-background"></div>';
}


//add_hoock(woo_foot)
add_action('woo_foot', 'add_page_customJS');

function add_page_customJS() {
    $base_url = defined('WP_CONTENT_URL')? WP_CONTENT_URL : '';
    echo '<script type="text/javascript" src="' . $base_url . '/themes/mystile/custom.js"></script>'; //' .  get_permalink('custom.js') . '
}




/*-----------------------------------------------------------------------------------*/
/* Don't add any code below here or the sky will fall down */
/*-----------------------------------------------------------------------------------*/
?>