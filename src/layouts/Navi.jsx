import React,{useState} from 'react'
import { Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    const [isAuthenticated, setisAuthentIcated] = useState(true)
    return (
        <div>
        <Menu inverted>
        <Menu.Item header >Our Company</Menu.Item>
        <Menu.Item
          name='aboutUs'
         
        />
        <Menu.Item
          name='jobs'
         
        />
        <Menu.Item
          name='locations'
          
        />
        <Menu.Item position="right">
        </Menu.Item>
{isAuthenticated?<SignedOut/>:<SignedIn/>}

      </Menu>
        </div>
    )
}
