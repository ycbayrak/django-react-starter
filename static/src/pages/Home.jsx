import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Fade } from 'reactstrap';
import { Container } from 'reactstrap';
import { slide as Menu } from 'react-burger-menu'


import './Home.scss';

import Header from '../components/Navbar.jsx';
import SideBar from '../components/SideBar.jsx';
import Content from './Content.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

    render() {
        return (
            <div id="Home" className="Home">
                <Menu id={'push'} pageWrapId="page-wrap" outerContainerId="Home">
                    <SideBar />
                </Menu>
                <Container>
                    <main id="page-wrap">
                        <Content className="mt-30" />
                    </main>
                </Container>
            </div>
        );
    }
}

ReactDOM.render(<Home name={window.props.name} />, document.getElementById('app'));