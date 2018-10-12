import React from 'react';
import {Calc} from './containers/Calc';
export default class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Calc/>
      </div>
    );

  }
}