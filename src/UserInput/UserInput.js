import React from 'react';
const style={
  border:'1px solid red',
}

const UserInput=(props)=>{
  return <input type="text" onChange={props.changed} value={props.currentName} style={style}/>
}
export default UserInput;
