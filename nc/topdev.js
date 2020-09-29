// ==UserScript==
// @name         TopDev NoMoreExpand
// @version      0.1
// @description  Remove Expand... button from TopDev site
// @author       You
// @match        *://*.topdev.vn/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  setTimeout(function() {  
    console.log('expandLink fucking up...');
    var anoyBtn = jQuery('.bbCodeBlock-expandLink');
    anoyBtn.prev().attr('style', '');
    anoyBtn.remove();
  }, 500);
})();