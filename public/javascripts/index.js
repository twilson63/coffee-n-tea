(function(){
  Ext.ns('twitter');
  Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
      var searchBar, timeline, viewport;
      searchBar = new twitter.SearchBar();
      timeline = new twitter.TimeLine();
      viewport = new Ext.Panel({
        fullscreen: true,
        scroll: 'vertical',
        dockedItems: [searchBar],
        items: [timeline],
        cls: 'twitter-main'
      });
      return searchBar.on({
        search: function(query) {
          if (query) {
            timeline.store.read({
              params: {
                q: query
              }
            });
            return viewport.scroller.scrollTo({
              x: 0,
              y: 0
            });
          }
        }
      });
    }
  });
})();
