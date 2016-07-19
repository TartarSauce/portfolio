function Work (opts) {
  for (keys in opts) {
    this[keys] = opts[keys];
  }
};

Work.all = [];

Work.prototype.toHtml = function() {
  var source = $('#workitems-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

Work.loadAll = function(workData) {
  workData.sort(function(a,b) {
    return(new Date(b.startDate)) - (new Date(a.startDate));
  }).forEach(function(ele) {
    Work.all.push(new Work(ele));
  });
};

Work.fetchAll = function() {
  if (localStorage.hackerIpsum) {
    Work.loadAll(JSON.parse(localStorage.data));
    Work.all.forEach(function(a) {
      $('#work-items').append(a.toHtml());
    });
  } else {
    $.getJSON('/scripts/data.json', function(responseData) {
      localStorage.data = JSON.stringify(responseData);
      Work.loadAll(responseData);
      Work.all.forEach(function(a) {
        $('#work-items').append(a.toHtml());
      });
    });
  }
};

Work.fetchAll();
