// import React from 'react';
import '../App.css';

const Head  = (props) => {
    let list  = props.list;

    let val = [];
    for(let i = 0; i < list.length; i++) {
        val.push(<p>Name: {list[i][0]} | Department: {list[i][1]} | Rating: {list[i][1]}</p>);
    }

    return (
        <div >
            <h1 id='first'>EMPLOYEE FEEDBACK DATA</h1>
            <div className='btn'>
                {val}
            </div>
            <button onClick={props.method} id="btn4">back</button>
        </div>
    );

}


export default Head;