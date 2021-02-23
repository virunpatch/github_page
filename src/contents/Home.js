import React, { Component } from 'react';
// import profilepic from '../img/profile.jpg';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://i.pinimg.com/564x/69/f4/ff/69f4ff2f8b79570b0018914ec5734ccd.jpg" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Virunpatch', 'I am a Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;