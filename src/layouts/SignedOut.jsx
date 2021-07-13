import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Menu,Image } from 'semantic-ui-react'


export default function SignedOut({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png" />
                <Dropdown pointing="top left" text="Deniz">
                    <DropdownMenu >
                        <DropdownItem text="Bilgilerim" icon="info"/>
                        <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </DropdownMenu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
