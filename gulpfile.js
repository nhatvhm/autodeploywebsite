/*
 * This file is part of laravel-bootstrap-adminlte-starter-kit.
 *
 * Copyright (c) 2016 Oleksii Prudkyi
*/

var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/*
elixir(function(mix) {
    mix.sass('app.scss');
});
*/

var paths = {
'jquery': './vendor/bower_components/jquery/'
, 'bootstrap': './vendor/bower_components/bootstrap-sass/assets/'
, 'fontawesome': './vendor/bower_components/font-awesome/'
, 'datatables': './vendor/bower_components/datatables/media/'
, 'adminlte': './vendor/bower_components/AdminLTE/dist/'
, 'js_error_alert': './vendor/bower_components/js-error-alert/'
, 'bootstrap_notify': './vendor/bower_components/remarkable-bootstrap-notify/dist/'
, 'bower_components': './vendor/bower_components/'
, 'starterkit': './resources/assets/sass/starterkit/'
};

elixir(function(mix) {
    mix.sass('app.scss', 'public/css/'
			, {includePaths: [
				paths.bootstrap + 'stylesheets'
					, paths.fontawesome + 'scss'
					, paths.datatables + 'css'
					, paths.bower_components + 'eonasdan-bootstrap-datetimepicker/src/sass'
					, paths.adminlte + 'css'
					, paths.adminlte + 'css/skins'
					, paths.starterkit
			] })
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts/bootstrap')
        .copy(paths.fontawesome + 'fonts/**', 'public/fonts/fontawesome')
        .scripts([
			paths.js_error_alert + 'window_error_handler.js',
            paths.jquery + "dist/jquery.js",
			paths.js_error_alert + 'jquery_error_handler.js',
            paths.bower_components + "moment/min/moment.min.js",
            paths.datatables + "js/jquery.dataTables.js",
            paths.bootstrap + "javascripts/bootstrap.js",
            paths.datatables + "js/dataTables.bootstrap.js",
            paths.bower_components + "eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js",
            paths.adminlte + "js/app.js",
            paths.bootstrap_notify + "bootstrap-notify.js",
            './resources/javascripts/common/**/*.js',
            './resources/javascripts/anon/**/*.js',
            './resources/javascripts/logged/**/*.js',
        ], 'public/js/app.js', './')
        .version([
            'css/app.css',
            'js/app.js'
        ]);
});
