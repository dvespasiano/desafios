<?php
/**
 * Plugin Name: Hello World
 */
 
defined( 'ABSPATH' ) || exit;
 
function init_hello_world() {
	// JavaScript para o editor.
	wp_register_script(
		'hello-world',
		plugins_url( 'hello-world.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'hello-world.js' )
	);
 
	// CSS para o frontend e editor.
	wp_register_style(
		'hello-world',
		plugins_url( 'frontend.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'frontend.css' )
	);
 
	// CSS para o editor.
	wp_register_style(
		'hello-world',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
 
	// Registra o bloco.
	register_block_type(
		'blocos-de-exemplo/hello-world',
		array(
			'style'         => 'hello-world',
			'editor_style'  => 'hello-world-editor',
			'editor_script' => 'hello-world',
		)
	);
}
add_action( 'init', 'init_hello_world' );