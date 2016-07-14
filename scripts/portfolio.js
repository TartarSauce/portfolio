var workExperience = [];

function Work (opt) {
  // DONE: Use the object passed in to complete this constructor function:
  // Save ALL the properties of `opts` into `this`.
  this.jobtitle = opt.jobtitle;
  this.company = opt.company;
  this.startDate = opt.startDate;
  this.endDate = opt.endDate;
  this.work1 = opt.work1;
  this.work2 = opt.work2;
  this.work3 = opt.work3;
}

Work.prototype.toHtml = function() {
  var $newWork = $('article.template').clone();

  $newWork.find('h3').html(this.jobtitle);
  $newWork.find('h6').html(this.company);
  $newWork.find('time.start-date').html(this.startDate + ' to ');
  $newWork.find('time.end-date').html(this.endDate);
  $newWork.find('section.work-body').append('<div class="work1"> ' + this.work1 + ' </div>');
  $newWork.find('div.work1').append('<div class="work2"> ' + this.work2 + ' </div>');
  $newWork.find('div.work2').append('<div class="work3"> ' + this.work3 + ' </div>');
  console.log($newWork);
  $newWork.removeClass('template');
  return $newWork;
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
