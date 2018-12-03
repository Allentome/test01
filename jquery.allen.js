$.extend(
    {
        loading: function (option) {
            var defaults = {
                'container': $('body'),
                'bgcolor': 'rgba(0,0,0,0.2)',
                'color': 'black'
            };
            var params = $.extend({}, defaults, option);
            params.container.append('<div class="loading"><span></span><span></span><span></span><span></span><span></span></div>');
            $loading = $('.loading');
            console.log(params.container.width());
            $loading.css(
                {
                    'top': '10px',
                    'left':(params.container.width() - $loading[0].offsetWidth) / 2,
                        'background-color':params.bgcolor
                }
            );
            $loading.children('span').css('background-color', params.color);
        },
        loadingFinish: function () {
            $('.loading').remove();
        }
    }
);