import React, { Component } from 'react'

export class User extends Component {
    constructor(){
        
        super();
        this.state={
            Name:"Krushnal",
            Number:'111'
        }
        console.log('Constuctor Called');
    }
    componentWillUnmount(){
        console.log('Will UnMount');
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('previous value ',prevState.Name,prevState.Number);
        return{}
    }
    componentDidUpdate(){
        // if(this.state.Name==='Soni')
        // {
        //     throw new Error("Error")
        // }
      
        return console.log('DidUpdate')
    }
    shouldComponentUpdate(newProps,newState){
        return true 
     }
    componentDidMount(){
        console.log("Did Mount");
        
        
        setTimeout(() => {
            this.setState({Number:'1331'}) 
         }, 
         4000);
        setTimeout(() => {
            this.setState({Name:'Soni'}) 
         }, 
         2000);
    }
    
    
    
    render() {
        console.log('Render Method ');
        return (
            <div>
            <ul>
            <div>{`Name : ${this.state.Name}`}</div>
            <div>{`Number : ${this.state.Number}`}</div>
            </ul>   
            </div>
        )
    }
}

export default User
