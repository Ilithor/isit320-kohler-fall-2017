requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'jquery/dist/jquery',
        bootstrap: 'bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        elfLog: 'elven-tools/elf-log',
        makeHtml: 'javascripts/make-html/make-html',
        walking: 'javascripts/make-html/walking',
        makeImage: 'javascripts/make-image/make-image',
        imagePicker: 'javascripts/make-image/image-picker',
        display: 'javascripts/tools/display',
        settings: 'javascripts/tools/settings',
        utilities: 'javascripts/tools/utilities',
        reactBundle: 'javascripts/bundle',
        tinyPubSub: 'javascripts/tools/tiny-pub-sub'
    },
    shim : {
        "tinyPubSub" : {
            deps : [ "jquery" ],
            exports : "tinyPubSub"
        }
    }
});

requirejs(['jquery'], function($) {
    'use strict';
    requirejs(['bootstrap', 'control', 'reactBundle', 'tinyPubSub'], function(bootstrap, control) {
        control();
        $('.navbar-nav li.trigger-collapse a').click(function(event) {
            $('.navbar-collapse').collapse('hide');
        });
    });
});
