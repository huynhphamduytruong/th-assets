// ==UserScript==
// @name         TopDev kick anoying buttons
// @version      0.1
// @description  try to take over the world!
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