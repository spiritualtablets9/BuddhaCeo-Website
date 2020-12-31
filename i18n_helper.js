/* 
* README.md of i18n.js
*
* https://github.com/mashpie/i18n-node/blob/master/README.md
*/
var i18n = require('i18n');

var defaultLocale = 'en-US';
var cookie = 'i18n_lang';
var localesInfo = {
    'en-US': {
        name: 'English',
        typographical_name: 'english'
    },
    'fr_FR': {
        name: 'French',
        typographical_name: 'français'
    },
}

var localeList = Object.keys(localesInfo);

i18n.configure({
    // setup some locales - other locales default to en silently
    locales: localeList,
  
    // sets a custom cookie name to parse locale settings from
    cookie: cookie,
  
    // where to store json files - defaults to './locales'
    directory: __dirname + '/locales',
  
    defaultLocale: defaultLocale,
  });

module.exports.i18n = i18n;
module.exports.localesInfo = localesInfo;
module.exports.defaultLang = defaultLocale;
module.exports.cookie_name = cookie;
