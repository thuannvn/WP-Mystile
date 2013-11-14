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
    <style type="text/css" media="screen and (min-width: 768px)">
	.page-background { background-image: url("<?php the_field('page-background'); ?>"), url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAG0lEQVQIW2NkYGAwBuKzQAwGjDAGNgGwSgwVAFCGAgUGpiTrAAAAAElFTkSuQmCC"); }
    </style>
<?php	
  }
}


// add_hoock(woo_head)
add_action( 'woo_head', 'add_head_tags' );

function add_head_tags() {
	echo '<meta name="viewport" content="initial-scale=1">';
    $base_url = defined('WP_CONTENT_URL')? WP_CONTENT_URL : '';
    echo '<!--[if lte IE 7]><script type="text/javascript" src="' . $base_url . '/themes/mystile/typefaces/lte-ie7.js"></script><![endif]-->';
}

//add_hoock(woo_top)
add_action('woo_top', 'add_page_background');

function add_page_background() {
    echo '<div class="page-background"></div><div class="page-background-overlay"></div>';
}


//add_hoock(woo_foot)
add_action('woo_foot', 'add_page_customJS');

function add_page_customJS() {
    $base_url = defined('WP_CONTENT_URL')? WP_CONTENT_URL : '';
    // echo '<script type="text/javascript" src="' . $base_url . '/themes/mystile/custom.js"></script>'; //' .  get_permalink('custom.js') . '
}



add_filter( 'woocommerce_payment_complete_order_status', 'virtual_order_payment_complete_order_status', 10, 2 );
 
function virtual_order_payment_complete_order_status( $order_status, $order_id ) {
  $order = new WC_Order( $order_id );
 
  if ( 'processing' == $order_status &&
       ( 'on-hold' == $order->status || 'pending' == $order->status || 'failed' == $order->status ) ) {
 
    $virtual_order = null;
 
    if ( count( $order->get_items() ) > 0 ) {
 
      foreach( $order->get_items() as $item ) {
 
        if ( 'line_item' == $item['type'] ) {
 
          $_product = $order->get_product_from_item( $item );
 
          if ( ! $_product->is_virtual() ) {
            // once we've found one non-virtual product we know we're done, break out of the loop
            $virtual_order = false;
            break;
          } else {
            $virtual_order = true;
          }
        }
      }
    }
 
    // virtual order, mark as completed
    if ( $virtual_order ) {
      return 'completed';
    }
  }
 
  // non-virtual order, return original status
  return $order_status;
}



/*-----------------------------------------------------------------------------------*/
/* Don't add any code below here or the sky will fall down */
/*-----------------------------------------------------------------------------------*/
?>