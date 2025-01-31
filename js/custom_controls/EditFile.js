/**	
 * @author Andrey Mikhalevich <katrenplus@mail.ru>, 2022
 */
 
 function EditFile(id,options){
	options = options || {};	
	
	this.m_onDownload = options.onDownload;
	this.m_onDeleteFile = options.onDeleteFile;
	this.m_multipleFiles = (options.multipleFiles!=undefined)? options.multipleFiles:false;
	this.m_onFileAdded = options.onFileAdded;
	this.m_onFileSigAdded = options.onFileSigAdded;
	this.m_onFileDeleted = options.onFileDeleted;
	
	this.m_allowedFileExtList = (options.allowedFileExtList!=undefined&&CommonHelper.isArray(options.allowedFileExtList))? options.allowedFileExtList:null;
	this.m_allowedFileTypeList = (options.allowedFileTypeList!=undefined&&CommonHelper.isArray(options.allowedFileTypeList))? options.allowedFileTypeList:null;
	
	this.m_showHref = (options.showHref!=undefined)? options.showHref:true;
	this.m_showPic = (options.showPic!=undefined)? options.showPic:false;
	
	this.setContTagName(options.contTagName || "DIV");	
	
	this.m_files = [];
	
	var self = this;

	var init_val;
	if (options.value){
		init_val = options.value;
		options.value = undefined;
	}
	
	//
	options.addElement = function(){
		this.m_ctrlFileCont = new ControlContainer(id+"_file_cont", this.getContTagName())

		this.addElement(this.m_ctrlFileCont);
		
		if (options.labelCaption){
			this.addElement(new Control(id+":label","LABEL",{
				"value":options.labelCaption,
				"className":options.labelClassName
			}));
		}
			
		var file_ctrl_opts = {
			"attrs":{"type":"file", "style":"display:none;"},
			"events":{
				"change":function(){
					self.fileAdded();
				}
			}
		}
		if (this.m_multipleFiles){
			file_ctrl_opts.attrs = file_ctrl_opts.attrs || {};
			file_ctrl_opts.attrs.multiple = "multiple";
		}
		this.m_ctrlFile = new Control(id+"_file","INPUT",file_ctrl_opts)
		this.addElement(this.m_ctrlFile);
		
		this.addElement(new ButtonCtrl(id+":add",{
			"glyph":"glyphicon-plus",
			"title":"Выбрать файл",
			"onClick":function(){
				$(self.m_ctrlFile.getNode()).click();
			}
		}));
	}
	EditFile.superclass.constructor.call(this,id,"DIV",options);
	
	if (init_val){
		this.setInitValue(init_val);
	}	
}
extend(EditFile,ControlContainer);

EditFile.prototype.getContTagName = function(){
	return this.m_contTagName;
}
EditFile.prototype.setContTagName = function(v){
	this.m_contTagName = v;
}

EditFile.prototype.getValue = function(){
	return this.m_files.length? this.m_files : null;
}

EditFile.prototype.getFiles = function(){
	return this.m_files;
}

EditFile.prototype.setValue = function(v){	
	this.m_files = [];
	this.m_ctrlFile.getNode().value="";
	//console.log("EditFile.prototype.setValue")
	//console.dir(v)
	
	if (v && !CommonHelper.isArray(v) && v.id && v.name && v.size){
		var el = v;
		v = [el];
	}
	
	if (v && CommonHelper.isArray(v)){
		this.m_ctrlFileCont.clear();
		for (var i=0;i<v.length;i++){
			v[i].uploaded = true;
			this.addFile(v[i],true);
		}
		this.m_ctrlFileCont.toDOM(this.m_node);
	}
	this.m_modified = false;
}

EditFile.prototype.setInitValue = function(v){	
	this.setValue(v);
}

EditFile.prototype.deleteFileFromDOM = function(fileId){
	var cont = this.m_ctrlFileCont;
	//console.log("FileId="+fileId)
	if (this.m_multipleFiles){
		for (var i=0;i<this.m_files.length;i++){
			if (this.m_files[i] && this.m_files[i].file_id && this.m_files[i].file_id==fileId){
				delete this.m_files[i];
				this.m_files[i] = undefined;
				break;
			}
		}
		cont.delElement(fileId);
		cont.delElement(fileId+"-href");
		cont.delElement(fileId+"-del");
		if (this.m_showPic){
			cont.delElement(fileId+"-preview");
		}
	}
	else{
		this.m_files = [];
		cont.clear();
	}
	
	cont.toDOM();
	
	if (this.m_onFileDeleted)this.m_onFileDeleted();
}

EditFile.prototype.getModified = function(){
	return this.m_modified;
}
EditFile.prototype.setValid = function(){
}
EditFile.prototype.reset = function(){
	this.setValue(null);
	this.m_ctrlFileCont.clear();
	this.m_ctrlFileCont.toDOM();
	
}

