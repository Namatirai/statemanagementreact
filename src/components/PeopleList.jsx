import React, { useState } from 'react';
import PersonItem from './PersonItem';
function PeopleList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <PersonItem key={item.id} name={item.name}></PersonItem>
      ))}
    </ul>
  );
}
export default PeopleList;
