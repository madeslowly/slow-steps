---
---
# [Slow Steps, a Jekyll theme](https://www.gaitq.madeslowly.xyz/clinician/about/)

[![Ruby gem](https://badge.fury.io/rb/slow-steps.svg)](https://badge.fury.io/rb/slow-steps)

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/madeslowly/slow-steps/blob/master/LICENSE)

[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.7-blue.svg)](https://jekyllrb.com/)

A bold jekyll theme built for gaitQ. Designed to have two distinct styling, depending on current URL.

## Jekyll Theme Scaffolding

How this repo is organised and what the various files are. All posts, layouts, includes, stylesheets, assets, and whatever else is grouped  under the root folder. The compiled Jekyll site outputs to `_site/`, which is never pushed to this repo, see https://www.gaitq.madeslowly.xyz/. General flow starts with a `.md` file in our root. With Front Matter, we declare our layout which points to a structural `.html` file in `_layouts`. From here, the layout file can call in data from our `_config.yml` with `{{ site.variable }}` and from any of our `YAML` files in `_data/file.yml` with `{{ site.data.file.variable }}`. The layout can also pull in other structural html snippets from `_includes` with `{% raw %}{% include relative/path/file.html %}{% endraw %}`.

It is worth noting that _include files can also perform the tasks just described. So, for example, when the `deafult.html` layout is executed (the penultimate step for *all* `.md` files), the `head.html` snippet is called, which in turn calls `og-meta.html`. Based on our sites settings and any relevant Front Matter belonging to the calling file, `og-meta.html` compiles all our `og:meta` tags and passes them to `head.html` which after adding further code, passes on to our default layout where it is placed at the top of our webpages `html`.

```
https://github.com/madeslowly/slow-steps/
|
├─ _config.yml/                   # Website settings
|
├─ _data/                         # Site data
|  |  |
|  |  ├─ forms/                   # Inputs for MailChimp forms
|  |
|  ├─ copy.yml                    # Website copy
|  |
|  ├─ menu.yml                    # Menu structure
|
├─ _includes/                     # HTML and Liquid templating
|  |
|  ├─ branding/                   # Site branding SVGs
|  |  |
|  |  ├─ site__logo.svg           # Site wide logo
|  |
|  ├─ footer/                     # Site wide footers
|  |  |
|  |  ├─ footer.html         # Multi col footer
|  |  |
|  |  ├─ footer.html              # Simple footer
|  |
|  ├─ forms/                      # Form scaffolding
|  |  |
|  |  ├─ mc-register.html         # MailChimp registration form
|  |
|  ├─ head/                       # Header partials
|  |  |
|  |  ├─ descriptor/              # Site wide descriptors
|  |  |  |
|  |  |  ├─ og-meta.html
|  |  |  ├─ structured-data.html
|  |  |  ├─ twitter-meta.html
|  |  |    
|  |  ├─ env/                     # Env <link rel="stylesheet"
|  |  |  |
|  |  |  ├─ conditional.html      # Page env: condition --> gaitq_env.css
|  |  |
|  |  ├─ head.html                # Routine to collate header partials
|  |
|  ├─ navigation/                 # HTML and Liquid templating
|  |  |
|  |  ├─ global.html              # <nav> html. Pulls from site.data.menu.  Not included in error pages or landing page. Otherwise we pull everything out of menu.navigation and use css to display environmental navigation. This might not be the best (overheads and accessibility).
|  |
|  ├─ scripts.html                # JS scripts & closing body & html tags
|
├─ _layouts/                      # HTML and Liquid templating
|  |
|  ├─ env/                        # Environmental specific layouts
|  |  |
|  |  ├─ clinician.html           # Professionals and press
|  |  ├─ walk.html                 # Patients and carers
|  |  ├─ landing.html             # Landing page only
|  |
|  ├─ compress.html               # Final step for all pages. Strips html comments, carriage returns and white space.
|  |
|  ├─ default.html                # Wraps page content with header, nav, scripts and footer.
|  |
|  ├─ error-page.html             # HTTP error pages
|
├─ _plugins/                      # Custom Ruby plugins
|  |
|  ├─ ImageSizeFilter.rb/         # IN DEVELOPMENT - get image size on jekyll build so we can precisely control img positions and any svg overlays. We can also use the data in og:image:
|
├─ _sass/                         # Sass partials
|  |
|  ├─ colors/                     # Site color settings
|  |  |
|  |  ├─ env/                     # Environmental specific colors
|  |  |  |
|  |  |  ├─ walk.sass              # walk environmental colors
|  |  |
|  |  ├─ _variable.sass           # <nav> settings
|  |  ├─ burger.sass              # Mobile burger
|  |
|  ├─ navigation/                 # navbar partials
|  |  |
|  |  ├─ _variable.sass           # <nav> settings
|  |  ├─ burger.sass              # Mobile burger
|  |  ├─ mobile.sass              # Default nav CSS
|  |  ├─ desktop.sass             # Breakpoint 768 CSS
|  |  ├─ clinician.sass           # clinician nav CSS & Breakpoint 768
|  |  ├─ patients.sass            # Patients nav CSS & Breakpoint 768
|  |  ├─ gaitq.sass               # GaitQ nav CSS & Breakpoint 768
|  |
|  ├─ typography/                 # Typography partials
|  |  |
|  |  ├─ _variable.sass           # Typography settings
|  |  ├─ resets.sass              # User agent resets
|  |
|  ├─ landing.sass                # Landing page
|
├─ assets/                        # HTML and Liquid templating
|  |
|  ├─ css/                        # Sass imports
|  |  |
|  |  ├─ gaitq_global.sass        # Global CSS, included on ALL pages
|  |  ├─ gaitq_gaitq.sass         # GaitQ env CSS
|  |  ├─ gaitq_patients.sass      # Patient env CSS
|  |  ├─ gaitq_clinician.sass     # Clinician env CSS
|  |  ├─ gaitq_landing.sass       # Landing page CSS
|  |
|  ├─ img/                        # All our imagery
|  |
|  ├─ JS/                         # All our JavaScript
|  |
|  ├─ vendor/                     # Third party CSS and JS code, never edit these, bad things WILL happen! If we need to overwrite something we have to add our own CSS or JS to do so.
```
---

### Site Wide Configuration

`_config.yml` is where most variables are set.

#### `title:`

The global title of the website.

#### `subtitle:`

The global subtitle of the website.

#### Page Titling

Each pages is given a title according to,

```Liquid
{% if page.title %}
  {{ page.title }} | {{ site.title }}
{% else %}
  {{ site.title }} | {{ site.subtitle }}
{% endif %}
```

#### `description:`

Site wide description, used in head description, og:description, twitter:description and structured data. Overwritten by page front matter, `description:`

#### `url:`

Used to generate absolute URLs for sitemaps, feeds and for generating canonical URLs in a page's `<head>`. When developing locally either comment this out or use something like `http://localhost:4000` so all assets load properly. *Don't include a trailing `/`*.

Examples:

```yaml
url: "https://gaitq.github.io"
url: "http://localhost:4000"
url: "http://www.gaitq.com"
url: ""
```

#### `baseurl:`

Used when we are developing a partial.

#### `author:`

Author of this Jekyll project. Content authors can be added to _data/authors.yml and assigned in a pages front matter.

#### `postal_add:`

Postal address of GaitQ Ltd. Used in structured data.

#### `opening_hours:`

Used in structured data. This lets google know when we are open.

#### `logo:`

Site wide logo, used as a default image for Twitter and Facebook. Can be over written by a pages front matter: `image:`.

#### Google Analytics and Webmaster Tools

Google Analytics UA and Webmaster Tool verification tags can be entered under `owner` in `_config.yml`. For more information on obtaining these meta tags check [Google Webmaster Tools](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=35179) and [Bing Webmaster Tools](https://ssl.bing.com/webmaster/configure/verify/ownership) support.

### Navigation Links

To set what links appear in the top navigation edit `_data/menu.yml`. Use the following format to set the URL and title for as many links as you'd like.

```yaml
group_name:
  - name:  Page name
    url:   /pageURL.html
    env:   environment
    submenu:
      - name: Page name
        url:  /pageURL.html
```

We for loop  `group_name` = `navigation`. The `env:` controls where and how we see the navigation link and it's submenu contents. Currently we have three allowable `envs:`, `gaitq`, `clinician` and `patients`.

---
