// ==UserScript==
// @name         Google Redirect Notice
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Always view heise articles on one page.
// @author       https://github.com/soerenkoehler
// @match        *://www.google.com/url*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.querySelectorAll("a");
    for (var i = 0; i < links.length; i++ ) {
        var target = links[i].href;
        if( target.substr(0, 4) == "http" ) {
            window.location.href = target;
            return;
        }
    }

})();