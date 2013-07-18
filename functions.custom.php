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


/*
remove_filter( 'add_to_cart_fragments', 'header_add_to_cart_fragment' );
add_filter( 'add_to_cart_fragments', 'tag_header_add_to_cart_fragment' );
function tag_header_add_to_cart_fragment( $fragments ) {
	global $woocommerce;
	ob_start();
	woocommerce_cart_link();
	$fragments['a.cart-parent'] = ob_get_clean();
	return $fragments;
}

// Handle cart in header fragment for ajax add to cart
function tag_woocommerce_cart_link() {
	global $woocommerce;
	?>
	<li class="cart">
	<a href="<?php echo $woocommerce->cart->get_cart_url(); ?>" title="<?php _e('View your shopping cart', 'woothemes'); ?>" class="cart-parent">
		<span>
	<?php
	echo $woocommerce->cart->get_cart_total();
	echo '<span class="contents">' . sprintf(_n('%d', '%d', $woocommerce->cart->get_cart_contents_count(), 'woothemes'), $woocommerce->cart->get_cart_contents_count()) . '</span>';
	?>
	</span>
	</a>
	</li>
	<?php
}
*/




/*-----------------------------------------------------------------------------------*/
/* Don't add any code below here or the sky will fall down */
/*-----------------------------------------------------------------------------------*/
?>