var App = (function() {
  var livelyImages = ['./assets/images/Lively/Lively.png', './assets/images/Lively/Lively2.jpeg'];
  var customerImages = ['./assets/images/Customer/Home.jpeg', './assets/images/Customer/Search.jpeg'];

  var $customerProjectLink, $customerProjectDiv, $livelyProjectLink, $livelyProjectDiv;

  function init() {
    $customerProjectLink = $('#customerProjectLink');
    $livelyProjectLink = $('#livelyProjectLink');
    $customerProjectDiv = $('#customerProjectInfo');
    $livelyProjectDiv = $('#livelyProjectInfo');
    let livelyCurrentPhoto = 0;

    // setInterval(function() {
    //   let $livelyImage = $('.lively');
    //   $livelyImage.fadeOut(600, function() {
    //     $livelyImage.attr('src', function() {
    //       if (livelyCurrentPhoto === livelyImages.length - 1) {
    //         livelyCurrentPhoto = 0;
    //       } else {
    //         livelyCurrentPhoto++;
    //       }
    //       return livelyImages[livelyCurrentPhoto];
    //     });
    //     $livelyImage.fadeIn();
    //   });
    // }, 5000);

    // let custCurrentPhoto = 0;

    // setInterval(function() {
    //   let $customerImage = $('.customer');
    //   $customerImage.fadeOut(600, function() {
    //     $customerImage.attr('src', function() {
    //       if (custCurrentPhoto === customerImages.length - 1) {
    //         custCurrentPhoto = 0;
    //       } else {
    //         custCurrentPhoto++;
    //       }
    //       return customerImages[custCurrentPhoto];
    //     });
    //     $customerImage.fadeIn();
    //   });
    // }, 5000);

    $customerProjectLink.on('click', toggleCustomerProject);
    $livelyProjectLink.on('click', toggleLivelyProject);
  }

  function toggleCustomerProject(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    $customerProjectDiv.slideToggle();
  }
  function toggleLivelyProject(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    $livelyProjectDiv.slideToggle();
  }

  return {
    init: init
  };
})();

$(document).ready(App.init);
