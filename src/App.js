import React, { Component } from 'react'
import ErrorBoundary from './components/ErrorModal'
import User from './components/User'    

export class App extends Component {
  constructor(){
    super()
    this.state={
      toggle:true
    }
  }
  render() {
    return (
      <ErrorBoundary >   
     <div><h1>LifeCycle Method</h1>
     {this.state.toggle?<User/>:null }
       
        <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>User</button> 
     </div>
      </ErrorBoundary>
    )
  }
}

export default App
