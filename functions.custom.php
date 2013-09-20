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


// TODO: Custom fields: background-image
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