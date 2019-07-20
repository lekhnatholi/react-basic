import React, { Component } from 'react';
// import React, { useState} from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBounday from '../components/ErrorBoundary/ErrorBoundary';
// import Radium,{ StyleRoot } from 'radium'
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import Validation from './Validation/Validation';
// import Char from './Char/Char';

// use of hooks as a functional Component use in react version 16.8 and above
// const app=props=> {
// const [setPerson,setPersonState]=useState({
// 	persons:[
// 	{name:"Max", age:29},
// 	{name:"Manu", age:28},
// 	{name:"Staphen", age:20}
// ],
// otherState:'other some values'
// })
// const switchEventHandler=()=>{
// 	// console.log('was clicked');
// 	// don't do this.state.person[0].name='Maximus';
// 	setPersonState({
// 		persons:[
// 		{name:"Maximus", age:29},
// 		{name:"Manu", age:28},
// 		{name:"Staphen", age:27}
// 		]
// 		}
// 	)
// }
// return (
// 	<div className='App'>
// 	 <h1>This is the React App</h1>
// 		 <p> React paragraph </p>
// 		 <button onClick={switchEventHandler}>Switch Name</button>
// 		 <Person name={setPerson.persons[0].name} age={setPerson.persons[0].age} />
// 		 <Person name={setPerson.persons[1].name} age={setPerson.persons[1].age} > My Habbies: Programming</Person>
// 		 <Person name={setPerson.persons[2].name} age={setPerson.persons[2].age} />
// 	 </div>
// );
//
// // return React.createElement('div',{className:'App'}, React.createElement('h1' ,null,'Is this workking??'));
//
// 	};
// export default app;

 // onChanged and onClick events using state
class App extends Component {
	state={
		persons:[
		{id:'1', name:"Max", age:29},
		{id:'2', name:"Manu", age:28},
		{id:'3', name:"Staphen", age:20}
	],
	otherValue:'other sample value',
	showPerson:false
};
	// switchEventHandler=(newName)=>{
	// 	this.setState({
	// 				persons:[
	// 				{name:newName, age:29},
	// 				{name:"Manu", age:28},
	// 				{name:"Staphen", age:27}
	// 				]
	//
	// 	});
	// }

	deletePersonHandler=(personIndex)=>{
		// const persons=this.state.persons.slice();
		const persons=[...this.state.persons];
		persons.splice(personIndex,1);
		this.setState({persons:persons});
	};

nameChangedHandler=(event,id)=>{
	const personsIndex= this.state.persons.findIndex(p=>{
		return p.id===id;
	});
	const person={
		...this.state.persons[personsIndex]
	};
	// const person=Object.assign({},this.state.persons[personsIndex]);
	person.name=event.target.value;
	const persons=[...this.state.persons];
	persons[personsIndex]=person;
	this.setState({persons:persons})
}

togglePersonHandler=()=>{
	const doesShow=this.state.showPerson;
	this.setState({showPerson:!doesShow})

}

	render(){
		const styles= {
			border:'1px solid blue',
			cursor:'pointer',
			backgroundColor:'blue',
			color:'white',
			font:'inherent',
			padding:'10px'
			// ':hover':{
			// 	backgroundColor:'lightgreen',
			// 	color:'black'
			// }
		};
		let persons=null;
		if (this.state.showPerson) {
			persons = (
				<div>
			{this.state.persons.map((person,index)=> {
				return <ErrorBounday key={person.id}>
				<Person
					click={()=>this.deletePersonHandler(index)}
					name={person.name}
					age={person.age}
					changed={(event)=>this.nameChangedHandler(event,person.id)}/>
				</ErrorBounday>
			})}
			</div>
		);
		styles.backgroundColor = 'red';
		// styles[':hover']={
		// 	backgroundColor:'salmon',
		// 	color:'black'
		// }
	}
	// let classes=['red','bold'].join(' ');
	const classes=[];
	if (this.state.persons.length<=2) {
		classes.push('red');
	}
	if (this.state.persons.length<=1) {
		classes.push('bold');
	}

		// 	persons = (
		// 		<div>
		// 		<Person
		// 			name={this.state.persons[0].name}
		// 			age={this.state.persons[0].age} />
		// 		<Person
		// 			name={this.state.persons[1].name}
		// 			age={this.state.persons[1].age} click={this.switchEventHandler.bind(this,'Max!')}
		// 				changed={this.nameChangedHandler}  > My Habbies: Programming</Person>
		// 		<Person
		// 			name={this.state.persons[2].name}
		// 			 age={this.state.persons[2].age} />
		// 	 </div>
		//  );
		//
		// }

		return(
			// <StyleRoot> // media query
				<div className='App'>
				 <h1>This is the React App</h1>
					 <p className={classes.join(' ')}> React paragraph </p>
					 <button style={styles}
						 onClick={this.togglePersonHandler}>Toggle Person</button>
					 {persons}
				 </div>
				 // </StyleRoot>
  		)


// assigment 1

// state={
// 	username:'Maximus'
// };
// userNamechangedHandler=(event)=>{
// 	this.setState({
// 		username:event.target.value
// 	});
// }
//
// render(){
// 	return(
// 		<div>
// 			<ol>
//           <li>Create TWO new components: UserInput and UserOutput</li>
//           <li>UserInput should hold an input element, UserOutput two paragraphs</li>
//           <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
//           <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
//           <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
//           <li>Add a method to manipulate the state (=> an event-handler method)</li>
//           <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
//           <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
//           <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
//           <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
//         </ol>
// 			<UserInput  changed={this.userNamechangedHandler} currentName={this.state.userName}/>
// 			<UserOutput  userName={this.state.username}  />
// 			<UserOutput userName={this.state.username}  />
// 			<UserOutput userName="Max" />
// 		</div>
// 	)
// }

// assigment 2
// state={
// 	userInput:''
// };
// inputChangeHandler=( event )=>{
// 	this.setState({userInput:event.target.value})
// };
//
// deleteCharHandler = ( index )=>{
// 	const text= this.state.userInput.split(''); //convert string to array of charater.
// 	text.splice(index,1);
// 	const updatedText=text.join('');//convert array of character to string again.
// 	this.setState({userInput:updatedText});
// }
//
// render() {
// 	const charList=this.state.userInput.split('').map((ch, index)=>{
// 		return <Char chracter={ch}
// 			key={index}
// 			clicked={()=>this.deleteCharHandler(index)} />
// 	});
// 	return (
// 		<div className="App">
// 		        <ol>
// 		          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
// 		          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
// 		          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
// 		          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
// 		          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
// 		          <li>When you click a CharComponent, it should be removed from the entered text.</li>
// 		        </ol>
// 		        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
// 		        <hr />
// 						<input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
// 						<p>{this.state.userInput}</p>
// 						<Validation userLenght={this.state.userInput.length} />
// 						{charList}
// 		</div>
//
// 	);
// }

};
}
// export default Radium(App);
export default App;
