<?php
/**
 * Plugin Name: Easy Blocks
 */

// Exit if accessed directly.

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//Definim Constanta Path pentru plugin
define('BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define('BLOCKS_URL', plugin_dir_url( __FILE__ ) );

//include toate fisierele php dit toate submapele directoriului inditcat ca parametru,
function require_all_subdir_file( $dir, $depth = 0 ) {
	$scan = glob( "$dir/*/*.php" );
	foreach ( $scan as $file ) {
		require_once $file;
	}
}

//include toate fisierele php din tot mapdirectpriuluia inditcat ca parametru,
function require_all_dir_file( $dir, $depth = 0 ) {
	$scan = glob( "$dir/*.php" );
	foreach ( $scan as $file ) {
		require_once $file;
	}
}

// require_once BLOCKS_PATH.'includes/blocks.php';
// require_once BLOCKS_PATH.'includes/functions.php';
// ...
// Echivalent cu

require_all_dir_file( BLOCKS_PATH.'includes');