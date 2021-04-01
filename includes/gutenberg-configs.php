<?php
function zv_gutenberg_setup() {

	$colors = array(
		array(
			'name'  => __( 'Dark Violet', 'enspire' ),
			'slug'  => 'dark_violet',
			'color' => '#502C70',
		),
		array(
			'name'  => __( 'Purple', 'enspire' ),
			'slug'  => 'purple',
			'color' => '#323232',
		),
		array(
			'name'  => __( 'Orange', 'enspire' ),
			'slug'  => 'orange',
			'color' => '#E87B00',
		),
		array(
			'name'  => __( 'BG Black', 'enspire' ),
			'slug'  => 'bg_black',
			'color' => '#121212',
		),
		array(
			'name'  => __( 'Black', 'enspire' ),
			'slug'  => 'black',
			'color' => '#1F1F1F',
		),
		array(
			'name'  => __( 'Gray Dusty', 'enspire' ),
			'slug'  => 'gray_dusty',
			'color' => '#959595',
		),
		array(
			'name'  => __( 'Gray Silver', 'enspire' ),
			'slug'  => 'gray_silver',
			'color' => '#C4C4C4',
		),
		array(
			'name'  => __( 'Gray Alto', 'enspire' ),
			'slug'  => 'gray_alto',
			'color' => '#D6D6D6',
		),
		array(
			'name'  => __( 'Gray Mercury', 'enspire' ),
			'slug'  => 'gray_mercury',
			'color' => '#E5E5E5',
		),
		array(
			'name'  => __( 'Gray Wild Sand', 'enspire' ),
			'slug'  => 'gray_wild_sand',
			'color' => '#F5F5F5',
		),
		array(
			'name'  => __( 'Gray Alabaster', 'enspire' ),
			'slug'  => 'gray_alabaster',
			'color' => '#FAFAFA',
		),
		array(
			'name'  => __( 'Red', 'enspire' ),
			'slug'  => 'red',
			'color' => '#FF554A',
		),
	);

	$gradients = array(
		array(
			'name'     => __( 'Light blue to white', 'enspire' ),
			'gradient' => 'linear-gradient(180deg, rgba(0,101,155,0.5) 0%, rgba(255,255,255,1) 100%)',
			'slug'     => 'light-blue-to-white'
		),
		array(
			'name'     => __( 'Blue to white', 'enspire' ),
			'gradient' => 'linear-gradient(180deg, rgba(0,101,155,1) 0%, rgba(255,255,255,1) 100%)',
			'slug'     => 'blue-to-white'
		),
		array(
			'name'     => __( 'Dark blue to white', 'enspire' ),
			'gradient' => 'linear-gradient(180deg,rgba(29,39,53,1) 0%,rgba(255,255,255,1) 100%)',
			'slug'     => 'dark-blue-to-white',
		),
		array(
			'name'     => __( 'Blue to dark blue', 'enspire' ),
			'gradient' => 'linear-gradient(180deg, rgba(0,101,155,1) 0%, rgba(29,39,53,1) 100%)',
			'slug'     => 'blue-to-dark-blue'
		),
		array(
			'name'     => __( 'Light blue to black', 'enspire' ),
			'gradient' => 'linear-gradient(180deg, rgba(0,101,155,0.5) 0%, rgba(0,0,0,1) 100%)',
			'slug'     => 'light-blue-to-black'
		),
		array(
			'name'     => __( 'Blue to block', 'enspire' ),
			'gradient' => 'linear-gradient(180deg,rgba(0,101,155,1) 0%,rgba(0,0,0,1) 100%)',
			'slug'     => 'blue-to-black',
		),
	);

	// Disable Custom Colors
	add_theme_support( 'disable-custom-colors' );

	// Editor Color Palette
	add_theme_support( 'editor-color-palette', $colors );

	//Editor Gradients Palette
	add_theme_support( 'editor-gradient-presets', $gradients );

	//Disable Gradients Support
    //	add_theme_support('disable-custom-gradients');
    //	add_theme_support('editor-gradient-presets', array());
}

add_action( 'after_setup_theme', 'zv_gutenberg_setup', 100 );
