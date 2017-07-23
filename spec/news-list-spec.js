function testGetNewsList() {
  var nl = new NewsList
  nl.getNewsList().then(function(result) {
    assert.isTrue(result.length === 10, 'testGetNewsList did not return 10 results')
  });
};

testGetNewsList();
