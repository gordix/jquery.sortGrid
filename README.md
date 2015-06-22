# jquery-sortGrid

A lightweight and easy to use plugin to arrange items in a box and filter / sort them

## Features

 - **Arranges Items**
  - Will use all the width possible
  - Preserves padding from grid-box and margin of the items
  - width/height of the items is customizable
 - **Filter and Sorting**
 - **Animation**

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/ulima/jquery-sortGrid/master/dist/sortGrid.min.js
[max]: https://raw.github.com/ulima/jquery-sortGrid/master/dist/sortGrid.js

Or just run

    bower install jquery.sortgrid

Include the sript in your page after jQuery:

    <script src="jquery.js"></script>
    <script src="jquery.sortGrid.min.js"></script>

Add the following css-code to your styles:

	.sortGrid_item{
	    position:absolute;
	    top:0;
	    left:0;
	    opacity:1;
	    z-index:2;
	    visibility:visible;
	    transition: transform 0.7s, opacity 0.7s;
	}
	
	.sortGrid_css3{
	    transition: transform 0.7s, opacity 0.7s;
	}
	
	.sortGrid_fadeOut{
	    transition: transform 0.7s, opacity 0.7s, visibility 0s 0.7s;
	    opacity:0;
	    z-index:1;
	    visibility:hidden;
	}

This will set up the items and enables the css3-transition for moving and opacity.

Now call the plugin on the element you want:

    $(function(){
        $('#myGrid').sortGrid();
    });


This will setup the plugin and will arrange the items as grid.

## Documentation

### Options
The following options are available

    $.fn.sortGrid.defaultOptions = {
        width: 'auto',				// The width of the cols
        height: 'auto',				// The height of the rows
        margin: true,				// true: Add wasted space to the padding of the grid
									// false: Add wasted space to the width of the cols
        css3: true,					// Use translate for positioning, else left / top
        animate:true,				// only if jQuery animation is used: disables animation
        duration: 700,				// only if jQuery animation is used: duration of animation
        classPrefix: 'sortGrid_',	// prefix of the class-names used
        selector:'*',				// only items found with this selectir will be affected by this plugin
        filter:'*',					// filter items (expecteds selector or jQuery-collection)
        sort:false,					// standart sort function can be used here
        dataSortBy: 'text',			// default sort by elements's .text() value when using data attributes
        dataSortOrder: 'asc'		// deafult sort order when using data attributes
    };

You can overide this options as you like to customize the plugin to your needs.
However you can also just pass the options you want to change when calling the plugins:

    $(function(){
        $('#myGrid').sortGrid({width:200, selector: '.only_my_items'});
    });

You can use elements data attributes as a sort selector. Use it like this:

    $(function(){
        $('#myGrid').sortGrid({sort: 'data', dataSortBy: 'likes', dataSortOrder: 'desc'});
    });

## Example

Assuming you got a box with many items in it which should be positioned in a grid using all the space:

    <div id="myGrid">
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
    </div>

The divs are styled as boxes:

	div{
	    height:auto;
	    background:#eee;
	    border:1px solid black;
	    padding:40px;
	}
	
	div div{
	    width:200px;
	    height:200px;
	    border:1px solid black;
	    display:inline-block;
	    padding:0;
	    background:#ccc;
	    margin:10px;
	}

Just call the plugin on the div#myGrid and the items will arange

    $(function(){
        $('#myGrid').sortGrid();
    });

## Example with data attributes

Assuming you got a box with many items:

    <div id="myGrid">
    <div class="alive" data-number="1" data-name="Cat" data-likes="50">1, Cat, 50</div>
    <div class="big" data-number="2" data-name="Airplane" data-likes="3">2, Airplane, 3</div>
    <div class="big" data-number="3" data-name="Earth" data-likes="99">3, Earth, 99</div>
    <div class="small" data-number="4" data-name="Coin" data-likes="14">4, Coin, 14</div>
    <div class="small" data-number="5" data-name="Phone" data-likes="134">5, Phone, 134</div>
    <div class="small" class="alive" data-number="6" data-name="Dog" data-likes="55">6, Dog, 55</div>
    </div>

Just call the plugin on the div#myGrid with option sort: 'data' and the items will arange by specified selector

    $(function(){
        $('#myGrid').sortGrid({sort: 'data', dataSortBy: 'likes', dataSortOrder: 'desc'});
    });

## Good to know

 - To use css3-transition for animation use the css-styles on top.  
 - To disable animation you may just remove the transition declaration.  
 - If you want to use jQuery-Animation set css3 to false. The script will now use left / top positioning instead of translation and will use jQuery to animate the items
 - You can disable jQuery-Animation with `animate:false`
 - To hold the `transform`-property clean even with css3-animation activated, you may set `css3` and `animate` to `false` and still use transition in your css. This way the script uses left / top - positioning without jQuery-Animation but the boxes will still be animated with transition.