 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Ubon Ratchathani University Computer Science" where="Ubon Ratchathani University" from="2019" to="Present" />
                 <Widecard title="WebDev" where="Benchama Maharat School" from="2013" to="2018" />
             </div>
         );
     }
 }
 
 export default Education;