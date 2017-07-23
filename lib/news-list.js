(function(exports) {
  // This API key isn't important, ok to be public
  var apiKey = 'a0a48e02-5bf1-4881-b150-9c65cb06ceeb'
  var apiBase = 'http://content.guardianapis.com/'

  function NewsList() {
    this.articles = []
  };

  NewsList.prototype.showNewsList = function () {
    var app = document.getElementById('articles')
    this.getNewsList().then(function(mapped) {
      var html = `<ul>${mapped.join('')}</ul>`
      app.innerHTML = html
    });
  };

  NewsList.prototype.getNewsList = function () {
    var self = this
    return fetch(apiBase + 'politics?api-key=' + apiKey).then(function(response) {
      return response.json()
    }).then(function(json) {
      self.articles = json.response.results
      return json.response.results.map(function(article, index) {
        return `<li>
                  <a href="#${index}">${article.webTitle}</a> |
                  <a href="http://www.theguardian.com/${article.id}">View External Link</a>
                </li>`
      });
    });
  };

  NewsList.prototype.showArticle = function (id) {
    var articleDiv = document.getElementById('article')
    var apiUrl = this.articles[id].apiUrl

    fetch(`${apiUrl}?api-key=${apiKey}&show-fields=body,thumbnail`).then(function (response) {
      return response.json()
    }).then(function(result) {
      articleDiv.innerHTML = `
        <h1>${result.response.content.webTitle}</h1>
        <img src="${result.response.content.fields.thumbnail}">
        ${result.response.content.fields.body}`
    });
  };


  exports.NewsList = NewsList
})(this)
