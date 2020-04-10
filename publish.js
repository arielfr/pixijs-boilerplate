const ghPages = require('gh-pages');

ghPages.publish('dist', function(err) {
  if (err) {
    console.log(`An error ocurr: ${err}`);
    return;
  }

  console.log('Success');
});
