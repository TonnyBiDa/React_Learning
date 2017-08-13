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
var i=0;
var StudentScoreTable = createReactClass({
	getInitialState:function(){
		return{NameFliter:'',
				GenderFliter: '0'
				}
	},
	onNameChange:function(Name){
		this.setState({NameFliter:Name});
	},
	onGenderChange:function(Gender){
		this.setState({GenderFliter:Gender});
		// console.log(this.state.GenderFliter);
	},
	render:function(){
		return(
				<div>
				<GenderSearch onGenderChange = {this.onGenderChange}/>
				<NameSearch onNameChange={this.onNameChange}/>	
				<ModifInfo nameFilter={this.state.NameFliter} GenderFliter={this.state.GenderFliter}/>
				</div>
			)
	}
})


var GenderSearch = createReactClass({
	onFocus:function(event){
		// console.log(event.target.value);
		this.props.onGenderChange(event.target.value);
	},
	render:function(){
		return (<div className = "GenderSearch">
					<text> Gender Search: </text>
					<select onChange={this.onFocus}>
						<option value = '0' >All</option>
						<option value = '1' >Man</option>
						<option value = '2'>Famle</option>
					</select>
				</div>
			);
	}
});

var NameSearch = createReactClass({

	updachange:function(event){
		// this.setState({Search:event.target.value.substr(0,10)});
		this.props.onNameChange(event.target.value.substr(0,10));
		console.log(event.target.value);
		// console.log(event.target.value);
	},
	render:function(){
		return (<div className = "GenderSearch">
					<text > Name Search: </text>
					<input onChange = {this.updachange}></input>
				</div>
		);
	}

});

var ModifInfo = createReactClass({
	getInitialState:function(){
		return {
			 addarr:[],
			 
		};
	},

	ItemSave:function(){
		var arr={};
		var ItemName = this.refs.inputName.value;
		var ItemGender = this.refs.optionValue.value;
		var ItemMath = this.refs.inputMath.value;
		var ItemLanguage = this.refs.inputLanguage.value;

		arr.Id=i;
		arr.Name=ItemName;
		arr.Gender=ItemGender;
		arr.Math=ItemMath;
		arr.Language=ItemLanguage;

		var sumarr = this.state.addarr;
		sumarr.push(arr);
		this.setState({addarr:sumarr});
		console.log(this.state.addarr);
		i++;
	},

	render:function(){
		var scoreNotes=[];
		var nameFilter=this.props.nameFilter;
		var genderFilter=parseInt(this.props.GenderFliter);
		console.log(genderFilter);
		console.log(nameFilter);
		 // if (genderFilter==='1'){console.log("ogogog")};
		var GENDER=['All','Man','Famle'];
		this.state.addarr.map(function(scoreitems){
			// console.log(nameFilter);
			if (nameFilter===''&& genderFilter===0){
			console.log("fofofo");
			scoreNotes.push(<Line key={scoreitems.Id} score={scoreitems}/>);
			}
			if (nameFilter!=='' && genderFilter===0){
			if(scoreitems.Name.indexOf(nameFilter)> -1){
				scoreNotes.push(<Line key={scoreitems.Id} score={scoreitems}/>);
				}
			}
			if (nameFilter ==='' && genderFilter!==0){
				if (GENDER[genderFilter]===scoreitems.Gender){
					scoreNotes.push(<Line key={scoreitems.Id} score={scoreitems}/>);
				}
			}
			if (nameFilter!=='' && genderFilter!==''){
				if (GENDER[genderFilter]===scoreitems.Gender && scoreitems.Name.indexOf(nameFilter)> -1){
					scoreNotes.push(<Line key={scoreitems.Id} score={scoreitems} />);
				}
			}
			}
			
		);
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
					<thead>
					  <tr>
					    <th>Name</th>
					    <th>Gender</th>
					    <th>Math</th>
					    <th>Language</th>
					    <th>Operation</th>

					  </tr>
					  </thead>
					  <tbody>
					
					  {scoreNotes}
					  
					  </tbody>
					  </table>
					
				</div>
		);
	}

});



var Line=createReactClass({
	
	delete:function(){
		this.refs.mytable.remove();
	},

	render:function(){
		var rowline = this.props.score;
		return(
				<tr ref="mytable" >
				    <td>{rowline.Name}</td>
				    <td>{rowline.Gender}</td>
				    <td>{rowline.Math}</td>
				    <td>{rowline.Language}</td>
				    <td><button onClick={this.delete}>Remove</button></td>
				</tr>
			);
	}
});



ReactDOM.render(
				<div>
				<StudentScoreTable/>
				</div>
				,document.getElementById('example'));
registerServiceWorker();
