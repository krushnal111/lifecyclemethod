import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state={
            hasError:false,
        }
    }
    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }
    render() {
        if(this.state.hasError){
            return  <p> Something Went Wrong</p>
        }
        return (
            <div>
            
            {this.props.children}                
            </div>
        )
    }
}

export default ErrorBoundary
