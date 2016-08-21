var React=require("react");
var E=React.createElement;
var PT=React.PropTypes;

var TopRightMenu=React.createClass({
	contextTypes:{
		action:PT.func.isRequired
	},
	getInitialState:function(){
		return {breakby:"lb"}
	},
	toggleLayout:function(){
		var breakby=this.state.breakby=="lb"?"p":"lb"
		this.context.action("layout",breakby);
		this.setState({breakby});
	},
	toggleLineNumber:function(){
		this.context.action("toggleLineNumber",0);
	},
	render:function(){
		var label={"lb":"原書","p":"段落"}[this.state.breakby];
		return (
			E("div",{style:styles.container},
				E("div",{style:styles.viewcontrols},
					E("button",{onClick:this.toggleLineNumber},"行標"),
					E("button",{onClick:this.toggleLayout},label)
				)
			)
		);
	}
});

var styles={
	button:{fontSize:20,borderRadius:"10%"},
	selectedButton:{background:"blue",color:"white"},
	container:{position:"relative",zIndex:100,opacity:0.7},
	viewcontrols:{position:"absolute",right:20,top:5} //for scrollbar
}

module.exports=TopRightMenu;