let mix = require('laravel-mix');

require('laravel-mix-tailwind')
require('laravel-mix-purgecss')

mix
    .js('src/js/app.js', 'public/js')
    .sass('src/sass/app.scss', 'public/css')
    .tailwind()
    .purgeCss({
        enabled: true,
        extensions: ['htm', 'html', 'js', 'php', 'vue'],
        folders: ['public'],
    });