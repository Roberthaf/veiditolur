import React, { PureComponent } from 'react';
import { render } from 'react-dom';


class App extends PureComponent {
  constructor (props) {
    super(props);
    
    this.handleIncrement = this.handleIncrement.bind(this);
    
    this.state = {
      myObj: {
        number: 0
      }
    };
  }
  
  handleIncrement () {
    const { myObj } = this.state;
    myObj.number++;
    
    // To prove this handle is actually being called
    console.log('Incrementing myObj', myObj);
    
    this.setState({
      myObj
    });
  }
  
  render() {
    const { myObj } = this.state;
    const styles = {
      fontFamily: 'sans-serif',
      textAlign: 'center',
    };
    
    return (
      <div style={styles}>
        <SubComponent obj={myObj} />
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

const SubComponent = ({ obj }) => (
  <p>Value: {obj.number}</p>
);

render(<App />, document.getElementById('root'));
