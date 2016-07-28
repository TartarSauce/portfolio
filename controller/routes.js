// set up routes for what happens when you click on work tab and about tab
page('/', workController.reveal);
page('/about', aboutController.reveal);
page('/repos', repoController.reveal);
page();
