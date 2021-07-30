import React, { Component } from 'react'
import Profile from './profile/index'

const MyComponent = ()=> <h1>Hi...</h1>

class App extends Component {

    render(){ 
    
    const name = 'Hridoy'

    const obj={
        name:'Ruhul Amin',
        title:'This is a title',
        id:'h1'
    };

        return (
            <div className='App'>
                {/* <h1 {...obj}>Hello Ruhul Amin {name}</h1>
                <h4>{new Date().toDateString()}</h4>
                <MyComponent/> */}

                <Profile />
                
            </div>
        );
        
    }
}

export default App