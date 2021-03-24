import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      input: ''
    }
  }

// searchFunction = (e) => {
  
// }

updateInput = (e) => {
  this.setState(
    {input: e.target.value}
  )
}

 render() {
   return (
     <div>
       <Input onChange={((e) => this.updateInput(e))} type='text' value={this.state.input} placeholder='Search Here' />
       <h2>Search Term:</h2>
       <h4>{this.state.input}</h4>
       <br />
       <h3>Results:</h3>
       {this.state.things.filter(thing => thing.includes(this.state.input.toLocaleLowerCase())).map(filteredThings => (
         <li>
           {filteredThings}
         </li>
       ))}
     </div>
   )
 }
}