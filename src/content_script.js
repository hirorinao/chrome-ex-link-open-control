$(document).ready(function() {
  $('a').live('mouseup', function(event) {
    if (event.button == 1) {
      // Middle Click
      chrome.extension.sendRequest({action: 'open_in_new_tab', mode: event.shiftKey ? 'background' : 'foreground'}, function(response){});
    }
  });
});
