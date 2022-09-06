(function() {
  function $(id) {
    return document.getElementById(id);
  }
$('contentWrap').style.height = 0;
$('contentText').style = 'display:none;';
  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
    $('contentWrap').style.height = 'auto';
    $('contentText').style = 'display:block;';
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
    $('contentWrap').style.height = 0;
    $('contentText').style = 'display:none;';
  });

}());
