/*! jquery-sortGrid - v0.1.0 - 2015-01-28
* https://github.com/Fuzzyma/jquery-sortGrid
* Copyright (c) 2015 Ulrich-Matthias Schäfer; Licensed MIT */
(function($){

    $.fn.sortGrid = function( options ) {

        // Extend settings, check for css3-support
        var _this = this
          , settings = $.extend( {}, $.fn.sortGrid.defaultOptions, options );

        // Plugin should call itself on window-resize to fit the new size
        $(window).unbind('resize.sortGrid').bind('resize.sortGrid', function(){
            _this.sortGrid(options);
        });

        
        return this.each(function(){
        
            var $parent   = $(this)
              , hideClass = settings.classPrefix + 'hidden'//(settings.animate ? 'fadeOut' : 'hidden')
              , $items    = settings.sort ? $parent.children(settings.selector).sort(settings.sort) : $parent.children(settings.selector)
              , $filter   = $items.filter(settings.filter)
              , $toShow   = $filter.filter('.'+hideClass)
              , $visible  = $items.not('.'+hideClass)
              , $toHide   = $visible.not($filter)
              , len       = $filter.length
              , colWidth  = settings.width !== 'auto' ? settings.width : $visible.outerWidth(true)
              , colHeight = settings.height !== 'auto' ? settings.height : $visible.outerHeight(true)
              , colNum    = ~~($parent.width() / colWidth)
              , rowNum    = Math.ceil(len / colNum);

            
            $items.addClass(settings.classPrefix + 'item');
            //if(settings.animate && useCss3) $items.addClass(settings.classPrefix + 'css3');

            // Show / Hide items
            $toShow.removeClass(hideClass);
            $toHide.addClass(hideClass);

            // Adjust parents size
            $parent.css('position', $parent.css('position') in ['relative', 'absolute', 'fixed'] ? $parent.css('position') : 'relative');
            $parent.height(rowNum * colHeight);

            if(!settings.margin){
                colWidth = $parent.width() / colNum;
            }

            var startX = ($parent.innerWidth() - colNum * colWidth) / 2
              , startY = ($parent.innerHeight() - $parent.height()) / 2
              , itemPadding = (colWidth - $visible.outerWidth(true)) / 2;

            // Apply new position to every item
            for(var i = len; i--;){ // Kann hier auch gleich `len` benutzen
                var x = startX + (i % colNum) * colWidth + itemPadding
                  , y = startY + ~~(i / colNum) * colHeight;

                if(settings.css3) $filter.eq(i).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');
                else if(settings.animate) $filter.eq(i).stop().animate({ left:x, top:y }, settings.duration);
                else $filter.eq(i).css({ left:x, top:y });
            }

        });

    };

    $.fn.sortGrid.defaultOptions = {
        width: 'auto',
        height: 'auto',
        margin: true,
        css3: true,
        animate:true,
        duration: 700,
        classPrefix: 'sortGrid_',
        selector:'*',
        filter:'*',
        sort:false
    };

})(jQuery);