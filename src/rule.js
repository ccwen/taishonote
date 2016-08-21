var actionhandler=null;
var codec=require("../../cbeta-address/codec");//shoudl move to node_modules
var getFileStart=function(){
	return codec.pack("01p0001a0000");
}
var breakline=function(file,by){
	var breaker=file[by];
	var out="",offset=0;
	for (var i=0;i<breaker.length;i++){
		out+=file.content.substr(offset,breaker[i])+"\n";
		offset+=breaker[i];
	}
	return out;
}

var setActionHandler=function(_actionhandler){
	actionhandler=_actionhandler;
}

module.exports={setActionHandler,breakline,getFileStart,
	nextLine:codec.nextLine,formatPointer:codec.unpack};