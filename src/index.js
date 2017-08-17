import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
var createReactClass = require('create-react-class'); //----this is for handling react 15.6.1 component error
var axios = require('axios');  //-----for read load api json
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
// 		return (<div classCity ="container">		
// 					<div>{this.props.children}</div>
// 					<button onClick={this.edit}classCity ="buttoner">edit</button>
// 					<button onClick={this.remove}classCity ="buttoner">remove</button>
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
// 		<button classCity="buttoner" onClick={this.save}>save</button>
// 		</div>
// 		);
// 	},
// 	nomalrender: function(){
// 		return(
// 		<div >
// 			<p>{this.props.children}</p>
// 			<button classCity="buttoner" onClick={this.remove}>remove</button>
// 			<button classCity="buttoner" onClick={this.edit}>edit</button>
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
// 				<button classCity="buttoner" onClick={this.add.bind(null,"Default text")}>ADD NEW COMMENT BOX</button>
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
// var i=0;
var http='http://api.apixu.com/v1/current.json?key='
var apiKey='b83287318bb74860b7801352171508&q='

var StudentScoreTable = createReactClass({
	getInitialState:function(){
		return{CityFliter:'',
				EvaluationFliter: '0',
				data:[],
				deleteflag:false,
				Id:0
				// condition:''
				// weather:{}
				}
	},
	componentWillMount(){
		this.WeatherData();
	},
	WeatherData:function(CityAsk=''){
		console.log(CityAsk);
		if (CityAsk!==''){
		var url=http+apiKey+CityAsk;
		var weatheradd={};
		// var condition='';
		// console.log(i);
		var State=this;
		// var addd={};
		var i=this.state.Id;
		var data = this.state.data;
		// var i=this.state.Id;
		axios.get(url).then(function(items){
			// console.log(items);
			
			weatheradd.Id = i;
			weatheradd.City = items.data.location.name;
			weatheradd.Evaluation = 'Go outside!';
			// this.setState({condition:items.data.current.condition.text})
			weatheradd.Condition = items.data.current.condition.text;
			// State.setState({weather:response.data.location.name});
			weatheradd.Temperature = items.data.current.temp_c;
			weatheradd.Humidity = items.data.current.humidity;
			weatheradd.WindDegree = items.data.current.wind_degree;
			weatheradd.deleteflag=false;
			data.push(weatheradd);
			State.setState({data:data});
			i++;
			State.setState({Id:i});
			
		});}else{return }
		// weatheradd.City=CityAsk;
		// weatheradd.Evaluation = 'Go outside!';
		// weatheradd.Id = i;
		// weatheradd.Condition = this.state.condition;
		// data.push(weatheradd);
		// console.log(this.state.weather);
		// console.log(weatheradd.Temperature);

		
		// console.log(i);
		// addd.push[weatheradd];
		// console.log(addd);

		// console.log(weather);
		// console.log(weather);
		// this.setState({data:CityAsk});
	},
	onCityChange:function(City){
		this.setState({CityFliter:City});
	},
	onEvaluationChange:function(Evaluation){
		this.setState({EvaluationFliter:Evaluation});
		// console.log(this.state.EvaluationFliter);
	},
	adddata:function(data){
		this.setState({data:data});
	},
	// onDelete:function(DeleteFlag){
	// 	var data = this.state.
	// },
	addId:function(){
		var i=this.state.Id;
		i++;
		this.setState({Id:i});
	},
	WeatherDataadd:function(CityAsk){
		this.WeatherData(CityAsk);
	},
	onDeletehander:function(id){
		var deleteflag=this.setState.bind(this);
		var data=this.state.data.map(function(item){
			if (item.Id===id){
				item.deleteflag=true;
				deleteflag({deleteflag:true});
			}
			return item;
		});
	},
	render:function(){
		return(
				<div>
				<CityWeather GetWeatherData={this.WeatherDataadd}/>
				<EvaluationSearch onEvaluationChange = {this.onEvaluationChange}/>
				<CitySearch onCityChange={this.onCityChange}/>	
				<ModifInfo CityFilter={this.state.CityFliter} EvaluationFliter={this.state.EvaluationFliter} data={this.state.data}
				adddata={this.adddata} ondeletehander={this.onDeletehander} deleteflag={this.state.deleteflag} Id={this.state.Id}
				addId={this.addId}/>
				</div>
			)
	}
})

var CityWeather=createReactClass({
	GetData:function(){
		this.props.GetWeatherData(this.refs.CityAsk.value);
		this.refs.CityAsk.value='';
	},
	render:function(){
		return(
				<div className="EvaluationSearch">
				<text > City: </text>
				<input ref='CityAsk' ></input>
				<button className = "buttoner" onClick={this.GetData}>Submit</button>
				</div>

			)
	}
})

var EvaluationSearch = createReactClass({
	onFocus:function(event){
		// console.log(event.target.value);
		this.props.onEvaluationChange(event.target.value);
	},
	render:function(){
		return (<div className = "EvaluationSearch">
					<text> Evaluation Search: </text>
					<select onChange={this.onFocus}>
						<option value = '0' >All</option>
						<option value = '1' >Go outside!</option>
						<option value = '2'>Stay at home</option>
					</select>
				</div>
			);
	}
});

