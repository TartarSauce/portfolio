// Configure a view object, to hold all our functions for dynamic updates
var portfolioView = {};

portfolioView.handleMainNav = function () {
  $('.tab').on('click', function() {
    $('.tab-content').hide();
    $('section[id = "' + $(this).attr('data-content') + '"]').show();
  });
};

portfolioView.handleMainNav();
