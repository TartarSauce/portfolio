(function(module) {
  var repoView = {};

  var repoCompiler = function(data) {
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    console.log(data);
    console.log(template(data));
    return template(data);
  };  // Finish the Handlebars method here!

  repoView.renderRepos = function() {
    $('#repos ul').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  // render repo view after getting data from github
  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
