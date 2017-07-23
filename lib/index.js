window.onload = function() {
  var nl = new NewsList();
  nl.showNewsList();

  window.addEventListener('hashchange', function(evt) {
     var id = evt.newURL.split('#')[1]
     nl.showArticle(id);
  });
};
