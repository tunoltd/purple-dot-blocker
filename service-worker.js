// Copyright 2024 Tuno ltd
//
// Licensed under MITLicense.

'use strict';

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Blocked network request to ${e.request.url} on tab ${e.request.tabId}.`;
  console.log(msg);
});

console.log('Service worker started.');
