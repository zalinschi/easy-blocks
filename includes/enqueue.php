<?php
add_action('wp_enqueue_scripts', 'esblocks_enqueue_scripts');
add_action('admin_enqueue_scripts', 'esblocks_enqueue_scripts');
function esblocks_enqueue_scripts(){
    wp_enqueue_style(
        'esblocks',
        BLOCKS_URL.'assets/style.css',
        array( 'wp-edit-blocks' )
    );
    
    if(is_admin()){
      //Inregistram JS General pentru plugin
        wp_enqueue_script('esblocks',
        BLOCKS_URL.'assets/script.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        null
        );   
    } 
}
