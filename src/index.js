import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
var createReactClass = require('create-react-class'); //----this is for handling react 15.6.1 component error

//---------------------------------------------------
//-------------Below is for practice Conponent ------
//---------------------------------------------------

// var Movie = React.createClass({
// 	edit: function(){
// 		alert("here we go!")
// 	},
// 	remove: function(){
// 		alert("here we go!")
// 	},
// 	render: function(){
// 		return (<div className ="container">		
// 					<div>{this.props.children}</div>
// 					<button onClick={this.edit}className ="buttoner">edit</button>
// 					<button onClick={this.remove}className ="buttoner">remove</button>
// 				</div>
// 			);
// 	}
// });

// ReactDOM.render(<div>
// 					<Movie>the first</Movie>
// 					<Movie>the second</Movie>
// 				</div>, document.getElementById('example'));
// 				registerServiceWorker();



//---------------------------------------------------
//-------------Below is for practice State ------
//---------------------------------------------------

// var Movie = React.createClass({
// 	getInitialState: function(){
// 		return{checked: true}
// 	},
// 	handler: function(){
// 		this.setState({checked: !this.state.checked})
// 	},
// 	render: function(){
// 		var msg;
// 		if (this.state.checked){
// 			msg='checked'
// 		}else{
// 			msg='unchecked'
// 		}
// 		return (
// 			<div>
// 				<input type="checkbox" onChange = {this.handler} defaultChecked = {this.state.checked}/>
// 				<h3>checkbox is {msg}</h3>
// 			</div>
// 			);
// 	}
// });

// ReactDOM.render (<Movie/>,document.getElementById('example'));
// registerServiceWorker();


//---------------------------------------------------
//-------------Below is for practice props ------
//---------------------------------------------------
// var TextEdit = createReactClass({
// 	getInitialState: function(){
// 		return{editing: false}
// 	},
// 	edit: function(){
// 		this.setState({editing:true});
// 	},
// 	remove:function(){
// 		// alert("here we go");
// 		this.props.removecommentstext(this.props.index)
// 	},
// 	save: function(){
// 		// console.log(inputText);
// 		this.props.updatecommentstext(this.refs.newText.value,this.props.index)
// 		this.setState({editing:false});
// 	},
// 	editingrender:function(){
// 		return(
// 		<div>
// 		<textarea ref= "newText" defaultValue={this.props.children}></textarea>
// 		<button className="buttoner" onClick={this.save}>save</button>
// 		</div>
// 		);
// 	},
// 	nomalrender: function(){
// 		return(
// 		<div >
// 			<p>{this.props.children}</p>
// 			<button className="buttoner" onClick={this.remove}>remove</button>
// 			<button className="buttoner" onClick={this.edit}>edit</button>
// 		</div>
// 		);
// 	},
// 	render: function(){
// 		if(this.state.editing){
// 			return this.editingrender();
// 		}else{
// 			return this.nomalrender();
// 			}

// 	}
// });

// var Board = createReactClass({
// 	getInitialState:function(){
// 		return {
// 			comments:[]
// 		}
// 	},
// 	add:function(text){
// 		var arr = this.state.comments;
// 		// var i=this.state.comments.length;
// 		arr.push(text);
// 		this.setState({comments:arr});
// 		console.log(arr);
// 	},
// 	updatecomments:function(newword,i){
// 		var arr = this.state.comments;
// 		arr[i]= newword;
// 		this.setState({comments:arr});
// 	},

// 	removecomments:function(i){
// 		var arr = this.state.comments;
// 		arr.splice(i,1);
// 		this.setState({comments:arr});
// 	},

// 	indexcomments:function(text,i){
// 		return (<TextEdit key={i} index={i} updatecommentstext={this.updatecomments} removecommentstext={this.removecomments}>
// 					{text}
// 				</TextEdit>);
// 	},

// 	render:function(){
// 		return(<div>
// 				<button className="buttoner" onClick={this.add.bind(null,"Default text")}>ADD NEW COMMENT BOX</button>
// 				<div>
// 					{
// 						this.state.comments.map(this.indexcomments)
// 					}
// 				</div>
// 			</div>
// 			)
// 	}
// });

// ReactDOM.render(<Board/>, document.getElementById('example'));
// 				registerServiceWorker();


//---------------------------------------------------
//-------------Below is a litte projcect ------------
//---------------------------------------------------

