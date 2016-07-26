(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('#work-items').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
