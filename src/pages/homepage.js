import React from 'react';
import Input from '../components/input';
import DatePicker from '../components/datePicker'
import styled from 'styled-components'


const VerticalSplit = styled.div`
  width: 100%
`


const HalfPaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`


const homePage = () => {

  return (
    <div>
      <Input />
      <div


      >

        <HalfPaneContainer>

          <DatePicker />


          {/* <div style={{ background: 'red', height: '300px', width: '100%' }} /> */}


        </HalfPaneContainer>

      </div>




    </div>
  )
}

export default homePage;

