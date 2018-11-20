$('#menu-close').on('click tap', function(){
  $('.flyout').addClass('closed');
});

$('#menu-open').on('click tap', function(){
  $('.flyout').removeClass('closed');
});