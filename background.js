'use strict';

function init()
{
    browser.tabs.onActivated.addListener(function(tab)
    {
        browser.pageAction.show(tab.tabId);
    })

    browser.pageAction.onClicked.addListener(function(_)
    {
        downloadAllImageTabs();
    })
}

function downloadAllImageTabs()
{
    browser.tabs.query({}).then(function(tabs)
    {
        for (var tab of tabs)
        {
            if (isImageTab(tab))
            {
                downloadTab(tab);
            }
        }
    });
}

function isImageTab(tab)
{
    let url = tab.url;

    return url.endsWith(".png")
        || url.endsWith(".jpeg")
        || url.endsWith(".jpg")
        || url.endsWith(".gif");
}

function downloadTab(tab)
{
    let url = tab.url;

    browser.downloads.download({
        url: url
    });
}

init()