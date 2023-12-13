import React from 'react';
import { generate } from 'random-words';

import ComponentClass from "./components/componentClass/componentClass";
import PureComponentClass from './components/pureComponentClass/pureComponentClass';
import ComponentFunc from './components/componentFunc';

export default class App extends React.Component {
  state = {
    count: 0,
    str: 'str',
    pure: 'pure',
    func: 'func'
  }

  componentDidMount() {
    setInterval(() => {
      if(this.state.count % 2) {
        this.setState({
          count: this.state.count + 1,
          str: generate(),
        })        
      } else {
        this.setState({
          count: this.state.count + 1,
          str: generate(),
          pure: generate(),
        }) 
      }

    }, 3000)
  }

  render() {
    return (
      <header className="App-header">
        <ComponentClass string={this.state.str}/>
        <PureComponentClass string={this.state.pure}/>
        <ComponentFunc string={this.state.func}/>
      </header>
    );
  }
  
}
