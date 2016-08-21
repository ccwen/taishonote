var React=require("react");
var E=React.createElement;
var PT=React.PropTypes;
var TwoColumnMode=require("ksana2015-parallel").TwoColumnMode;

var rule=require("./rule");
var leftDocs=[{name:"T01/T01n0001_001",label:"經",rule},
{name:"lun",label:"論",rule}],
 rightDocs=[{name:"T01/T01n0001_001",label:"經",rule},
 {name:"lun",label:"論",rule}];
// ,{name:"eng",label:"英",rule}];
var leftDoc="T01/T01n0001_001",rightDoc="",
leftView="taisho",rightView="taisho",
leftMenu=require("./toprightmenu"),rightMenu=null;

var maincomponent = React.createClass({
  getInitialState:function() {
    return {};
  }
  ,render: function() {
    return E(TwoColumnMode,{
      leftDocs,rightDocs,leftDoc,rightDoc,
      leftMenu,rightMenu,leftView,rightView});
  }
});
module.exports=maincomponent;