var GenderSearch = createReactClass({
	render:function(){
		return (<div className = "GenderSearch">
					<text> Gender Search: </text>
					<select>
						<option value = '1'>Man</option>
						<option value = '2'>Famle</option>
					</select>
				</div>
			);
	}
});

var NameSearch = createReactClass({
	render:function(){
		return (<div className = "GenderSearch">
					<text > Name Search: </text>
					<input ></input>
				</div>
		);
	}

});

var ModifInfo = createReactClass({
	getInitialState:function(){
		return {
			 ItemArr:[{Name: ''},{Gender:''},{Math:''},{Language:''}],
			 row:[]
		};
	},
	// indexItems:function(){
	// 	// console.log(this.state.ItemArr);
	// 	// console.log(this.state.ItemArr[0].Name);
	// 	console.log(this.state.ItemArr)
	// 	if (this.state.ItemArr[0].Name === ''){
	// 		console.log("emt")
	// 	}else{
	// 		// console.log("full")
	// 	return(<ScoreItems updateItem = {this.state.ItemArr} />);
	// 		}
	// },
	ItemSave:function(){
		// ItemArr.push(this.inputName)
		var arr=this.state.ItemArr
		var ItemName = this.refs.inputName.value;
		var ItemGender = this.refs.optionValue.value;
		var ItemMath = this.refs.inputMath.value;
		var ItemLanguage = this.refs.inputLanguage.value;
		// console.log(i);
		// console.log(arr.Name)
		arr[0].Name=ItemName;
		arr[1].Gender=ItemGender;
		arr[2].Math=ItemMath;
		arr[3].Language=ItemLanguage;
		// console.log(arr);
		this.setState({ItemArr:arr});
		// console.log(arr);
		this.addrow();
	},
	addrow:function(){
		// var arr=this.props.updateItems;
		// console.log(arr);
		var text=this.state.ItemArr;
		console.log(text)
		var addrow = this.state.row;
		addrow.push(<ScoreTable key="pushItems" updateText = {text}/>);
		this.setState({row:addrow});
		// console.log(this.state)
	},

	render:function(){
		return (<div className = "GenderSearch">
					<text > Name: </text>
					<input ref='inputName'></input>
					<text > Gender: </text>
					<select ref = 'optionValue'>
						<option  value = 'Man'>Man</option>
						<option  value = 'Famle'>Famle</option>
					</select>
					<text > Math: </text>
					<input ref='inputMath'></input>
					<text > Language: </text>
					<input ref="inputLanguage"></input>
					<button className = "buttoner" onClick = {this.ItemSave}>Save</button>
					
					<table className = "table">
					
					  <tr>
					    <th>Name</th>
					    <th>Gender</th>
					    <th>Math</th>
					    <th>Language</th>
					    <th>Operation</th>
					  </tr>
					  
					  {this.state.row}
					  
					  
					</table>
					
				</div>
		);
	}

});

var ScoreTable = createReactClass({
	render:function(){
		var text=this.props.updateText;
		console.log(text);
		return (
				<table className = "table">
				  <tr>
				    <td>{text[0].Name}</td>
				    <td>{text[1].Gender}</td>
				    <td>{text[2].Math}</td>
				    <td>{text[3].Language}</td>
				    <td><button>Remove</button></td>
				  </tr>
				</table>
				
		);
	}

});

// var ScoreItems = createReactClass({
// 	getInitialState:function(){
// 		return{
// 		row:[]
// 		};
// 	},

// 	addrow:function(){
// 		// var arr=this.props.updateItems;
// 		// console.log(arr);
// 		var text=this.props.updateItem;
// 		console.log(text)
// 		var addrow = this.state.row;
// 		addrow.push(<ScoreTable updateText = {text}/>);
// 		this.setState({row:addrow});
// 		console.log(this.state)
// 	},

// 	render:function(){

// 		return( <div className = "GenderSearch">
// 				<table className = "table">
// 				<tbody>
// 				  <tr>
// 				    <th>Name</th>
// 				    <th>Gender</th>
// 				    <th>Math</th>
// 				    <th>Language</th>
// 				    <th>Operation</th>
// 				  </tr>
// 				  {this.state.row}
// 				  </tbody>
// 				</table>
// 				</div>

// 		);
// 	}

//  });

ReactDOM.render(
				<div>
				<GenderSearch/>
				<NameSearch/>	
				<ModifInfo/>
				</div>
				,document.getElementById('example'));
registerServiceWorker();
