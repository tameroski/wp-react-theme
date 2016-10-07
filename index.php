<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="UTF-8" />
        <title>Hello React!</title>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        
        <script>
            var API_URI = "<?php echo home_url()?>/wp-json/wp/v2";
        </script>
    </head>
    <body>
        <div id="content"></div>
        <script type="application/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/public/bundle.js"></script>
    </body>
</html>