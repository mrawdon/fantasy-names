fantasy-names
===

A fantasy name and description generator.

## Usage

    npm install fantasy-names [-g]

    fantasy-names diablo demons 10 0

    echo -e "var names = require('fantasy-names');\nconsole.log(names('diablo', 'demons', 10, 0));" > names.js
    node names.js

Typically type 0=female, and 1=male. You can supply a string seed as the fith argument.

## Full List
Create lists from wikipedia character pages with
var char=[];$('p a').each((i,a)=>{var title =$(a).attr('title'); if(title.toLowerCase().indexOf('list')<0){char.push(title.indexOf('(') >= 0 ? title.substring(0,title.indexOf('(')) : title)}});JSON.stringify(char)