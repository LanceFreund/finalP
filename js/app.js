// when the document is ready...
$(document).ready(function () {
    // creating app
    var app = {
        // caching jQuery 
        cache: {
            $app: $('#app')
        },
        // storing info
        data: {
            name: 'Nikola Tesla',
            tagline: 'A genius ahead of his time',
            home: {
                headerImgs: [
                    'imgs/test.png',
                    'imgs/tesla_coil.png',
                    'imgs/lightbulb.png'
                ]
            }
        },
        // 'building' functions
        build: {
            homepage: function () {
                // assign jQuery cache
                var $app = app.cache.$app;
                // and data variables
                var data = app.data;
                var home = data.home;
                // empty and start building
                $app.empty().append(
                    '<div id="bottom">' +
                    '<h1>' + data.name + '</h1>' +
                    '<h3>' + data.tagline + '</h3>' +
                    '<span id="spanner"></span>' +
                    '</div>'
                );
                // insert all images in array
                for (var i = 0; i < home.headerImgs.length; i++) $('#spanner').append('<img src="' + home.headerImgs[i] + '">');
                // find out width for images
                var imgWidth = 75 / home.headerImgs.length + '%';
                // apply width
                $('#spanner img').css({
                    width: imgWidth
                });
            }
        }
    };
    // init build 
    app.build.homepage();
});