Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch: function() {
		this._loadData();
    },
	
	// Load the data
	_loadData: function(){
		var myStore = Ext.create("Rally.data.wsapi.Store", {
			model: "User Story",
			autoLoad: true,
			listeners: {
				scope: this,
				load: function(myStore, myData, success) {					
					this._loadGrid(myStore);
				}
			},
			fetch: ["FormattedID", "Name", "ScheduleState"]
		});	
	},
	
	// Load the grid
	_loadGrid: function(myStoryStore){
		var myGrid = Ext.create("Rally.ui.grid.Grid", {
			store: myStoryStore,
			columnCfgs: ["FormattedID", "Name", "ScheduleState"]
		});
		this.add(myGrid);
	}
});
