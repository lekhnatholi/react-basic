import React from 'react';
import './UserOutput.css';
const UserOutput=(props)=>{
  return(
    <div className="UserOutput">
     <p>UserName:{props.userName} </p>
     <p> I don't wanted to duplicate the text again</p>
    </div>
  );
}

export default UserOutput;
