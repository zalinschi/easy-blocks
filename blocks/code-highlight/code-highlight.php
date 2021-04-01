<?php
/**
 * Simple Single Block
 *
 * @name   : start-single-block
 * @func   : start_single_block
 * @comment: replace all @name & @func with your new naming
 */

function esblocks_register_block_code_highlight() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	 //Register our block editor-specific front css
	wp_register_style(
		'esblocks/code-highlight',
		plugins_url( 'dist/style.css', __FILE__ ),
		array()
	);

//	wp_enqueue_style(
//		'prismjs-theme',
//		plugins_url( 'dist/prismjs/themes/prism-tomorrow.css', __FILE__ ),
//		'esblocks/code-highligh'
//	);

	//Register our block editor-specific front js
	wp_register_script(
		'esblocks/code-highlight',
		plugins_url( 'dist/script.js', __FILE__ ),
		array( 'jquery' )
	);
	wp_localize_script( 'esblocks/code-highlight', 'path_prismjs', plugins_url( 'dist/prismjs/grammars/', __FILE__ ) );

	// Register our block editor-specific CSS/JS
	if ( is_admin() ) :
		wp_register_style(
			'esblocks/code-highlight-editor',
			plugins_url( 'dist/editor.css', __FILE__ ),
			array( 'wp-edit-blocks' )
		);

		// Register our block script with WordPress
		wp_register_script(
			'esblocks/code-highlight-editor',
			plugins_url( 'dist/editor.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element', 'wp-editor' )
		);

	endif;

	// Enqueue the script in the editor
	register_block_type( 'esblocks/code-highlight', array(
		'editor_script' => 'esblocks/code-highlight-editor',
		'editor_style'  => 'esblocks/code-highlight-editor',
		'style'         => 'esblocks/code-highlight',
		'script'        => 'esblocks/code-highlight',
	) );
}

add_action( 'init', 'esblocks_register_block_code_highlight' );