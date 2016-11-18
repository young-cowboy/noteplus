import DB from "./common/db";

chrome.contextMenus.create({
    "title": "Save into Noteplus",
    contexts : ["frame", "selection", "link", "editable"] ,
    onclick : function (e){
        let text = e.selectionText;
        let url = e.pageUrl;

        // chrome.runtime.sendMessage({selectionText, pageUrl},function(response){});

        DB.insert({
            text : text,
            url : url,
            id : new Date().getTime() + parseInt(Math.random() * 10000),
            createTime : new Date().getTime()
        });
    }
});

