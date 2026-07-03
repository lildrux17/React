import React from 'react';
import { useState } from 'react'
import { Component } from 'react'

// components 
import { CardList } from './components/card-list';


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      monsters:[],
      searchField:''
    }
  }
  
  onSearchChange = (event)=>{
    const searchInput = event.target.value.toLowerCase();
    // set state
    this.setState({
      searchField: searchInput  
    })
  }



  async fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) return;
        const data = await response.json();
         // set monster state
          this.setState({
            monsters: data
          });
    }catch(err){
      console.log(err);
    }
    
  }

  // mounting lifecycle method
  componentDidMount(){
    this.fetchData()
  } 

  render(){
      //filtered cards
      const filteredMonsters = this.state.monsters.filter(monster=>{
        return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      }) 
    return(
      <div className='App'>
        {/* filter cards */}

          {/* generate cards */}
          <CardList monsters={filteredMonsters} onSearchChange={this.onSearchChange} />
      
             
      </div>
    )  
  }

}

export default App
