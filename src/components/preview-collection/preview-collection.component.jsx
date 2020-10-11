import React from 'react';
import './preview-collection.style.scss'
import CollectionItme from '../Collection-itme/Collection-Itme.component';

const CollectionPreview=({title,items})=> {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((items,i)=>i < 4 ).map(({id,...otherItemProps})=>(
          <CollectionItme key={id} {...otherItemProps}/>
        ))}
      </div>
    </div>
  );
}

export default CollectionPreview;