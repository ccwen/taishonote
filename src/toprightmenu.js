var React=require("react");
var E=React.createElement;
var PT=React.PropTypes;

var TopRightMenu=React.createClass({
	contextTypes:{
		action:PT.func.isRequired
	},
	getInitialState:function(){
		return {breakby:"lb",pointer:"@t01p0011a0402+82"} //長阿含-->如是我聞
	},
	toggleLayout:function(){
		var breakby=this.state.breakby=="lb"?"p":"lb"
		this.context.action("layout",breakby);
		this.setState({breakby});
	},
	toggleLineNumber:function(){
		this.context.action("toggleLineNumber",0);
	},
	onChange:function(e){
		this.setState({pointer:e.target.value});
	},
	onKeyPress:function(e){
		if (e.key=="Enter") this.gotoRange();
	},
	gotoRange:function(){
		this.context.action("goto",this.state.pointer);
	},
	render:function(){
		var label={"lb":"原書","p":"段落"}[this.state.breakby];
		return (
			E("div",{style:styles.container},
				E("div",{style:styles.viewcontrols},
					E("input",{value:this.state.pointer,size:10,
						onKeyPress:this.onKeyPress,onChange:this.onChange}),
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