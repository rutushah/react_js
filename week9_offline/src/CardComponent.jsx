import React from 'react';
import { useState, useEffect } from 'react';

function CardComponent() {
  return (
    <div style={{display: 'flex'}}>
      <Card innerContent="Hi there" />
      <Card innerContent={<div style={{color:"green"}}> hello there </div>} />

    </div>
  );
}

function Card(props) {
  return (
    <div style={{ background: 'black', borderRadius: '10px', color: 'white' , padding:10, margin:10}}>
      {props.innerContent}
    </div>
  );
}

export default CardComponent;