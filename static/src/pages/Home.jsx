import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Hello {this.props.name}</h1>
        </div>
      );
  }
}

ReactDOM.render(<Home name={window.props.name} />, document.getElementById('app'));