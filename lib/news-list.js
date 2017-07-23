(function(exports) {
  // This API key isn't important, ok to be public
  var apiKey = 'a0a48e02-5bf1-4881-b150-9c65cb06ceeb'
  var apiBase = 'http://content.guardianapis.com/'

  function NewsList() {
    this.articles = []
  };

  NewsList.prototype.showNewsList = function () {
    var app = document.getElementById('app')
    this.getNewsList().then(function(mapped) {
      var html = `<ul>${mapped.join('')}</ul>`
      app.innerHTML = html
    });
  };

  NewsList.prototype.getNewsList = function () {
    return fetch(apiBase + 'politics?api-key=' + apiKey).then(function(response) {
      return response.json()
    }).then(function(json) {
      return json.response.results.map(function(article) {
        return `<li><a href="http://www.theguardian.com/${article.id}">${article.webTitle}</a></li>`
      });
    });
  };

  exports.NewsList = NewsList
})(this)
