# slush-pages

[![Build Status](https://secure.travis-ci.org/ahdinosaur/slush-pages.png?branch=master)](https://travis-ci.org/ahdinosaur/slush-pages) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-pages.png)](http://badges.enytc.com/for/npm/slush-pages)

> a slush generator for static pages using browserify

## Getting Started

Install `slush` and `slush-pages` globally:

```bash
$ npm install -g slush slush-pages
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-pages
```

Run the generator from within the new folder:

```bash
$ cd my-slush-pages && slush pages
```

Woo! Check out the generated README for more usage information.

## Adding ES6

Install babelify and create a .babelrc file with the es2015 preset:
```
$ npm i --save-dev babelify babel-preset-es2015
$ echo '{ "presets": ["es2015"] }' > .babelrc
```

Edit the package.json scripts to use babelify:

```javascript
"start": "budo index.js -t babelify -d --serve bundle.js --live",
"build": "browserify index.js -t babelify -o bundle.js -g uglifyify",
"test": "browserify test.js -t babelify | smokestack | tap-spec",                     
```

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).
