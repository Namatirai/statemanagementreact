import React, { useState } from 'react';

function AddPersonForm(props) {
  const [name, setName] = useState('');

  function onChangeHAndler(event) {
    setName(event.target.value);
  }

  function onAddPerson(event) {
    event.preventDefault();
    const Person = {
      id: Math.random.toString(),
      name: name,
    };
    props.onAddPerson(Person);
  }
  return (
    <>
      <form onSubmit={onAddPerson}>
        <h2>Contact Manager</h2>
        <input onChange={onChangeHAndler} id="name" type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddPersonForm;
