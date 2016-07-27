// Configure a view object, to hold all our functions for dynamic updates
var portfolioView = {};

portfolioView.randomFacts = function() {
  var template = Handlebars.compile($('#randomfact-template').html());
  $('#random-fact').append(template({numWords: Work.numWordsAll()}));
  console.log(Work.numWordsAll());
};

portfolioView.renderPage = function() {
  Work.all.map(function(workItem) {
    $('#work-items').append(workItem.toHtml('#workitems-template'));
  });
  portfolioView.randomFacts();
};

Work.fetchAll(portfolioView.renderPage);
