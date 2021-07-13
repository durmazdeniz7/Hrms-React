import React from 'react'
import { Container, Divider, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import JobTitle from '../pages/JobTitle'
import Categories from './Categories'
import Navi from './Navi'

export default function Dashbooard() {
    return (
        <div>
      <Container>
      <Navi/>
      <Divider/>
      <Grid>
          <GridRow>
          <GridColumn width={4}>
          <Categories/>
          </GridColumn>
          <GridColumn width={4}>
          <JobTitle/>
          </GridColumn>
          </GridRow>
          
      </Grid>
  
     
     
      </Container>
            
        </div>
    )
}
