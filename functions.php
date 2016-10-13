<?php

add_theme_support( 'title-tag' );

function react_theme_scripts() {

	$base_url  = esc_url_raw( home_url() );
	$base_path = rtrim( parse_url( $base_url, PHP_URL_PATH ), '/' );

	// Theme style
	wp_enqueue_style( 'react-theme-style', get_stylesheet_uri(), array( ) );

	// Enqueuing bundle.js
	wp_enqueue_script( 'react-theme-js', get_template_directory_uri() . '/public/bundle.js', array(), '1.0.0', true );

	// Adding global settings to js
	wp_localize_script( 'react-theme-js', 'wp', array(
		'root'      => esc_url_raw( rest_url() ),
		'base_url'  => $base_url,
		'base_path' => $base_path ? $base_path . '/' : '/',
		'nonce'     => wp_create_nonce( 'wp_rest' ),
		'site_name' => get_bloginfo( 'name' ),
		'routes'    => react_theme_routes(),
	) );
}
add_action( 'wp_enqueue_scripts', 'react_theme_scripts' );

// Getting pages routes
function react_theme_routes() {
	$routes = array();

	$query = new WP_Query( array(
		'post_type'      => 'any',
		'post_status'    => 'publish',
		'posts_per_page' => -1,
	) );
	if ( $query->have_posts() ) {
		while ( $query->have_posts() ) {
			$query->the_post();
			$routes[] = array(
				'id'   => get_the_ID(),
				'type' => get_post_type(),
				'slug' => basename( get_permalink() ),
				'title' => get_the_title(),
				'template' => get_page_template_slug( get_the_ID() ),
			);
		}
	}
	wp_reset_postdata();

	return $routes;
}