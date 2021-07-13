import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function SignedIn({signIn}) {
    return (
        <div>

            <Dropdown item text="Giriş Yap">
<Dropdown.Menu>
                <Dropdown.Item onClick={signIn}> 
                    
                    İş Arayan Girişi
                </Dropdown.Item>
                <Dropdown.Item>
                    İş Veren
                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>


            {/* <Button secondary>
                Giriş Yap
            </Button> */}
        </div>
    )
}
