(function(module) {
  var workController = {};

  workController.reveal = function() {
    $('#about').hide();
    $('#repos').hide();
    $('#work-items').fadeIn();
  };

  module.workController = workController;
})(window);
