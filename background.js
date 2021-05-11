const regex = /^https:\/\/www.gstatic.com\/images\/icons\/.+?\/.+?\/1x\//

browser.webRequest.onBeforeRequest.addListener(
    requestDetails => {
        if (requestDetails.originUrl.startsWith('https://mail.google.com') && regex.test(requestDetails.url)) {
            return {
                redirectUrl: requestDetails.url.replace('/1x/', '/2x/')
            };
        }
    },
    {urls: ["https://www.gstatic.com/*"], types: ["image"]},
    ["blocking"]
);
