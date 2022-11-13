import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import { robots } from './robots.js';
import Scroll from './Scroll.js';
import './App.css'

class App extends Component {

     constructor(){
          super();
          this.state = {
               robots : robots,
               searchfield : '',
          }

     }
     

     onSearchChange = (event) => { 
          this.setState({searchfield: event.target.value});
          
     }



     render(){

          const filteredRobots = this.state.robots.filter(robot => {
               return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
          })
          return(
               <div className='tc'>
                    <h1 className='f1'>robofriends</h1>
                     <SearchBox searchChange={this.onSearchChange}/>
                     <Scroll>
                        <CardList robots={filteredRobots}/>
                     </Scroll>
                    
               </div>
            
          );

     }
     
}

export default App;