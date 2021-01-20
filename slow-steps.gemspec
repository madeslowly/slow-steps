# coding: utf-8

require_relative "version.rb"

Gem::Specification.new do |spec|
  spec.name                    = 'slow-steps'
  spec.version                 = Mygem::VERSION
  spec.authors                 = ['Made Slowly']
  spec.email                   = ['arran@madeslowly.co.uk']
  spec.summary                 = %q{A bold jekyll theme}
  spec.description             = %q{Designed to have two distinct styling, depending on current URL.}
  spec.homepage                = 'https://github.com/madeslowly/slow-steps'
  spec.license                 = 'MIT'

  spec.metadata['plugin_type'] = 'theme'

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }


  spec.add_runtime_dependency 'jekyll', '>= 4.1', '< 5.0'
  spec.add_runtime_dependency 'jekyll-paginate', '~> 1.1'
  spec.add_runtime_dependency 'jekyll-sitemap', '~> 1.3'
  spec.add_runtime_dependency 'jekyll-feed', '~> 0.1'
  spec.add_runtime_dependency 'jekyll-autoprefixer', '~> 1.0.2'
  spec.add_runtime_dependency 'jekyll-target-blank', '~> 2.0.0'
  spec.add_runtime_dependency 'jekyll-image-size', '~> 1.2'
  spec.add_runtime_dependency 'kramdown-parser-gfm', '~> 1.1'
  spec.add_runtime_dependency 'jekyll_picture_tag', '~> 1.13.0'

  spec.add_development_dependency 'bundler'
  spec.add_development_dependency 'rake', '>= 12.3.3'

end
