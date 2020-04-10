# PixiJS Boilerplate

A [PixiJS](https://pixijs.io/) development environment boilerplate (Github Template). With this boilerplate you're going to have an easy to develop environment with feature as hot reloading, minify, etc...

## What's Inside?

This application counts with all you need to start developing your game as fast as an `npm install`. It contains:

* PixiJS (5.1.6)
* Webpack with Dev Server and Hot Reloading
* **Auto Publish** to Github Page (gh-pages) to play your game
* Automatic Minify & Uglify of your code depending on your build type
* Public folder to put all your assets
* SASS Support

## Folder Structure

* src

Main game folder. The `index.js` is the Webpack entry point. In the `styles` you can put all of your styles using `sass`.

* public

In this folder you can put all of your assets that the game needs and is going to be used on `dev-server` and is going to be publish on the `gh-pages`

* templates

This is going to be the `index.html` that `webpack-dev-server` uses to load the game. It is using `EJS` by default

## Installation

Just install the package dependencies using `NPM`:

```
$ npm install
```

## Development

To run the development server you just need execute the next `NPM Script`:

```
$ npm run start
```

## Publish Game

Run the `npm script` call `publish`

```
$ npm run publish
```

This is going to automatically publish your application into your repository `gh-pages`

## Author

Ariel Rey
