import React, { useState } from 'react';

function AssetItem(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <h4>{props.cost}</h4>
    </>
  );
}

export default AssetItem;
