import React, { useState } from 'react';

function AssetForm(props) {
  const [assetname, setAssetName] = useState('');

  const [cost, setCost] = useState();

  function onChangeName(event) {
    setAssetName(event.target.value);
  }

  function onChangeCost(event) {
    setCost(event.target.value);
  }

  function onAddAsset(event) {
    event.preventDefault();
    const AssetData = {
      id: Math.random().toString(),
      name: assetname,
      cost: cost,
    };
    props.onSaveAssetData(AssetData);
    //connect to the data saved in the form props
  }

  return (
    <>
      <form onSubmit={onAddAsset}>
        <label htmlfor="name">Asset Name</label>
        <input id="name" type="text" onChange={onChangeName} />
        <label htmlfor="cost">Cost</label>
        <input id="cost" type="number" onChange={onChangeCost} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
export default AssetForm;
