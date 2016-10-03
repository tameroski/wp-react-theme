<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="UTF-8" />
        <title>Hello React!</title>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="<?php echo get_stylesheet_directory_uri(); ?>/build/react.min.js"></script>
        <script src="<?php echo get_stylesheet_directory_uri(); ?>/build/react-dom.min.js"></script>
        <script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script>
    </head>
    <body>
        <div id="content"></div>
        <script type="text/babel" src="<?php echo get_stylesheet_directory_uri(); ?>/src/wp-react-theme.js"></script>
    </body>
</html>