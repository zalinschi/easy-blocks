
<?php 
add_action( 'init', 'esblocks_add_gutenberg_paterns' );
function esblocks_add_gutenberg_paterns() {
	
	require_all_dir_file( BLOCKS_PATH.'patterns');

	/**
	 * Register Patterns Categories
	 */
	register_block_pattern_category( 'hero', array( 'label' => __( 'Hero', 'enspire' ) ) );
	register_block_pattern_category( 'media_text', array( 'label' => __( 'Media & Text', 'enspire' ) ) );
	register_block_pattern_category( 'section', array( 'label' => __( 'Section', 'enspire' ) ) );

	/**
	 * Remove Core Patterns Categories
	 */
//	remove_theme_support('core-block-patterns');

//	unregister_block_pattern_category('buttons');


	/**
	 * Remove Core Patterns
	 */
	unregister_block_pattern('core/two-images');
}

