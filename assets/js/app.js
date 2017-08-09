var App = (function() {
  var $reactWeatherProjectLink,
    $reactWeatherProjectDiv,
    $reactWeatherProjectPhoto,
    $livelyProjectLink,
    $livelyProjectDiv,
    $livelyProjectPhoto,
    $wtwProjectLink,
    $wtwProjectDiv,
    $wtwProjectPhoto,
    $hoverShadowDiv;

  function init() {
    $reactWeatherProjectLink = $('#reactWeatherProjectLink');
    $reactWeatherProjectDiv = $('#reactWeatherProjectInfo');
    $reactWeatherProjectPhoto = $('#reactWeatherProjectPhoto');
    $livelyProjectLink = $('#livelyProjectLink');
    $livelyProjectDiv = $('#livelyProjectInfo');
    $livelyProjectPhoto = $('#livelyProjectPhoto');
    $wtwProjectLink = $('#wtwProjectLink');
    $wtwProjectDiv = $('#wtwProjectInfo');
    $wtwProjectPhoto = $('#wtwProjectPhoto');
    $hoverShadowDiv = $('.hoverShadow');

    $reactWeatherProjectLink.on('click', evt => {
      toggleProject(evt, $reactWeatherProjectDiv);
    });
    $livelyProjectLink.on('click', evt => {
      toggleProject(evt, $livelyProjectDiv);
    });
    $wtwProjectLink.on('click', evt => {
      toggleProject(evt, $wtwProjectDiv);
    });

    $('.projectPicture').each((i, elm) => {
      bindHover(elm);
    });
  }

  function toggleProject(evt, div) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    div.slideToggle();
  }

  function setHoverShadow(evt) {
    let div = $(this);
    let { top, left } = div.offset();
    let width = div.width();
    let height = div.height();
  }

  function hideHoverShadow(evt) {
    $hoverShadowDiv.hide();
  }

  function bindHover(elm) {
    elm.hover(setHoverShadow);
  }

  return {
    init: init
  };
})();

$(document).ready(App.init);
