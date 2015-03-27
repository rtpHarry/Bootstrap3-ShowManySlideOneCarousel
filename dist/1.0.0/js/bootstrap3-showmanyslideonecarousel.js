/*! bootstrap3-showmanyslideonecarousel - v1.0.0 - 2015-03-27
* Copyright (c) 2015 Matthew Harris, rtpHarry <matthew@rtpdesign.co.uk>; Licensed MIT
* https://github.com/rtpHarry/Bootstrap3-ShowManySlideOneCarousel */
(function(){
  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());