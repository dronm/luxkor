/* Copyright (c) 2016
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
 * @requires controls/View.js
*/

/* constructor */
function ProjectManager_View(viewId){
	this.m_viewId = viewId;
	var self = this;
	
	//current version
	(new EditString(viewId+"cur_version",{
		"labelCaption":"Current version:",
		"labelClassName":"control-label col-lg-3",
		"className":"input-group col-lg-2",
		"name":"cur_version",
		"buttonClear":false,
		"tableLayout":false,
		"attrs":{"required":"required"}
	})).toDOM();

	//version commit description
	(new EditText(viewId+"version_commit_descr",{
		"labelCaption":"Version commit description:",
		"labelClassName":"control-label col-lg-3",
		"className":"input-group col-lg-9",
		"name":"version_commit_descr",
		"buttonClear":false,
		"tableLayout":false,
		"rows":4,
		"attrs":{"required":"required"}
	})).toDOM();
	
	//create_symlinks
	(new Button(viewId+"create_symlinks",{
		caption:"Create symlinks",
		className:"btn btn-default",
		attrs:{
			title:"create all symbolik links"
		},
		onClick:this.evCreateSymLinks
	})).toDOM();

	//pull
	(new Button(viewId+"pull",{
		caption:"Pull from repository",
		className:"btn btn-default",
		attrs:{
			title:"Pull all files from repository"
		},
		onClick:this.evPull
	})).toDOM();

	//unify_js
	(new Button(viewId+"unify_js",{
		caption:"Unify all js,css for production",
		className:"btn btn-default",
		attrs:{
			title:"Build unified scripts for production"
		},
		onClick:this.evUnifyScripts
	})).toDOM();
	
	//build project
	(new Button(viewId+"build_project",{
		caption:"Build project",
		className:"btn btn-default",
		attrs:{
			title:"Build all project files (controllers, models, menus etc)"
		},
		onClick:this.evBuildProject
	})).toDOM();
	
	//setting current version
	var contr = new ProjectManager_Controller(new ServConnector(HOST_NAME));
	contr.run("get_version",{
		func:function(resp){
			self.onGetVersion(resp);
		}
	});
}
	
ProjectManager_View.prototype.evCreateSymLinks = function(){
	alert("Create links clicked!");
}

ProjectManager_View.prototype.evBuildProject = function(){
	alert("Build project clicked!");
}

ProjectManager_View.prototype.evPull = function(){
	alert("Pull!");
}

ProjectManager_View.prototype.evUnifyScripts = function(){
	alert("Unify scripts!");
},

ProjectManager_View.prototype.onGetVersion = function(resp){
	var m = resp.getModelById("Version_Model",true);
	if (m.getNextRow()){
		console.log("cur_version="+m.getFieldValue("version"));
		nd(this.m_viewId+"cur_version").value = m.getFieldValue("version");		
	}
}
