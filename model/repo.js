(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(nextFunction) {
    $.ajax({
      url: 'https://api.github.com/users/codefellows-seattle-301d9/repos' +
         '?per_page=5' +
         '&sort=update',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + token,
      },
      success: function(data, message, xhr) {
        reposObj.allRepos = data;
        console.log(data);
        nextFunction();
      }
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;

})(window);
