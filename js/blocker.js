let redirectURL = 'cnn.com';
const blockedURLs = ["redscarepod", "stupidpol", "askanamerican", "moderatepolitics", "politicalcompassmemes"]; 

// A listener that checks when a new URL is entered
chrome.tabs.onUpdated.addListener( function (tabID, changeInfo, tab) {
    if (changeInfo.url) {
        blockedURLs.forEach(redirectUser, changeInfo.url);
    };
});

// if a blocked URL string is detected, redirect to the chosen site
function redirectUser(item, index, arr) {
    console.log(this);
    if (this.toLowerCase().includes(item)) {
        chrome.tabs.update(undefined, {url : redirectURL});
    };
};