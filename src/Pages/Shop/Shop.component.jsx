import React, { Component } from 'react';
import Shop_Data from './shop.data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

export default class ShopPage extends Component {
  constructor(props){
    super(props)
    this.state={
     collections:Shop_Data
    }
  }
  render() {
    const {collections}=this.state;
    return (
      <div className="shop-page">
        {collections.map(({id,...props})=>(
          <CollectionPreview key={id} {...props}/>
        ))
        }
      </div>
    );
  }
}
