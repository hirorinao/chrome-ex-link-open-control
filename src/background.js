var new_tab_mode;

chrome.tabs.onCreated.addListener(function(tab) {
  if (tab.url == 'chrome://newtab/')
    return;
  chrome.tabs.update((new_tab_mode == 'foreground') ? tab.id : tab.openerTabId, {
    selected: true
  });
});

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'open_in_new_tab') {
      new_tab_mode = request.mode;
      sendResponse({});
    }
  }
);
