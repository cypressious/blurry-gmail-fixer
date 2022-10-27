browser.webRequest.onBeforeRequest.addListener(
    ({ originUrl, url }) => {
        if (!originUrl.startsWith('https://mail.google.com')) {
            return;
        }

        if (url.endsWith('1x.png')) {
            return {
                redirectUrl: url.replace('1x.png', '2x.png')
            };
        }

        if (url.endsWith('.png') && url.includes('/1x/')) {
            return {
                redirectUrl: url.replace('/1x/', '/2x/')
            };
        }

    },
    { urls: ['https://*.gstatic.com/*'], types: ['image'] },
    ['blocking']
);
