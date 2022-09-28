import React from 'react';
import Head from './Head';


class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [],
            show: true
        }

    }  

    updateData = () => {
        
        let a = document.getElementById("btn1");
        let b = document.getElementById("btn2");
        let c = document.getElementById("btn3");
        let x = a.value, y = b.value, z = c.value;
        a.value = ""; b.value = ""; c.value = "";
        this.setState(state => ({list : [...state.list, [x, y, z]]}));
        this.setState({show : false});
        
    }

    updateDataS = (d) => {
        if(d) {
            document.getElementById("st").style.display = "none";
            document.getElementById("nd").style.display = "block"; 

            return (
                <div>
                    <Head list={this.state.list} method={() => {
                        document.getElementById("st").style.display = "block";
                        document.getElementById("nd").style.display = "none"; 
                    }}/>
                </div>
            );
        }

        return null;
    }

    updateDataF = () => {
        this.setState({show: true});
        document.getElementById("st").style.display = "block";
        document.getElementById("nd").style.display = "none"; 
    }

    render() {

        return (
            <div>
                <div id='st'>
                <h1 id='first'>EMPLOYEE FEEDBACK FORM</h1>
                <label htmlFor="btn1">Name: </label>
                <input type="text" id="btn1" /> <br />
                <label htmlFor="btn2">Department: </label>
                <input type="text" id="btn2" /> <br />
                <label htmlFor="btn3">Rating: </label>
                <input type="text" id="btn3"/> <br />
                <button onClick={this.updateData}>Submit</button>
    
                </div>
                <div id='nd'>
                    {this.updateDataS(!this.state.show)}
                </div>

            </div>
        );
    }
}

export default ClassComponent;