function testGetNewsList() {
  var nl = new NewsList
  console.log(nl._getNewsList())
  console.log(nl.showNewsList())
  nl.showNewsList().then(function(result) {
    assert.isTrue(result.response.results.length === 10, 'testGetNewsList did not return 10 results')
  });
};

testGetNewsList();
