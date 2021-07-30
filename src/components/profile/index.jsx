import React, { Component } from 'react'
import './profile.style.css'
import Bio from './bio'

class Profile extends Component {

    obj={
        name:'Ruhul Amin',
        title:'I am a Student...'
    };

    render() {
        return (
            <div className='container'>
             
                <Bio name={this.obj.name} title={this.obj.title} />
                <div className='skills'>
                    <h3>Skills:</h3>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div className='links'>
                    <h3>Links:</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>  
                        <li><a href="#">GitHub</a></li>  
                        <li><a href="#">Gamil</a></li>  
                    </ul>
                </div>
            </div>
        );
    }
}

export default Profile;