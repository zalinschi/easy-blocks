<?php
// include fisierele php ale tuturor blocurilor gutenberg
require_all_subdir_file(  BLOCKS_PATH . "blocks", 1 );

/**
 * Add custom category for gutenberg
 * @param $cats
 * @param $post
 *
 * @return array
 */
function esblocks_categories( $cats ) {
	return array_merge(
		$cats,
		array(
			array(
				'slug'  => "esblocks",
				'title' => __( 'Easy Blocks', 'esblocks' ),
				'icon'  => 'wordpress'
			)
		)
	);
}

add_filter('block_categories', 'esblocks_categories');