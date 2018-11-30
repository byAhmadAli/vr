/**
 * Filename: canvas360.js
 *
 * Creates a 360 view using an array of images using a canvas element.
 */

function canvas360(params) {

  params = params || {};
  /**
   *  Canvas ID should match the ID or class of the div where the canvas will be added.
   */
  params.canvasId = params.canvasId || false;
  /**
   *  canvasWidth is the width of the canvas element.
   */ 
  params.canvasWidth = params.canvasWidth || 640;
  /**
   *  canvasHeight is the height of the canvas element.
   */ 
  params.canvasHeight = params.canvasHeight || 360;
  /**
   *  framesPath is the location where the frames can be found.
   */
  params.framesPath = params.framesPath || 'img/360/';
  /**
   *  framesFile is the filenames array.
   */
  params.framesFile = params.framesFile || '';
  /**
   *  framesCount is the number of frames that will exist.
   */
  params.framesCount = params.framesCount || 525;
  /**
   *  Do we need to reverse the frame order?
   */
  params.framesReverse = params.framesReverse || false;
  /**
   *  logoImagePath is the url of the logo which will show up during loading.
   */
  params.logoImagePath = params.logoImagePath || 'data:image/png;base64,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';
  /**
   *  loaderBarColor should be an HTML color code matching the color you wish 
   *  to be used to frame in the progress bar when loading images and data.
   */
  params.loaderBarColor = params.loaderBarColor || '#ffffff';
  /**
   *  loaderFillColor should be an HTML color code matching the color you
   *  wish to be used to fill the progress bar.
   */
  params.loaderFillColor = params.loaderFillColor || '#fecd18';
  /**
   *  loaderFillGradient set's canvas360 to use a gradient fill on the progress bar.
   *  If false it will use loaderFillColor. If true it will draw a gradient from
   *  loaderFillColor to loaderFillColor2.
   */
  params.loaderFillGradient = params.loaderFillGradient || false;
  /**
   *  loaderFillColor2 is the second color for the progressbar if loaderFillGradient
   *  is set to true.
   */
  params.loaderFillColor2 = params.loaderFillColor2 || '#ffffff';

  var frameImages = [];

  var strokeX = 0;
  var strokeY = 0;
  var strokeWidth = 0;
  var strokeHeight = 15;
  var countFrames = 0;
  var loadPercent = 0;
  var curFrame = 0;
  var frameCount = 0;
  var animDirection = 0;
  var countFrames = 0;
  var animatingFrames = false;

  var imagePositionX = 0;
  var imagePositionY = 0;

  //***** Swipe Detection Code

  var HORIZONTAL = 1;
  var VERTICAL = 2;
  var AXIS_THRESHOLD = 30;
  var GESTURE_DELTA = 50;

  var direction = HORIZONTAL;

  /** Extend the window with a custom function that works off of either the
   * new requestAnimationFrame functionality which is available in many modern
   * browsers or utilizes the setTimeout function where not available.
   */

  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || // Chromium
    window.webkitRequestAnimationFrame || // WebKit
    window.mozRequestAnimationFrame || // Mozilla
    window.oRequestAnimationFrame || // Opera
    window.msRequestAnimationFrame || // IE
    function(callback, element) {
      window.setTimeout(callback, 17);
    };
  })();

  var onswiperight = function(delta) {
    deltaDif = Math.ceil(delta / (GESTURE_DELTA / 2));
    countFrames += deltaDif;
    animDirection = 1;
    if (!animatingFrames) {
      animatingFrames = true;
      animateFrames();
    }
  }
  var onswipeleft = function(delta) {
    deltaDif = deltaDif = Math.ceil(delta / (GESTURE_DELTA / 2));
    countFrames += deltaDif;
    animDirection = 2;
    countFrames += deltaDif;

    if (!animatingFrames) {
      animatingFrames = true;
      animateFrames();
    }
  }
  var inGesture = false;

  var _originalX = 0;
  var _originalY = 0;

  var mousedown = function(event) {
    event.preventDefault();
    inGesture = true;
    _originalX = (event.touches) ? event.touches[0].pageX : event.pageX;
    _originalY = (event.touches) ? event.touches[0].pageY : event.pageY;

    // Only iphone
    if (event.touches && event.touches.length != 1) {
      inGesture = false;
    }
  }
  var mouseup = function() {
    inGesture = false;
  }
  var mousemove = function(event) {
    event.preventDefault();
    var delta = 0;
    var currentX = (event.touches) ? event.touches[0].pageX : event.pageX;
    var currentY = (event.touches) ? event.touches[0].pageY : event.pageY;

    if (inGesture) {

      if (direction == HORIZONTAL) {
        delta = Math.abs(currentY - _originalY);
      } else {
        delta = Math.abs(currentX - _originalX);
      }
      if (delta > AXIS_THRESHOLD) {
        //inGesture = false;
      }
    }

    if (inGesture) {
      if (direction == HORIZONTAL && !params.framesReverse) {
        delta = Math.abs(currentX - _originalX);
        if (currentX > _originalX) {
          vDirection = 0;
        } else {
          vDirection = 1;
        }
      } else if (direction == HORIZONTAL && params.framesReverse) {
        delta = Math.abs(currentX - _originalX);
        if (currentX < _originalX) {
          vDirection = 0;
        } else {
          vDirection = 1;
        }
      }else{
        delta = Math.abs(currentY - _originalY);
        if (currentY > _originalY) {
          vDirection = 2;
        } else {
          vDirection = 3;
        }
      }

      if (delta >= GESTURE_DELTA) {

        var handler = null;
        switch(vDirection) {
          case 0:
            handler = onswiperight;
            break;
          case 1:
            handler = onswipeleft;
            break;
        }
        if (handler != null) {
          handler(delta);
        }
        _originalX = (event.touches) ? event.touches[0].pageX : event.pageX;
        _originalY = (event.touches) ? event.touches[0].pageY : event.pageY;
        //inGesture = false;
      }
    }
  }
  //***** End swipe detection Code

  var canvas = null;
  var context = null;

  var self = this;

  var number_format = function(number, decimals) {

    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number, prec = !isFinite(+decimals) ? 0 : Math.abs(decimals), sep = ( typeof thousands_sep === 'undefined') ? ',' : thousands_sep, dec = ( typeof dec_point === 'undefined') ? '.' : dec_point, s = '', toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = ( prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }
  
  startPreload = function() {

    imageLogo = new Image();
    imageLogo.src = params.logoImagePath;
    imageLogo.onload = function() {
      logoWidth = imageLogo.width;
      logoHeight = imageLogo.height;

      logoX = ((params.canvasWidth - logoWidth) / 2);
      logoY = ((params.canvasHeight - logoHeight) / 2);

      var canvasCentreX = canvas.width / 2;
      var canvasCentreY = canvas.height / 2;
      var gradient = context.createRadialGradient(canvasCentreX, canvasCentreY, 250, canvasCentreX, canvasCentreY, 0);
      gradient.addColorStop(0, "rgb(0, 0, 0)");
      gradient.addColorStop(1, "rgb(125, 125, 125)");
      context.save();
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.restore();

      context.drawImage(imageLogo, logoX, logoY);
      context.strokeStyle = params.loaderBarColor;

      strokeX = logoX - 20;
      strokeY = logoY + logoHeight + 10;
      strokeWidth = logoWidth + 40;

      context.strokeRect(strokeX, strokeY, strokeWidth, strokeHeight);
      for ( i = 0; i < params.framesCount; i++) {
        frameImages[i] = new Image();

        var repVal = ((i < 9) ? '0' : '') + (i + 1);
        frameImages[i].src = params.framesPath + params.framesFile.replace('{col}', repVal);
      }
      setTimeout(function() {
        preloadImages();
      }, 20);
    }
  }
  var preloadImages = function() {

    for ( i = 0; i < params.framesCount; i++) {

      if (frameImages[i].complete) {
        loadPercent++;
      }
      loaderWidth = Math.ceil((strokeWidth - 2) * (loadPercent / 100));

    }
    if (!params.loaderFillGradient) {
      context.fillStyle = params.loaderFillColor;
    } else {

      gradient = context.createLinearGradient(strokeX + 1, strokeY + 1, loaderWidth, strokeHeight - 2);
      gradient.addColorStop(0, params.loaderFillColor);
      gradient.addColorStop(1, params.loaderFillColor2);
      context.save();
      context.fillStyle = gradient;
    }

    context.clearRect(strokeX + 1, strokeY + 1, loaderWidth, strokeHeight - 2);
    context.fillRect(strokeX + 1, strokeY + 1, loaderWidth, strokeHeight - 2);
    self = this;

    if (loadPercent >= params.framesCount) {
      // Done so draw and exit;
      drawFrame();
      return;
    } else {
      setTimeout(function() {
        preloadImages();
      }, 20);
    }

  }
  var animateFrames = function() {

    if (animDirection == 1) {
      curFrame++;
    }

    if (animDirection == 2) {
      curFrame--;
    }

    frameCount++;
    if (curFrame < 0) {
      curFrame = params.framesCount - 1;
    }
    if (curFrame > (params.framesCount - 1)) {
      curFrame = 0;
    }
    drawFrame();
    if (frameCount < countFrames) {

      requestAnimFrame(function() {
        animateFrames();
      });

    } else {
      animDirection = 0;
      countFrames = 0;
      frameCount = 0;
      animatingFrames = false;
    }

  }
  var drawFrame = function() {
    if (curFrame > (params.framesCount - 1)) {
      curFrame = 0;
    }
    if (curFrame < 0) {
      curFrame = (params.framesCount - 1);
    }

    currentImage = frameImages[curFrame];

    if (curFrame >= 0 && curFrame < (params.framesCount - 1)) {
      context.drawImage(currentImage, imagePositionX, imagePositionX);
      context.msImageSmoothingEnabled = true;
      context.imageSmoothingEnabled = true;
    }
  }
  if (params.canvasId) {
    // Set the variable elem to the object with the specified params.canvasId
    var elem = document.querySelector(params.canvasId);

    // If the element is not an object then show a message letting the user know.
    if (!elem) {
      alert('Invalid element ID.');
      return;
    } else {
      // Create a canvas object.
      canvas = document.createElement("canvas");

      // Set the canvas width to the width defined in the parameters.
      canvas.width = params.canvasWidth;

      // Set the actual height of the canvas object
      canvas.height = params.canvasHeight;

      // Add a class to the element where the canvas will be placed.
      elem.className += ' canvas360Wrapper';

      // Set the width of the div to match the width of the canvas.
      elem.style.width = ((canvas.width) + 'px');

      // Set the height of the div to match the height of the canvas.
      elem.style.height = ((canvas.height) + 'px');

      // Remove the existing HTML in the container element.
      elem.innerHTML = '';

      // Append the canvas to the element.
      elem.appendChild(canvas);

      // Define a context from the canvas.
      context = canvas.getContext('2d');

      // Set a mousedown event on the canvas.
      canvas.onmousedown = mousedown;
      
      // Map touchstart
      //canvas.addEventListener("touchstart", mousedown, false);
      canvas.ontouchstart = mousedown;
      
      // Set a mousemove event on the canvas.
      canvas.onmousemove = mousemove;
      
      // Map touchmove
      //canvas.addEventListener("touchmove", mousemove, false);
      canvas.ontouchmove = mousemove;
      
      // Set a keydown event on the canvas.
      window.onkeypress = function(event) {
        var k = event.keyCode || event.charCode;
        if (!k)
          return;
        if (k == 37) {// left arrow
          if(params.framesReverse) {
            onswiperight();
          } else {
            onswipeleft();
          }
        } else if (k == 39) {// right arrow
          if(params.framesReverse) {
            onswipeleft();
          } else {
            onswiperight();
          }
        }
      }
      
      // Fix Andriod 4 Chrome bug.
      document.body.addEventListener('touchstart', function() {});

      // Set a mouseup event on the canvas.
      window.onmouseup = mouseup;

      // Start the preload method.
      startPreload();

    }

  }

}


