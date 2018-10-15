import React from 'react';
import {CalcInput} from '../components/CalcInput';
import {CalcOperations} from '../components/CalcOperations';
import {CalcOutput} from '../components/CalcOutput';
export class Calc extends React.Component{
    constructor(){
        super();  // Parent Cons Call
        this.result = 0;
        this.state = {total:this.result};
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.currentOperation='';
       
    }
    operations(event){
        this.currentOperation  =event.target.innerText;
        this.result = eval(this.firstNumber + this.currentOperation + this.secondNumber);
        this.setState({total:this.result});
        console.log("Result is ",this.result);
        //console.log("Current Operation is ",event.target.innerText);
    }
    takeFirstNumber(event){
        this.firstNumber = event.target.value;
        console.log("First No is ",this.firstNumber);
    }
    takeSecondNumber(event){
        this.secondNumber = event.target.value;
        console.log("Second No is ",this.secondNumber);
    }
    // Rendering the (JSX) Output on Screen    
    render(){
        return(
            <div>
                <h2>Calc App</h2>
                <CalcInput firstInput={this.takeFirstNumber.bind(this)}
                secondInput={this.takeSecondNumber.bind(this)}
                 />
                <CalcOperations opr={this.operations.bind(this)}/>
                <CalcOutput result= {this.result}/>
            </div>
        );
    }
}