var CitySearch = createReactClass({

	updachange:function(event){
		// this.setState({Search:event.target.value.substr(0,10)});
		this.props.onCityChange(event.target.value.substr(0,10));
		// console.log(event.target.value);
		// console.log(event.target.value);
	},
	render:function(){
		return (<div className = "EvaluationSearch">
					<text > City Search: </text>
					<input onChange = {this.updachange}></input>
				</div>
		);
	}

});

var ModifInfo = createReactClass({
	ItemSave:function(){
		var arr={};
		var ItemCity = this.refs.inputCity.value;
		var ItemEvaluation = this.refs.optionValue.value;
		var ItemCondition = this.refs.inputCondition.value;
		var ItemTemperature = this.refs.inputTemperature.value;
		var ItemHumidity = this.refs.inputHumidity.value;
		var ItemWindDegree = this.refs.inputWindDegree.value;

		this.refs.inputCity.value ='';
		this.refs.inputCondition.value ='';
		this.refs.inputTemperature.value ='';
		this.refs.inputHumidity.value ='';
		this.refs.inputWindDegree.value ='';

		arr.Id=this.props.Id;
		arr.City=ItemCity;
		arr.Evaluation=ItemEvaluation;
		arr.Condition=ItemCondition;
		arr.Temperature=ItemTemperature;
		arr.Humidity=ItemHumidity;
		arr.WindDegree=ItemWindDegree;
		arr.deleteflag=false;
		// console.log(arr);
		var sumarr = this.props.data;
		sumarr.push(arr);
		this.props.adddata(sumarr);
		this.props.addId();
		// console.log(this.state.addarr);
		// i++;
	},
	deletehander:function(id){
		this.props.ondeletehander(id);
	},
	render:function(){
		var scoreNotes=[];
		var CityFilter=this.props.CityFilter;
		var EvaluationFilter=parseInt(this.props.EvaluationFliter);
		// this.deletehander=this.deletehander.bind(this);
		// console.log(EvaluationFilter);
		var deletehander=this.deletehander;
		// console.log(this.props.data);
		 // if (EvaluationFilter==='1'){console.log("ogogog")};
		var Evaluation=['All','Go outside!','Stay at home'];
		// console.log(this.props.data);
		this.props.data.map(function(scoreitems,i){
			// console.log(CityFilter);
			// this.deletehander=this.deletehander.bind(this);
			if (CityFilter===''&& EvaluationFilter===0){
			// console.log("fofofo");
			// console.log(scoreitems);
			!scoreitems.deleteflag&&scoreNotes.push(<Line key={i} score={scoreitems} ondelete={deletehander}/>);
			}
			if (CityFilter!=='' && EvaluationFilter===0){
			if(scoreitems.City.indexOf(CityFilter)> -1){
				!scoreitems.deleteflag&&scoreNotes.push(<Line key={i} score={scoreitems} ondelete={deletehander}/>);
				}
			}
			if (CityFilter ==='' && EvaluationFilter!==0){
				if (Evaluation[EvaluationFilter]===scoreitems.Evaluation){
					!scoreitems.deleteflag&&scoreNotes.push(<Line key={i} score={scoreitems} ondelete={deletehander}/>);
				}
			}
			if (CityFilter!=='' && EvaluationFilter!==''){
				if (Evaluation[EvaluationFilter]===scoreitems.Evaluation && scoreitems.City.indexOf(CityFilter)> -1){
					!scoreitems.deleteflag&&scoreNotes.push(<Line key={i} score={scoreitems} ondelete={deletehander} />);
				}
			}
			}
			
		);
		return (<div className = "EvaluationSearch">
					<text > City: </text>
					<input ref='inputCity'></input>
					<text > Evaluation: </text>
					<select ref = 'optionValue'>
						<option  value = 'Go outside!'>Go outside!</option>
						<option  value = 'Stay at home'>Stay at home</option>
					</select>
					<text > Condition: </text>
					<input ref='inputCondition'></input>
					<text > Temperature: </text>
					<input ref="inputTemperature"></input>
					<text > Humidity: </text>
					<input ref="inputHumidity"></input>
					<text > Wind Degree: </text>
					<input ref="inputWindDegree"></input>
					<button className = "buttoner" onClick = {this.ItemSave}>Save</button>
					
					<table className = "table">
					<thead>
					  <tr>
					    <th>City</th>
					    <th>Evaluation</th>
					    <th>Condition</th>
					    <th>Temperature</th>
					    <th>Humidity</th>
					    <th>Wind Degree</th>
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
		// this.refs.mytable.remove();
		this.props.ondelete(this.props.score.Id);
	},

	render:function(){
		var rowline = this.props.score;
		// console.log(rowline);
		// console.log(rowline.City);
		return(
				<tr ref="mytable" >
				    <td>{rowline.City}</td>
				    <td>{rowline.Evaluation}</td>
				    <td>{rowline.Condition}</td>
				    <td>{rowline.Temperature}</td>
				    <td>{rowline.Humidity}</td>
				    <td>{rowline.WindDegree}</td>
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
