<?php
/**
 * Plugin Name: Collapse
 */
 
defined( 'ABSPATH' ) || exit;
 
function init_collapse() {
	// JavaScript para o editor.
	wp_register_script(
		'collapse',
		plugins_url( 'collapse.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'collapse.js' )
	);
 
	// CSS para o frontend e editor.
	wp_register_style(
		'collapse',
		plugins_url( 'frontend.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'frontend.css' )
	);
 
	// CSS para o editor.
	wp_register_style(
		'collapse',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
 
	// Registra o bloco.
	register_block_type(
		'blocos-de-exemplo/collapse',
		array(
			'style'         => 'collapse',
			'editor_style'  => 'collapse-editor',
			'editor_script' => 'collapse',
		)
	);
}
add_action( 'init', 'init_collapse' );