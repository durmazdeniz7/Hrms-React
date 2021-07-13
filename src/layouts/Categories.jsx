import React from 'react'
import { Header, Menu } from 'semantic-ui-react'
export default function Categories() {
    return (
        <div>
            
            <Menu vertical inverted>
        <Menu.Item
          name='promotions'
         
        >
          <Header as='h4'>Promotions</Header>
          <p>Check out our new promotions</p>
        </Menu.Item>

        <Menu.Item
          name='coupons'
         
        >
          <Header as='h4'>Coupons</Header>
          <p>Check out our collection of coupons</p>
        </Menu.Item>

        <Menu.Item
          name='rebates'
          
        >
          <Header as='h4'>Rebates</Header>
          <p>Visit our rebate forum for information on claiming rebates</p>
        </Menu.Item>
      </Menu>
        </div>
    )
}
