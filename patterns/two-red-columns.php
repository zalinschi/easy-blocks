<?php
register_block_pattern(
    'first-pattern',
    array(
        'title'       => 'Purple Text Image',
        'description' => 'Two horizontal buttons, the left button is filled in, and the right button is outlined.',
        'categories'  => array( 'hero' ),
        'content'     => '<!-- wp:group {"className":"is-style-default first-pattern","backgroundColor":"dark_violet","textColor":"gray_wild_sand"} -->
        <div class="wp-block-group is-style-default first-pattern has-gray-wild-sand-color has-dark-violet-background-color has-text-color has-background"><div class="wp-block-group__inner-container"><!-- wp:image {"align":"right","id":68,"sizeSlug":"large","linkDestination":"none"} -->
        <div class="wp-block-image"><figure class="alignright size-large"><img src="http://test.local/wp-content/uploads/2021/02/001.jpg" alt="" class="wp-image-68"/><figcaption>sdsadas</figcaption></figure></div>
        <!-- /wp:image -->
        
        <!-- wp:paragraph {"dropCap":true} -->
        <p class="has-drop-cap"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <!-- /wp:paragraph --></div></div>
        <!-- /wp:group -->',
    )
);