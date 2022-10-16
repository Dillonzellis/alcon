<?php
function alcon_equeue_scripts(){
    wp_enqueue_style('parent-style', get_stylesheet_directory_uri(). '/dist/main.min.css');
    wp_enqueue_script('theme-js', get_stylesheet_directory_uri() . '/dist/main.css', array(), null, true);
    
}

add_action('wp_enqueue_scripts', 'alcon_equeue_scripts' );