try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        // trigger: 'click'
    })
});