EditFile.prototype.setEnabled = function(v){	
	EditFile.superclass.setEnabled.call(this,v);
	var hrefs = DOMHandler.getElementsByAttr("true", this.m_node, "download_href", false);
	for(var i=0;i<hrefs.length;i++){
		DOMHandler.delAttr(hrefs[i],"disabled");
	}
}

EditFile.prototype.fileAdded = function(){	
//alert("EditFile.prototype.fileAdded")
	var fl_list = this.m_ctrlFile.getNode().files;

	if (!this.m_multipleFiles && fl_list.length>1){
		throw new Error(this.ER_MULTIPLE_FILES_NOT_ALLOWED);
	}
	
	if (!this.m_multipleFiles){
		this.m_files = [];
	}
	
	if(this.m_allowedFileExtList){
		//extension list
		var ext_ar = fl_list[fl_list.length-1].name.split(".");
		if(!ext_ar.length || ext_ar.length<2){
			throw new Error(this.ER_EXT_NOT_DEFINED);
		}
		if(CommonHelper.inArray(ext_ar[ext_ar.length-1].toLowerCase(),this.m_allowedFileExtList)==-1){
			throw new Error(CommonHelper.format(this.ER_EXT_NOT_ALLOWED,ext_ar[ext_ar.length-1]));
		}
	}
	if(this.m_allowedFileTypeList && fl_list[fl_list.length-1].type){		
		if(CommonHelper.inArray(fl_list[fl_list.length-1].type,this.m_allowedFileTypeList)==-1){
			throw new Error(CommonHelper.format(this.ER_TYPE_NOT_ALLOWED,fl_list[fl_list.length-1].type));
		}
	}
						
	var ctrls_to_add = {};
	for (var fi=0;fi<fl_list.length;fi++){
		var fl = fl_list[fi];
		
		fl.file_id = CommonHelper.uniqid();
		this.m_files.push(fl);
		ctrls_to_add[fl.name] = {
			"id":fl.file_id,
			"name":fl.name,
			"size":fl.size,
			"file_uploaded":false,
			"file_signed":false,
			"signatures":[]
		};
	}
	for (var n in ctrls_to_add){
		this.addFile(ctrls_to_add[n]);
		if (this.m_onFileAdded){
			this.m_onFileAdded();
		}		
	}
	this.m_ctrlFileCont.toDOM();
	
	this.m_modified = true;
	
	//console.dir(this.m_files)

}

EditFile.prototype.addFile =  function(fileInf){
//console.dir(fileInf)
//debugger
	var cont = this.m_ctrlFileCont;
	if (!this.m_multipleFiles){
		cont.clear();
	}
	
	var file_template_opts = {
		"file_uploaded":fileInf.uploaded,
		"file_not_uploaded":!fileInf.uploaded,
		"file_deletable":(this.m_onDeleteFile)? true:false,
		"name":fileInf.name,
		"file_size_formatted":CommonHelper.byteFormat(fileInf.size)
	};
	CommonHelper.merge(file_template_opts,this.m_fileInfTemplateOptions||{});
	var file_opts = {
		//"template":this.m_fileInfTemplate,
		//"templateOptions":file_template_opts,
		"attrs":{
			"class":"orderAttachCont"
		}
	};
	/*
		"onClick":this.m_onDownload?
			function(){
				;
			}
			: null
	*/
	var file_ctrl = new ControlContainer(fileInf.id, "DIV", file_opts);
	file_ctrl.isFileControl = true;
	
	
	var self = this;
	
	if(this.m_showHref){
		file_ctrl.addElement(new Button(fileInf.id+"-href",{
			"attrs":{"class":"","download_href":"true","file_id":fileInf.id,"file_uploaded":fileInf.uploaded},
			"onClick":function(e){
				e.preventDefault();
				if (this.getAttr("file_uploaded")=="true"){
					self.m_onDownload(this.getAttr("file_id"));				
				}
			}
		}));
	}
	
	if (this.m_onDeleteFile){		
		file_ctrl.addElement(new Button(fileInf.id+"-del",{
			"caption":"X",
			"attrs":{"file_id":fileInf.id,"file_uploaded":fileInf.uploaded, "title":"Удалить файл"},
			"onClick":function(){				
				if (this.getAttr("file_uploaded")=="true"){					
					var file_id = this.getAttr("file_id");
					self.m_onDeleteFile(						
						file_id,
						function(){
							self.m_modified = false;
							self.deleteFileFromDOM(file_id);
						}
					);
					
				}
				else{
					self.deleteFileFromDOM(this.getAttr("file_id"));
				}
			}
		}));
	}
	
	if (this.m_showPic){		//&&fileInf.dataBase64
		file_ctrl.addElement(new Control(fileInf.id+"-preview","img",{
			"attrs":{"style":"cursor:pointer;", "title":"Скачать файл", "src":"data:image/png;base64, "+fileInf.dataBase64},
			"events":{
				"click":function(){
					self.m_onDownload(fileInf.id);				
				}
			}
		}));
	}	
		
	cont.addElement(file_ctrl);
}

