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
    $hoverShadowDiv,
    $infoList;

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
    $infoList = $('.infoList');

    $hoverShadowDiv.mouseleave(hideHoverShadow);

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
    let $hoverDiv = $(`#${div.attr('data-hover')}`);
    let { top, left } = div.offset();
    let width = div.width() + 1;
    let height = div.height();

    $hoverShadowDiv.css('top', top);
    $hoverShadowDiv.css('left', left);
    $hoverShadowDiv.css('height', `${height}px`);
    $hoverShadowDiv.css('width', `${width}px`);

    $hoverDiv.css('padding-top', `${height / 3}px`);

    $hoverShadowDiv.append($hoverDiv);

    $hoverShadowDiv.fadeIn(100);
  }

  function hideHoverShadow(evt) {
    $hoverShadowDiv.fadeOut(0);
    $infoList.append($hoverShadowDiv.children()[0]);
  }

  function bindHover(elm) {
    let $elm = $(elm);
    $elm.mouseenter(setHoverShadow);
  }

  return {
    init: init
  };
})();

$(document).ready(App.init);
