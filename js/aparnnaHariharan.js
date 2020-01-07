(function() {

    var width, height, largeHeader, canvas, ctx = true;

    // Main
    initHeader();
    // initAnimation();
    // addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        //target = {x: width/2, y: height/2};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
    }
}

