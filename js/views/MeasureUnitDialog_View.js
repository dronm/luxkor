/* Copyright (c) 2012 	Andrey Mikhalevich, Katren ltd.*//*		Description*///ф/** Requirements * @requires controls/ViewDialog.js*//* constructor */function MeasureUnitDialog_View(id,options){	options = options || {};		MeasureUnitDialog_View.superclass.constructor.call(this,		id,options);	var model_id = "MeasureUnitDialog_Model";	this.addDataControl(		new Edit(id+"_id",{"visible":false,"name":"id"}),		{"modelId":model_id,		"valueFieldId":"id",		"keyFieldIds":null},		{"valueFieldId":"id","keyFieldIds":null}	);	this.addDataControl(		new EditString(id+"_name",		{"attrs":{"maxlength":"25","size":10,"required":"required"},		"labelCaption":"Наименование:","name":"name"}		),		{"modelId":model_id,		"valueFieldId":"name",		"keyFieldIds":null},		{"valueFieldId":"name","keyFieldIds":null}	);	this.addDataControl(		new EditString(id+"_name_full",		{"attrs":{"maxlength":"100","size":50,"disabled":"disabled"},		"labelCaption":"Полное наименование:","name":"name_full"}		),		{"modelId":model_id,		"valueFieldId":"name_full",		"keyFieldIds":null},		{"valueFieldId":"name_full","keyFieldIds":null}	);	this.addDataControl(		new EditCheckBox(id+"_is_int",		{"attrs":{},		"labelCaption":"Только целое значение:","name":"is_int"}		),		{"modelId":model_id,		"valueFieldId":"is_int",		"keyFieldIds":null},		{"valueFieldId":"is_int","keyFieldIds":null}	);	}extend(MeasureUnitDialog_View,ViewDialog);