var fs = require('fs');
var path = require('path');


var url = 'https://api.github.com/repos/apache/answer';
var outputPath = path.join(__dirname, '../static/data/stars.json');

function fetchStars() {
  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP error! status:', response.status);
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      var res = { stars: data.stargazers_count };
      fs.writeFileSync(outputPath, JSON.stringify(res, null, 2), 'utf8');
      console.log('Data fetched and saved to', outputPath);
    })
    .catch(function (error) {
      console.error('Error fetching data:', error.message);
    });
}

fetchStars();
