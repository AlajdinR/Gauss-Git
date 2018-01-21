import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Alajdin', age: 28 },
      {id: 2, name: 'Mumi', age: 26 },
      {id: 3, name: 'Gjorgji', age: 16 }

    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
      const persons = this.state.persons.slice();
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
  }


  nameChangeHandler = (event, id) => { 
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    this.setState({
      persons: [
        {name: "Alajdin", age: 10 },
        {name: event.target.value, age: 26 },
        {name: 'Gjorgji', age: 16 }
      ]
      
    })
  }

  toggleHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"

    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map(
          (person, index) => {
            return <Person 
            click = {this.deletePersonHandler.bind(this, index)}
            name={person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.nameChangeHandler(event, person.id)}
            deletePerson = {this.deletePersonHandler.bind(this, index)}
            />
          }
        )}
      </div> 
      );
    }

    return (
      <div className = "App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really woking!!</p>
       <button 
        style = {style}
        onClick = {this.toggleHandler}>Toggle Persons</button>
       {persons}       
       
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work Now???????'));
  }
}

export default App;
