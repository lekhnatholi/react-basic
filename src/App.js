import React, { Component } from 'react';
// import React, { useState} from 'react';
import './App.css';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

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
	// const person=Object.assign({},this.state.persons[personIndex]);
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
			backgroundColor:'white',
			font:'inherent',
			padding:'10px'
		};
		let persons=null;
		if (this.state.showPerson) {
			persons = (
				<div>
			{this.state.persons.map((person,index)=> {
				return <Person
					click={()=>this.deletePersonHandler(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={(event)=>this.nameChangedHandler(event,person.id)}/>
			})}
			</div>
		);
			// persons = (
			// 	<div>
			// 	<Person
			// 		name={this.state.persons[0].name}
			// 		age={this.state.persons[0].age} />
			// 	<Person
			// 		name={this.state.persons[1].name}
			// 		age={this.state.persons[1].age} click={this.switchEventHandler.bind(this,'Max!')}
			// 			changed={this.nameChangedHandler}  > My Habbies: Programming</Person>
			// 	<Person
			// 		name={this.state.persons[2].name}
			// 		 age={this.state.persons[2].age} />
			//  </div>
		 // );
		}

		return(
				<div className='App'>
				 <h1>This is the React App</h1>
					 <p> React paragraph </p>
					 <button style={styles}
						 onClick={this.togglePersonHandler}>Toggle Person</button>
					 {persons}
				 </div>
  		)
	}

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
};
export default App
