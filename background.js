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
    // this should allow finding images with extra stuff added to them
    // like i.imgur.com/foo.jpg?maxres=default
    // 
    // There is a better way, because firefox knows when an image is an image
    // the title of that tab will change to
    // <title> (XXX IMAGE)
    // Why can't I have this information?
    // This is hacky BS and everyone knows it.
    //
    // Note also that if a tab has been 'zombified'
    // this function will report a false-negative, because zombie
    // tabs always report 'about:blank'
    let url = new URL(tab.url).pathname.toLowerCase();

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
