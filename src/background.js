chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading' && changeInfo.url.startsWith("https://my.wgu.edu/courses/course/")) {
    chrome.tabs.sendMessage(tabId, {type: 'getDoc'}, function (doc) {
      console.log(doc);
    });
  }
});
