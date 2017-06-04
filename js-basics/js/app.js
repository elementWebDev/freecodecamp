$(document).ready(function() {
  $('.solution').hide(0);
  $('pre').hide(0);
  $('h4').click(function() {
    $('.solution').hide(0);
    $(this).find('.solution').show(0);
  });
  $('.solution').click(function() {
    $('pre').hide(0);
    $(this).find('pre').show(0);
  });
});