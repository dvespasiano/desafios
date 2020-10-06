<?php
/**
 * Plugin Name: Collapse
 */
 
defined( 'ABSPATH' ) || exit;
 
function init_collapse() {
	// JavaScript para o editor.
	wp_register_script(
		'get-api',
		plugins_url( 'get-api.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'get-api.js' )
	);
 
	// CSS para o frontend e editor.
	wp_register_style(
		'get-api',
		plugins_url( 'frontend.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'frontend.css' )
	);
 
	// CSS para o editor.
	wp_register_style(
		'get-api',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
 
	// Registra o bloco.
	register_block_type(
		'blocos-de-exemplo/collapse',
		array(
			'style'         => 'get-api',
			'editor_style'  => 'get-api-editor',
			'editor_script' => 'get-api',
		)
	);
}
add_action( 'init', 'init_get-api' );