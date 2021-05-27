# Header _includes

Everything we place in a pages header originates here.

## descriptors

Descriptive stuff that describes the website, the company, the developer and the particular page.

### Global includes

#### Open Graph protocol - og-meta.html

Mostly used by facebook to understand what a given page is all about. This is how we control our content when posted on facebook. Thumbs and descriptions are taken from page front matter, if that doesn't exist we default to site settings in _config.yml.

If the page is part of a blog, we change `og:type` from website to article and add details from front matter.

We have the option to include a fb:app_id.

#### Twitter Meta - twitter-meta.html

Similar to og-meta, we control how our content appears on Twitter. We look for data in pages front matter first then default to site data.

#### Structured Data - structured-datd.html

This is how we control the indexing of our pages with search engines, in particular Google.

## env

### conditional.html

Conditional `<link rel="stylesheet"` to style each environment. We do this so that we only load the css needed for a given page. All pages get gaitq_global.css. With front matter we include environmental stylesheet with `env: walk | data`. The existence of `page.env` triggers conditional.html. 
