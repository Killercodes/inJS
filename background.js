chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'runScript') {
    const scriptName = `${request.hostname}.js`;
    if (request.registered === true) {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        files: [`./scripts/${scriptName}`]
      }).catch(error => {
        console.log(`Error executing script: ${error.message}`);
      });
    } else {
      console.log(`No script found for ${request.hostname}`);
    }
  }
});


