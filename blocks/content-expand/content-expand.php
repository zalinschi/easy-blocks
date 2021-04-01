<?php
/**
 * Simple Single Block
 *
 * @name   : content-expand
 * @func   : start_single_block
 * @comment: replace all @name & @func with your new naming
 */

function esblocks_register_content_expand() {

	// Register our block editor-specific front css
	wp_register_style(
		'esblocks/content-expand',
		plugins_url( 'dist/style.css', __FILE__ )
	);

	// Register our block editor-specific front js
	wp_register_script(
		'esblocks/content-expand',
		plugins_url( 'dist/script.js', __FILE__ ),
		array( 'jquery' )
	);

	// Register our block editor-specific CSS/JS
	if ( is_admin() ) :
		wp_register_style(
		    'esblocks/content-expand-editor',
            plugins_url( 'dist/editor.css', __FILE__ ),
			array( 'wp-edit-blocks' )
		);

		// Register our block script with WordPress
		wp_register_script(
			'esblocks/content-expand-editor',
			plugins_url( 'dist/editor.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element', 'wp-editor' )
		);
	endif;

	// Enqueue the script in the editor
	register_block_type( 'esblocks/content-expand', array(
		'editor_script' => 'esblocks/content-expand-editor',
		'editor_style'  => 'esblocks/content-expand-editor',
		'style'         => 'esblocks/content-expand',
		'script'        => 'esblocks/content-expand',
	) );
}

add_action( 'init', 'esblocks_register_content_expand' );