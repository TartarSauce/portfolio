(function(module) {
  function Work (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  };

  Work.all = [];

  Work.prototype.toHtml = function(scriptTemplateId) {
    var source = $(scriptTemplateId).html();
    var template = Handlebars.compile(source);
    return template(this);
  };

  Work.loadAll = function(workData) {
    workData.sort(function(workItem1,workItem2) {
      return(new Date(workItem2.startDate)) - (new Date(workItem1.startDate));
    }).map(function(ele) {
      Work.all.push(new Work(ele));
    });
  };

  Work.fetchAll = function(nextFunction) {
    if (localStorage.hackerIpsum) {
      Work.loadAll(JSON.parse(localStorage.data));
      nextFunction();
    } else {
      $.getJSON('model/data.json', function(responseData) {
        localStorage.data = JSON.stringify(responseData);
        Work.loadAll(responseData);
        nextFunction();
      });
    }
  };

  Work.numWordsAll = function() {
    return Work.all.map(function(workItem) {
      var w1 = workItem.work1.match(/\w+/g).length;
      var w2 = workItem.work2.match(/\w+/g).length;
      var w3 = workItem.work3.match(/\w+/g).length;
      return (w1 + w2 + w3);
    }).reduce(function(numWordsWork1, numWordsWork2) {
      return numWordsWork1 + numWordsWork2;
    });
  };
  module.Work = Work;

}) (window);
