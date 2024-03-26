var register = 
[
'microsoft.com', 
'google.com',
'investopedia.com',
'groww.in'
];


chrome.runtime.sendMessage({
  type: 'runScript',
  hostname: window.location.hostname.replace("www.",""),
  registered: register.includes(window.location.hostname.replace("www.",""))
});
