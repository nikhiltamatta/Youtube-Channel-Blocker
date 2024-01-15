document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getBlockedChannels' }, function (response) {
        displayBlockedChannels(response);
      });
    });
  });
  
  function displayBlockedChannels(blockedChannels) {
    const blockedChannelsList = document.getElementById('blockedChannelsList');
  
    blockedChannels.forEach((channel) => {
      const li = document.createElement('li');
      li.textContent = channel;
      blockedChannelsList.appendChild(li);
    });
  }
  