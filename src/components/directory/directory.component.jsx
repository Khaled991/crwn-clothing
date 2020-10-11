import React, { Component } from 'react';
import'./directory.style.scss';
import MenuItme from '../menu-itme/menu-itme.component';

class Directory extends Component {
  constructor(){
    super()
    this.state={
      sections:[
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        },
        // {
        //   title: 'accessories',
        //   imageUrl: 'https://freedesignfile.com/upload/2017/06/Fashion-summer-women-and-cosmetics-and-accessories-HD-picture-01.jpg',
        //   size: 'large',
        //   id: 6,
        //   linkUrl: 'shop/accessories'
        // },      
      ]
    }
  }
  render() {
    return (
    <div className="directory-menu">
      {
      this.state.sections.map(({id,...props})=>(
        <MenuItme key={id} {...props}/>
      ))
      }
      </div>
    );
  }
}

export default Directory;
