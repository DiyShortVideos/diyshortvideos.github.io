var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var json_to_files  = require('metalsmith-json-to-files');
var headingsidentifier = require("metalsmith-headings-identifier");
var googleAnalytics = require('metalsmith-google-analytics');
var pdf = require('metalsmith-pdf');


Metalsmith(__dirname)
  .metadata({
    title: "DIY Short Videos",
    description: "Curated Do-it-Yourself Short Videos.",
    generator: "Metalsmith",
    url: "http://www.diyshortvideos.com",
    latitude: "43.6437147",
    longitude: "79.4085915",
    type: "website",
    image: "/img/ubersales-icon-Logo.svg"
  })

  .source('./src')
  .destination('./')
  .clean(false)
  .use(json_to_files({"source_path": "./json/"}))
  .use(markdown())
  .use(permalinks())
//
  .use(headingsidentifier())
//  .use(googleAnalytics('UA-42771649-1'))

  .use(layouts({
    engine: 'handlebars',
    "default": "layout.html",
    "directory": "./layouts/",
    "partials": "./layouts/partials/"
}))
  .build(function(err, files) {
    if (err) { throw err; }
  });
