
Ext.define("Tunes.view.main.Main", {
    extend: "Ext.panel.Panel",
    xtype: 'main',
    requires: [
        "Tunes.view.main.MainController",
        "Tunes.view.main.MainModel",
        'Ext.plugin.Viewport',
        "Tunes.view.View"
    ],
    foo:12,
    controller: "main-main",
    viewModel: {
        type: "main-main"
    },
     layout:'fit',
     items: [{
    xtype: 'tunesview',
         listeners: {
        itemclick: 'onShowPreview'},
        bind: {
            store: '{tunes}'
        }
    }]
});
