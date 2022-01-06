let redirectURL = 'https://www.github.com';
const blockedURLs = ["redscarepod", "stupidpol", "askanamerican", "moderatepolitics", "politicalcompassmemes", "actualpublicfreakouts", "combatfootage", "twitter", "tumblr"]; 

// A listener that checks when a new URL is entered
chrome.tabs.onUpdated.addListener( function (tabID, changeInfo, tab) {
    console.log("Checking URL: " + changeInfo.url)
    if (changeInfo.url) {
        blockedURLs.forEach(redirectUser, changeInfo.url);
    };
});

// if a blocked URL string is detected, redirect to the chosen site
function redirectUser(item, index, arr) {
    if (this.toLowerCase().includes(item)) {
        console.log("found a match...")
        chrome.tabs.update(undefined, {url : redirectURL});
    };
    //chrome.notifications.create("Hello World!")
};