import React, { Component } from 'react'

const Bio = (props)=>(
    <div className='bio'>
    <h3>My name is {props.name}</h3>
    <p>{props.title}</p>
</div>
);

export default Bio;