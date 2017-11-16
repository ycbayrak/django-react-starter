import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/milligram/milligram.sass';
import './Home.scss';

import Navbar from '../components/Navbar.jsx';
import FeedBackForm from '../components/FeedbackForm.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    return (
        <div className="Home">
            <Navbar />
            <h1>Hello {this.props.name}</h1>
            <FeedBackForm />
        </div>
      );
  }
}

ReactDOM.render(<Home name={window.props.name} />, document.getElementById('app'));