/* Copyright (c) 2014
	Andrey Mikhalevich, Katren ltd.
*/
/*	
	Description
*/
//ф
/** Requirements
*/

/* constructor */
function BtnOrderSetFilter(options){	
	var id = uuid();
	options.caption = "Фильтр";
	options.attrs={"title":"открыть фильтр"};
	options.onClick = function(){		
		options.grid.getFilter().open();
	};	
	
	BtnOrderSetFilter.superclass.constructor.call(this,
		id,options);
}
extend(BtnOrderSetFilter,Button);
