# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "http://www.ubiqua.me"
#SitemapGenerator::Sitemap.public_path = 'tmp/'
#SitemapGenerator::Sitemap.sitemaps_path = '/'

SitemapGenerator::Sitemap.create do
  add '/index' , :priority => 1.0, :changefreq => 'monthly'
  add '/product' , :priority => 0.9, :changefreq => 'monthly'
  add '/about' , :priority => 0.8, :changefreq => 'monthly'
  add '/contact' , :priority => 0.8, :changefreq => 'monthly'
  add '/burro' , :priority => 0.5, :changefreq => 'monthly'
  add '/carrera' , :priority => 0.5, :changefreq => 'monthly'
  add '/cuerdas' , :priority => 0.5, :changefreq => 'monthly'
  add '/granjero' , :priority => 0.5, :changefreq => 'monthly'
  add '/guardia' , :priority => 0.5, :changefreq => 'monthly'
  add '/relojes' , :priority => 0.5, :changefreq => 'monthly'
  add '/bolas' , :priority => 0.5, :changefreq => 'monthly'

end

SitemapGenerator::Sitemap.ping_search_engines

  # The root path '/' and sitemap index file are added automatically for you.
  # Links are added to the Sitemap in the order they are specified.
  #
  # Usage: add(path, options={})
  #        (default options are used if you don't specify)
  #
  # Defaults: :priority => 0.5, :changefreq => 'weekly',
  #           :lastmod => Time.now, :host => default_host
  #
  # Examples:
  #
  # Add '/articles'
  #
  #   add articles_path, :priority => 0.7, :changefreq => 'daily'
  #
  # Add all articles:
  #
  #   Article.find_each do |article|
  #     add article_path(article), :lastmod => article.updated_at
  #   end
