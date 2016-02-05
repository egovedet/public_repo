(function () {
    'use strict';

    $('#slides').superslides({
        inherit_height_from: $('.slides-for-height'),
    });
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
    });
})();
