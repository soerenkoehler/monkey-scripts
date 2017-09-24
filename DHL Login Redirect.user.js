// ==UserScript==
// @name         DHL Login Redirect
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Redirect to paket.de since login on dhl.de does not work.
// @author       https://github.com/soerenkoehler
// @match        *://www.dhl.de/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = 'https://www.paket.de/pkp/appmanager/pkp/desktop?_nfpb=true&_nfls=false&_pageLabel=pkp_portal_page_login&_windowLabel=portletInstance_customerLogin';
})();