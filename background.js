browser.webRequest.onBeforeRequest.addListener(
    requestDetails => {
        if (requestDetails.originUrl.startsWith('https://mail.google.com') && requestDetails.url.startsWith('https://www.gstatic.com/images/icons/material/system/1x')) {
            return {
                redirectUrl: requestDetails.url.replace(
                    'https://www.gstatic.com/images/icons/material/system/1x',
                    'https://www.gstatic.com/images/icons/material/system/2x')
            };
        }
    },
    {urls: ["https://www.gstatic.com/*"], types: ["image"]},
    ["blocking"]
);
