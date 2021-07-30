import React, { Component } from 'react'

class Test extends Component{
    state={
        count:0
    }
    
    render(){
        return (
            <div>
                <h1>count = {this.state.count}</h1>

                <button
                    onClick={ ()=> {
                        this.setState( (prev)=>{
                            return {
                                count: prev.count+1
                            }
                        },
                            ()=>{
                                console.log('Clicked--',this.state.count);
                            }
                        );
                    }}

                >Add</button>
            </div>  
        );
    }
}

export default Test;