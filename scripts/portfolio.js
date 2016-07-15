var workExperience = [];

function Work (opts) {
  for (key in opts) this[key] = opts[key];
  console.log($(this));
}

Work.prototype.toHtml = function() {
  var source = $('#workitems-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

myResumeData.sort(function(a, b){
  return(new Date(b.startDate)) - (new Date(a.endDate));
});

myResumeData.forEach(function(ele) {
  workExperience.push(new Work(ele));
});

workExperience.forEach(function(a) {
  $('#work-items').append(a.toHtml());
});
