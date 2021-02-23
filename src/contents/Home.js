import React, { Component } from 'react';
// import profilepic from '../img/profile.jpg';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a844829-08b7-48eb-94f6-83b0014c5576/de9ufql-8e42128d-1c38-48de-b904-eb7181caf294.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2E4NDQ4MjktMDhiNy00OGViLTk0ZjYtODNiMDAxNGM1NTc2XC9kZTl1ZnFsLThlNDIxMjhkLTFjMzgtNDhkZS1iOTA0LWViNzE4MWNhZjI5NC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.AkO5I7-rMQJcwl3u-mrhWmbljZyF1UObgmBLsj0GEyM" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Virunpatch', 'I am a Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;