(function(){
  Ext.data.TwitterProxy = Ext.extend(Ext.data.ScriptTagProxy, {
    url: 'http://search.twitter.com/search.json',
    reader: 'twitter',
    defaultQuery: 'extjs',
    constructor: function(config) {
      config = config || {};
      Ext.applyIf(config, {
        extraParams: {
          q: this.defaultQuery,
          rpp: 50,
          suppress_response_codes: true
        }
      });
      return Ext.data.TwitterProxy.superclass.constructor.call(this, config);
    }
  });
  Ext.data.ProxyMgr.registerType('twitter', Ext.data.TwitterProxy);
})();
