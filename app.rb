require 'sinatra'

get '/' do
  redirect 'index.html'
end

get '/application.manifest' do
  content_type "text/cache-manifest"
  %Q{
CACHE MANIFEST
#rev1

stylesheets/ext-touch.css
stylesheets/twitter.css
javascripts/ext-touch.js
javascripts/twitter_proxy.js
javascripts/twitter_reader.js
javascripts/models/search.js
javascripts/models/tweet.js
javascripts/views/about.js
javascripts/views/search_bar.js
javascripts/views/time_line.js
javascripts/index.js
icon.png
phone_startup.png
tablet_startup.png

NETWORK:
/
  }
end
