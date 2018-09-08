(function ($) {
    $.fn.fitText = function (kompressor, options) {
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
            }, options);

        return this.each(function () {
            var $this = $(this);
            var resizer = function () {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };
            resizer();
            $(window).on('resize orientationchange', resizer);
        });
    };
    $('.read-more').click(function () {
        var offscreen = $('.offscreen');
        var body = $('.read-more + .collapse-read-more + .body');

        body.html(offscreen.clone().html());

        body.css({'max-height': offscreen.height() + 'px'})
        $('.read-more').addClass('expand');
    });
    $('.collapse-read-more').click(function () {
        $('.read-more + .collapse-read-more + .body').css({'max-height': '0'})
        $('.read-more').removeClass('expand');
    });
})(jQuery);
