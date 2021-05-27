# Color definitions

Everything here should be rgb(a) color definitions using sass variables,

```sass
$var-name: rgba(r, g, b, a)
```

## _variables.sass

Site wide color definitions, avoid changing these variables. If we want to change the color of an element then either using a pre-existing sass variable, or creating a new one, change the actual element css to the new sass color variable.

## _mixins.sass

Color combination mixins.

## collection.sass

Collection of the above definitions.

## data.sass

Theme colouring for data environments. We import collection.sass and define `$env-primary` and `$env-secondary`.

## walk.sass

Theme colouring for walk environments. We import collection.sass and define `$env-primary` and `$env-secondary`.
