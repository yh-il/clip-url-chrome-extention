chrome.contextMenus.create({
    title: "titleとurlを表示",
    onclick: function(info, tab) {
        var title = tab.title;
        var url = tab.url;
        alert(title + '\n' +  url);
    }
});

