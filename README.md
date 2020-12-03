---
---
# Jekyll project for GaitQ

This repo only deals with the website navigation and structure. We have three distinctive environments, general GaitQ pages, content that is specific to a customer of GaitQ and content for professionals and the technically curious.

## Scaffolding

How this repo is organised and what the various files are. All posts, layouts, includes, stylesheets, assets, and whatever else is grouped nicely under the root folder. The compiled Jekyll site outputs to `_site/`, which is never pushed to this repo, see https://www.gaitq.madeslowly.xyz/navbar.

```
https://github.com/madeslowly/GaitQ-Navigation/
|
├─ _config.yml/                   # Jekyll build settings, site. ...
|
├─ _data/                         # Site wide data, site.data. ...
|  |
|  ├─ menu.yml                    # Menu structure for GaitQ.com
|
├─ _includes/                     # HTML and Liquid templating
|  |
|  ├─ head/                       # Header partials
|  |  |
|  |  ├─ descriptor/              # Site wide descriptions
|  |  |  |
|  |  |  ├─ og-meta.html
|  |  |  ├─ structured-data.html
|  |  |  ├─ twitter-meta.html
|  |  |    
|  |  ├─ styles/                  # Global & local stylesheets, loaded in this order.
|  |  |  |
|  |  |  ├─ global.html           # We include gaitq_global.css site wide
|  |  |  ├─ conditional.html      # Page env: condition --> gaitq_env.css
|  |  |  ├─ landing.html          # Landing page only --> gaitq_landing.css
|  |  |
|  |  ├─ head.html                # Routine to collect header partials, page.env and page.layout dependencies
|  |
|  ├─ navigation/                 # HTML and Liquid templating
|  |  |
|  |  ├─ global.html              # <nav> html. Pulls from site.data.menu
|  |
|  ├─ scripts.html                # JS scripts & closing body & html tags
|
├─ _layouts/                      # HTML and Liquid templating
|  |
|  ├─ enviroments/                # Environmental specific layouts, passed onto default.html after processing
|  |  |
|  |  ├─ clinicians.html          # Professionals and press
|  |  ├─ patients.html            # Patients and carers
|  |  ├─ gaitq.html               # Generic GaitQ, applies to all GaitQ submenu pages
|  |
|  ├─ landing.html                # Landing page. Passed onto default.html after processing
|  |
|  ├─ default.html                # Wraps page content with header, nav and scripts. For all pages, also this is where Jekyll looks if no Front Matter def. passed onto compress.html after processing.
|  |
|  ├─ compress.html               # Final step for all pages. Strips html comments, carriage returns and white space.
|
├─ _posts/                        # Blog entries, undeveloped
|
├─ _sass/                         # Sass partials
|  |
|  ├─ navigation/                 # navbar partials
|  |  |
|  |  ├─ _variable.sass           # <nav> settings
|  |  ├─ burger.sass              # Mobile burger
|  |  ├─ mobile.sass              # Default nav CSS
|  |  ├─ desktop.sass             # Breakpoint 768 CSS
|  |  ├─ clinicians.sass          # Clinicians nav CSS & Breakpoint 768
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
|  ├─ vendor/                     # Third party CSS and JS code, never edit these, bad things WILL happen! If we need to overwrite something we add our own CSS or JS to do so.
```
---

### Site Wide Configuration

`_config.yml` is where most variables are set.

#### title:

The global title of the website.

#### subtitle:

The global subtitle of the website.

#### Page Titling

Pages are given titles according to,

```Liquid
{% if page.title %}
  {{ page.title }} | {{ site.title }}
{% else %}
  {{ site.title }} | {{ site.subtitle }}
{% endif %}
```

#### description:

Site wide description, used in head description, og:description, twitter:description and structured data. Overwritten by page front matter, `description:`

#### url:

Used to generate absolute URLs for sitemaps, feeds and for generating canonical URLs in a page's `<head>`. When developing locally either comment this out or use something like `http://localhost:4000` so all assets load properly. *Don't include a trailing `/`*.

Examples:

```yaml
url: "https://gaitq.github.io"
url: "http://localhost:4000"
url: "http://www.gaitq.com"
url: ""
```

#### baseurl:

Used when we are developing a partial.

#### author:

Author of this Jekyll project. Content authors can be added to _data/authors.yml and assigned in a pages front matter.

#### postal_add:

Postal address of GaitQ Ltd. Used in structured data.

#### opening_hours:

Used in structured data. This lets google know when we are open.

#### logo

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

We for loop  `group_name` = `navigation`. The `env:` controls where and how we see the navigation link and it's submenu contents. Currently we have three allowable `envs:`, `gaitq`, `clinicians` and `patients`.

---
