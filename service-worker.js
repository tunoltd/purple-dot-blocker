// Copyright 2024 Tuno ltd
//
// Licensed under MITLicense.

// Blocks any requests from purpledotprice.com
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["*://*.purpledotprice.com/*"]},
    ["blocking"]
  );
