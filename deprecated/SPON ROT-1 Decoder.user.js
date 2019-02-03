// ==UserScript==
// @name         SPON ROT-1 Decoder
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  decodes ROT-1 encoding of <p>-Elements marked as 'obfuscated'
// @author       https://github.com/soerenkoehler
// @match        *://www.spiegel.de/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    decodeAll();
    removeBlur();
    removeIntro();
})();

function removeBlur() {
    var blurredblocks = document.querySelectorAll('div.obfuscated-content');
    for (var i = 0; i < blurredblocks.length; i++ ) {
        unblur(blurredblocks[i]);
    }
}

function unblur(node) {
    node.setAttribute("class", "");
}

function removeIntro() {
    var introblocks = document.querySelectorAll('p.js-spiegelplus-obfuscated-intro');
    for (var i = 0; i < introblocks.length; i++ ) {
        hideIntro(introblocks[i]);
    }
}

function hideIntro(node) {
    node.setAttribute("style", "display:none;");
}

function decodeAll() {
    var paragraphs = document.querySelectorAll('p.obfuscated');
    for (var i = 0; i < paragraphs.length; i++ ) {
        decodeChildNodes(paragraphs[i]);
    }
}

function decodeChildNodes(node) {
    var childs = node.childNodes;
    for (var i = 0; i < childs.length; i++) {
        var child = childs[i];
        if (child.nodeType === 3) {
            child.data = decodeString(child.data);
        } else if (child.nodeType === 1) {
            if(!hasCssClass(child, "text-link-int") &&
               !hasCssClass(child, "text-link-ext") &&
               !hasCssClass(child, "lp-text-link-int") &&
               !hasCssClass(child, "lp-text-link-ext") &&
               !hasCssClass(child, "spCelink")) {
                decodeChildNodes(child);
            }
        }
    }
}

function decodeString(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        result += mapChar(text.charCodeAt(i));
    }
    return result;
}

function mapChar(code) {
    if (code == 177) {
        return '&';
    } else if (code == 178) {
        return '!';
    } else if (code == 180) {
        return ';';
    } else if (code == 181) {
        return '=';
    } else if (code == 32) {
        return ' ';
    }
    return String.fromCharCode(code - 1);
}

function hasCssClass(elementNode, requiredCssClass) {
    var normalizedClassAttribute = " " + elementNode.getAttribute("class") + " ";
    var normalizedRequiredCssClass = " " + requiredCssClass + " ";
    return normalizedClassAttribute.indexOf(normalizedRequiredCssClass) > 0;
}