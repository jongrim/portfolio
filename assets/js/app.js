var App = (function() {
  var livelyImages = ['./assets/images/Lively/Lively.png', './assets/images/Lively/Lively2.jpeg'];
  function init() {
    let currentPhoto = 0;
    setInterval(function() {
      let $livelyImage = $('.lively');
      $livelyImage.fadeOut(600, function() {
        $livelyImage.attr('src', function() {
          if (currentPhoto === livelyImages.length - 1) {
            currentPhoto = 0;
          } else {
            currentPhoto++;
          }
          return livelyImages[currentPhoto];
        });
        $livelyImage.fadeIn();
      });
    }, 5000);
  }

  return {
    init: init
  };
})();

$(document).ready(App.init);
