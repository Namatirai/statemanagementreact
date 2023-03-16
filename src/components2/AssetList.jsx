import React, { useState } from 'react';
import AssetItem from './AssetItem';
function AssetList(props) {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <AssetItem key={item.id} name={item.name} cost={item.cost} />
        ))}
      </ul>
    </>
  );
}
export default AssetList;
