(function(module) {
  var repoController = {};

  repoController.reveal = function() {
    $('#work-items').hide();
    $('#about').hide();
    $('#repos').fadeIn();
  };

  module.repoController = repoController;
})(window);
