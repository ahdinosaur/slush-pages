var select = require('dom-select')
var catFaces = require('cat-ascii-faces')

select("main > h2")
  .textContent = catFaces()
