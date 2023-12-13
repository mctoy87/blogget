import React from 'react';

export default class PureComponentClass extends React.PureComponent {
  // typeComponent = 'Class';

  // state = {
  //   count: 0,
  // };

  // logged = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  //   console.log(++this.state.count)
  // };

  render() {
    console.log('_____________________');
    console.log('PureComponentClass');
    return (
      // <div className="container">
      //   <p>{this.typeComponent} {this.state.count}</p>
      //   <button onClick={this.logged}>Component</button>
      // </div>
      <p>{this.props.string}</p>
    )
  }
}