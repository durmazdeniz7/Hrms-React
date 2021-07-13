import React, { useState } from 'react'
import { Menu,Button } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    const [isAuthenticated, setisAuthentIcated] = useState(true)

  function  handleSignOut(){
        setisAuthentIcated(false)
    }
    function  handleSignIn(){
        setisAuthentIcated(true)
    }
    return (
        <div>
            <Menu inverted >
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
                <Menu.Item>
      <Button primary>Sign up</Button>
    </Menu.Item>

    <Menu.Item>
      <Button>Log-in</Button>
    </Menu.Item>

                
                 {isAuthenticated ? <SignedOut signOut={handleSignOut} /> : <SignedIn signIn={handleSignIn} />} 

            </Menu>
        </div>
    )
}
