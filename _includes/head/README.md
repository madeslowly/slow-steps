# Header _includes

Everything we place in the `<head>` originates in these subfolders.

## descriptors

Descriptive stuff that describes the website and the page.

### Global includes

#### Open Graph protocol - og-meta.html

Mostly used by facebook to understand what a given page is all about. This is how we control our content when posted on facebook. Thumbs and descriptions are taken from page markup, if that doesn't exist we default to site settings in _config.yml.

If the page is part of a blog, we change `og:type` from website to article and add details from markup.

We have the option to include a fb:app_id.

#### Twitter Meta - twitter-meta.html

Similar to og-meta, we control how our content appears on Twitter. We look for data in page markup first then default to site data.

#### Structured Data - structured-datd.html

This is how we control the indexing of our pages with search engines, in particular Google. All data is taken from our _config.yml

## styles

Collection of `<link rel="stylesheet"` to style each page. We do this so that we only load the css needed for a given page. By default, all pages receive global.html. With front matter we include environmental stylesheets with `env: gaitq | patients | clinicians`. The existence of `page.env` triggers conditional.html. In our page markup we define our `env:`.

All pages get the global style along with their environment.
