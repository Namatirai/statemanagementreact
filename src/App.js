import React, { useState } from 'react';
import './style.css';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';
import AssetForm from './components2/AssetForm';
import AssetList from './components2/AssetList';
const People = [
  {
    id: '0',
    name: 'nama',
  },
  {
    id: '2',
    name: 'tadiwa',
  },
  { id: '3', name: 'nyasha' },
];

const Asset = [
  {
    id: '0',
    name: 'nama',
    cost: 40,
  },
  {
    id: '2',
    name: 'tadiwa',
    cost: 90,
  },
  { id: '3', name: 'nyasha', cost: 80 },
];

export default function App() {
  const [people, setPeople] = useState(People);
  const [asset, setAsset] = useState(Asset);
  const AddPersonHandler = (person) => {
    setPeople((previousstate) => {
      return [person, ...previousstate];
    });
    console.log(people);
  };

  const onSaveAssetDataHandler = (asset) => {
    setAsset((previousassetstate) => {
      return [asset, ...previousassetstate];
    });
    console.log(asset);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <AddPersonForm onAddPerson={AddPersonHandler} />
      <PeopleList items={people} />
      <AssetForm onSaveAssetData={onSaveAssetDataHandler} />
      <AssetList items={asset} />
    </div>
  );
}
